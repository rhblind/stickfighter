# -*- coding: utf-8 -*-


from django.conf.urls import patterns, url
from apps.webclient.views.index import IndexTemplateView


urlpatterns = patterns(
    "",
    url(r"^$", view=IndexTemplateView.as_view(), name="webclient_index"),
)
