# -*- coding: utf-8 -*-

from tastypie.api import Api
from django.conf.urls import patterns, include, url

from .resources.cards import CardResource, EffectResource
from .resources.account import LoginFormResource

v1_api = Api(api_name="v1")
v1_api.register(CardResource())
v1_api.register(EffectResource())

account_api = Api(api_name="v1")
account_api.register(LoginFormResource())

urlpatterns = patterns(
    "",
    url(r"^", include(v1_api.urls)),
    url(r"^account/", include(account_api.urls))
)
