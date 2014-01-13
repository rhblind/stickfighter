# -*- coding: utf-8 -*-


from django.conf.urls import patterns, url
from django.views.generic import TemplateView


urlpatterns = patterns(
    "",
    url(r"^$", view=TemplateView.as_view(template_name="index.html"), name="webapp_dashboard"),
)
