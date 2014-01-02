# -*- coding: utf-8 -*-

from django.contrib import admin
from django.conf.urls import patterns, include, url

admin.autodiscover()

urlpatterns = patterns(
    "",
    url(r"^accounts", include("allauth.urls")),
    url(r"^accounts/admin/", include(admin.site.urls)),

    # Include apps here
    url(r"^", include("apps.webclient.urls")),  # We add the webclient at the root url
    url(r"^server", include("apps.server.urls"))
)
