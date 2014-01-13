# -*- coding: utf-8 -*-

import socketio.sdjango
from django.conf.urls import patterns, include, url

socketio.sdjango.autodiscover()

urlpatterns = patterns(
    "",
    # Socket.IO urls
    url(r"^socket\.io", include(socketio.sdjango.urls)),

    # APIs
    url(r"^api/", include("apps.server.api.urls"))
)
