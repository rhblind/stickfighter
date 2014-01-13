# -*- coding: utf-8 -*-

from django.conf import settings
from django.contrib import admin
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = patterns(
    "",
    url(r"^accounts/", include("allauth.urls")),
    url(r"^accounts/admin/", include(admin.site.urls)),

    # Include apps here
    # url(r"^", include("apps.webclient.urls")),  # We add the webclient at the root url
    url(r"^$", view=TemplateView.as_view(template_name="index.html"), name="dashboard"),
    url(r"^server/", include("apps.server.urls"))
)

if getattr(settings, "DEBUG", False) is True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
