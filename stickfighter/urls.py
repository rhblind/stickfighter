# -*- coding: utf-8 -*-

from django.conf import settings
from django.contrib import admin
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static

admin.autodiscover()

urlpatterns = patterns(
    "",
    url(r"^account/", include("allauth.urls")),
    url(r"^account/admin/", include(admin.site.urls)),

    # Include apps here
    url(r"^", include("apps.webapp.urls")),  # We add the webclient at the root url
    url(r"^server/", include("apps.server.urls"))
)

if getattr(settings, "DEBUG", False) is True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
