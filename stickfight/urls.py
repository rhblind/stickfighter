# -*- coding: utf-8 -*-

import socketio.sdjango
from django.contrib import admin
from django.conf.urls import patterns, include, url

socketio.sdjango.autodiscover()
admin.autodiscover()

urlpatterns = patterns(
    "",
    url(r"^account/admin/", include(admin.site.urls)),

    # Socket.IO urls
    url("^socket\.io", include(socketio.sdjango.urls)),
)
