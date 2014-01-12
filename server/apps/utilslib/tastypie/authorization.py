# -*- coding: utf-8 -*-

from django.db.models import Q
from django.conf import settings
from django.utils.http import same_origin
from django.contrib.auth import get_user_model
from django.middleware.csrf import _sanitize_token
from django.utils.crypto import constant_time_compare

from tastypie.compat import username_field
from tastypie.authorization import ReadOnlyAuthorization

from guardian.shortcuts import get_objects_for_user, get_perms
from tastypie.authorization import DjangoAuthorization
from tastypie.exceptions import Unauthorized, NotFound


class CredentialsAuthorization(ReadOnlyAuthorization):
    """
    A ReadOnlyAuthorization which only returns the current
    authenticated user. Only support GET.
    """

    @staticmethod
    def is_authenticated(request):
        """
        Checks to make sure the user is logged in & has a Django session.
        """
        # Cargo-culted from Django 1.3/1.4's ``django/middleware/csrf.py``.
        # We can't just use what's there, since the return values will be
        # wrong.
        # We also can't risk accessing ``request.POST``, which will break with
        # the serialized bodies.
        if request.method in ("GET", "HEAD", "OPTIONS", "TRACE"):
            return request.user.is_authenticated()

        if getattr(request, "_dont_enforce_csrf_checks", False):
            return request.user.is_authenticated()

        csrf_token = _sanitize_token(request.COOKIES.get(settings.CSRF_COOKIE_NAME, ""))

        if request.is_secure():
            referer = request.META.get("HTTP_REFERER")

            if referer is None:
                return False

            good_referer = "https://%s/" % request.get_host()

            if not same_origin(referer, good_referer):
                return False

        request_csrf_token = request.META.get("HTTP_X_CSRFTOKEN", "")

        if not constant_time_compare(request_csrf_token, csrf_token):
            return False

        return request.user.is_authenticated()

    @staticmethod
    def get_identifier(request):
        """
        Provides a unique string identifier for the requestor.

        This implementation returns the user's username.
        """
        return getattr(request.user, username_field)

    @staticmethod
    def base_checks(request, model_klass):
        # If it doesn't look like a model, we can't check permissions.
        if not model_klass or not getattr(model_klass, '_meta', None):
            return False

        # User must be logged in to check permissions.
        if not hasattr(request, 'user'):
            return False

        # Model class must be a User model, else this authorization class
        # won't work ;)
        user_model = get_user_model()
        if not issubclass(model_klass, user_model):
            raise Unauthorized("You are not allowed to authorize that class.")

        return model_klass

    def read_list(self, object_list, bundle):
        klass = self.base_checks(bundle.request, object_list.model)
        if klass is False:
            return []

        if self.is_authenticated(bundle.request):
            identifier = self.get_identifier(bundle.request)
            return object_list.filter(Q(**{"%(username)s__exact" % {
                "username": username_field
            }: identifier}))

        # Defaults to empty queryset
        return klass.objects.none()

    def read_detail(self, object_list, bundle):
        klass = self.base_checks(bundle.request, object_list.model)
        if klass is False:
            return Unauthorized("You are not allowed to access that resource.")

        if self.is_authenticated(bundle.request):
            identifier = self.get_identifier(bundle.request)
            object_list = object_list.filter(Q(**{"%(username)s__exact" % {
                "username": username_field
            }: identifier}))
            if object_list.exists():
                return True

        # Defaults to Unauthorized
        raise Unauthorized("You are not allowed to access that resource.")


class GuardianAuthorization(DjangoAuthorization):
    """
    Uses permission checking from ``django.contrib.auth`` to map
    ``GET / POST / PUT / DELETE / PATCH`` to their equivalent Django auth
    permissions.

    Checks permissions on row level using django-guardian.
    For successful authorization a user requires *both* appropriate action
    permission (view, add, change, delete) for the model *and* the object/row.
    """

    def read_list(self, object_list, bundle):
        try:
            klass = self.base_checks(bundle.request, object_list.model)
            if klass is False:
                raise NotFound
        except (AttributeError, NotFound):
            return []

        permission = "%(app_label)s.view_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        read_list = get_objects_for_user(bundle.request.user, permission)

        if not (read_list and bundle.request.user.has_perm(permission)):
            return klass.objects.none()

        return read_list

    def read_detail(self, object_list, bundle):
        klass = self.base_checks(bundle.request, bundle.obj.__class__)
        if klass is False:
            return Unauthorized("You are not allowed to access that resource.")

        authorized = "view_%s" % klass._meta.module_name in get_perms(
            bundle.request.user, bundle.obj
        )
        permission = "%(app_label)s.view_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        if not (authorized and bundle.request.user.has_perm(permission)):
            raise Unauthorized("You are not allowed to access that resource.")

        return True

    def create_list(self, object_list, bundle):
        klass = self.base_checks(bundle.request, object_list.model)
        if klass is False:
            return []

        permission = "%(app_label)s.add_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        create_list = get_objects_for_user(bundle.request.user, permission)

        if not (create_list and bundle.request.user.has_perm(permission)):
            return klass.objects.none()

        return create_list

    def create_detail(self, object_list, bundle):
        klass = self.base_checks(bundle.request, bundle.obj.__class__)
        if klass is False:
            raise Unauthorized("You are not allowed to access that resource.")

        permission = "%(app_label)s.add_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        if not bundle.request.user.has_perm(permission):
            raise Unauthorized("You are not allowed to access that resource.")

        return True

    def update_list(self, object_list, bundle):
        klass = self.base_checks(bundle.request, object_list.model)
        if klass is False:
            return []

        permission = "%(app_label)s.change_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        update_list = get_objects_for_user(bundle.request.user, permission)

        if not (update_list and bundle.request.user.has_perm(permission)):
            return klass.objects.none()

        return update_list

    def update_detail(self, object_list, bundle):
        klass = self.base_checks(bundle.request, bundle.obj.__class__)
        if klass is False:
            raise Unauthorized("You are not allowed to access that resource.")

        authorized = "change_%s" % klass._meta.module_name in get_perms(
            bundle.request.user, bundle.obj
        )
        permission = "%(app_label)s.change_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        if not (authorized and bundle.request.user.has_perm(permission)):
            raise Unauthorized("You are not allowed to access that resource.")

        return True

    def delete_list(self, object_list, bundle):
        klass = self.base_checks(bundle.request, object_list.model)
        if klass is False:
            return []

        permission = "%(app_label)s.delete_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        delete_list = get_objects_for_user(bundle.request.user, permission)

        if not (delete_list and bundle.request.user.has_perm(permission)):
            return klass.objects.none()

        return delete_list

    def delete_detail(self, object_list, bundle):
        klass = self.base_checks(bundle.request, bundle.obj.__class__)
        if klass is False:
            raise Unauthorized("You are not allowed to access that resource.")

        authorized = "delete_%s" % klass._meta.module_name in get_perms(
            bundle.request.user, bundle.obj
        )
        permission = "%(app_label)s.delete_%(module_name)s" % {
            "app_label": klass._meta.app_label,
            "module_name": klass._meta.module_name
        }

        if not (authorized and bundle.request.user.has_perm(permission)):
            raise Unauthorized("You are not allowed to access that resource.")

        return True
