# -*- coding: utf-8 -*-

from tastypie.api import Api
from django.conf.urls import patterns, include, url

from .resources.cards import CardResource, EffectResource

v1_api = Api(api_name="v1")
v1_api.register(CardResource())
v1_api.register(EffectResource())


urlpatterns = patterns(
    "",
    url(r"^", include(v1_api.urls))
)
