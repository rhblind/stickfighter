# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from tastypie import fields
from tastypie.resources import Resource
from tastypie.serializers import Serializer
from tastypie.authentication import MultiAuthentication, ApiKeyAuthentication

from allauth.account.forms import LoginForm
from apps.utilslib.tastypie.resources import FormResource


from django import forms
from apps.server.models import Card

class TestForm(forms.ModelForm):

    class Meta:
        model = Card
        exclude = ["effects"]


class LoginFormResource(FormResource):
    """
    A resource which serialize the login form to json data
    """

    class Meta:
        resource_name = "forms/login"
        serializers = Serializer(formats=["xml", "json"])
        default_format = "application/json"
        include_resource_uri = True
        allowed_methods = ["get", "post"]
        form = LoginForm()
