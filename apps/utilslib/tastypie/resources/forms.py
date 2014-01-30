# -*- coding: utf-8 -*-
# http://www.slideshare.net/tarequeh/django-forms-in-a-web-api-world

from __future__ import unicode_literals

import six

from tastypie import http
from tastypie import fields
from tastypie.resources import DeclarativeMetaclass, Resource

from django.http import HttpResponse
from django.middleware.csrf import CsrfViewMiddleware

from apps.utilslib.remote_forms.forms import RemoteForm


class FormDeclarativeMetaclass(DeclarativeMetaclass):
    """
    Declarative meta class for Tastypie forms. This is modelled
    after the ModelResource class.
    """

    def __new__(mcs, name, bases, attrs):
        meta = attrs.get("Meta")

        if meta and hasattr(meta, "form"):
            setattr(meta, "object_class", meta.form.__class__)

        new_class = super(FormDeclarativeMetaclass, mcs).__new__(mcs, name, bases, attrs)
        include_fields = getattr(new_class._meta, "fields", [])
        excludes = getattr(new_class._meta, "excludes", [])
        field_names = list(new_class.base_fields.keys())

        for field_name in field_names:
            if field_name == "resource_uri":
                continue
            if field_name in new_class.declared_fields:
                continue
            if len(include_fields) and not field_name in include_fields:
                del (new_class.base_fields[field_name])
            if len(excludes) and field_name in excludes:
                del (new_class.base_fields[field_name])

        # Add in the new fields.
        new_class.base_fields.update(new_class.get_fields(include_fields, excludes))

        return new_class


class BaseFormResource(Resource):
    """
    A subclass of ``Resource`` designed to work with Django's ``Forms``

    This class will introspect a given ``Form`` and build a field list based
    on the fields found on the form.
    """

    @classmethod
    def should_skip_field(cls, field):
        """
        If the field is listed in the forms exclude list,
        skip it.
        """
        try:
            if field in getattr(cls._meta.object_class._meta, "exclude"):
                return True
        except AttributeError:
            pass
        return False

    @staticmethod
    def get_internal_type(f):
        return f.__class__.__name__

    @classmethod
    def api_field_from_django_field(cls, field, default=fields.CharField):
        """
        Returns the field type that would likely be associated with each
        Django type.
        """
        result = default

        internal_type = cls.get_internal_type(field)

        if internal_type in ("DateField", "DateTimeField"):
            result = fields.DateTimeField
        elif internal_type in ("BooleanField", "NullBooleanField"):
            result = fields.BooleanField
        elif internal_type in ("FloatField",):
            result = fields.FloatField
        elif internal_type in ("DecimalField",):
            result = fields.DecimalField
        elif internal_type in ("IntegerField", "PositiveIntegerField",
                               "PositiveSmallIntegerField", "SmallIntegerField", "AutoField"):
            result = fields.IntegerField
        elif internal_type in ("FileField", "ImageField"):
            result = fields.FileField
        elif internal_type == "TimeField":
            result = fields.TimeField

        return result

    @classmethod
    def get_fields(cls, fields=None, excludes=None):
        """
        Given any explicit fields to include and fields to exclude, add
        additional fields based on the associated form.
        """

        final_fields = {}
        fields = fields or []
        excludes = excludes or []

        if not cls._meta.object_class:
            return final_fields

        for name, field in six.iteritems(cls._meta.object_class.base_fields):

            if name in cls.base_fields:
                continue

            if fields and name not in fields:
                continue

            if excludes and name in excludes:
                continue

            if cls.should_skip_field(name):
                continue

            api_field_class = cls.api_field_from_django_field(field)

            kwargs = {
                "attribute": name,
                "help_text": field.help_text
            }

            if field.required is False:
                kwargs["null"] = True

            if cls.get_internal_type(field) == "TextField":
                kwargs["default"] = ""

            if field.initial:
                kwargs["default"] = field.initial

            final_fields[name] = api_field_class(**kwargs)
            final_fields[name].instance_name = name

        f = RemoteForm(cls._meta.object_class())
        f.as_dict()

        return final_fields

    def get_list(self, request, **kwargs):
        """
        Ususally returns a serialized list of resources available
        on the endpoint. Since we're dealing with forms, we call
        the get_detail method here and returns the serialized form
        for the endpoint.
        """
        return self.get_detail(request, **kwargs)

    def get_detail(self, request, **kwargs):
        """
        Returns a single serialized form resource.
        Should return a HttpResponse (200 OK).
        """
        basic_bundle = self.build_bundle(request=request)

        try:
            obj = self.cached_obj_get(bundle=basic_bundle, **self.remove_api_resource_names(kwargs))
        except AttributeError:
            return http.HttpNotFound()

        bundle = self.build_bundle(obj=obj, request=request)
        bundle = self.full_dehydrate(bundle)
        bundle = self.alter_detail_data_to_serialize(request, bundle)
        return self.create_response(request, bundle)

    def post_list(self, request, **kwargs):
        return self.post_detail(request, **kwargs)

    def post_detail(self, request, **kwargs):
        return http.HttpNotImplemented()

    def full_dehydrate(self, bundle, for_list=False):
        """
        Given a bundle with an object instance, extract the
        information from it to populate the resource.

        Basically, this means to serialize the form to json.
        """
        remote_form = RemoteForm(bundle.obj)
        bundle.data.update(remote_form.as_dict())
        return bundle

    def obj_get(self, bundle, **kwargs):
        """
        Fetches an individual object on the resource.

        Instantiate and return the resources ``object_class``
        """
        return self._meta.object_class()

    def create_response(self, request, data, response_class=HttpResponse, **response_kwargs):
        """
        Extracts the common "which-format/serialize/return-response" cycle.
        Also, since we're dealing with forms, process the response for
        CSRF protection.
        """
        csrf_middleware = CsrfViewMiddleware()
        response = super(BaseFormResource, self).create_response(request, data, response_class, **response_kwargs)
        return csrf_middleware.process_response(request, response)


class FormResource(six.with_metaclass(FormDeclarativeMetaclass, BaseFormResource)):
    pass
