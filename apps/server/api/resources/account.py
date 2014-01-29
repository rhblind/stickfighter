# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from tastypie import fields
from tastypie.resources import Resource
from tastypie.serializers import Serializer
from tastypie.authentication import MultiAuthentication, ApiKeyAuthentication

from allauth.account.forms import LoginForm
from apps.utilslib.remote_forms.forms import RemoteForm

# http://www.slideshare.net/tarequeh/django-forms-in-a-web-api-world
# Maybe stuff this in an account app so we have it in the correct namespace?

class LoginFormResource(Resource):
    """
    A resource which serialize the login form to json data
    """

    class Meta:
        resource_name = "/forms/login"
        serializers = Serializer(formats=["xml", "json"])
        default_format = "application/json"
        include_resource_uri = True
        allowed_methods = ["get", "post"]
        form_cls = LoginForm
