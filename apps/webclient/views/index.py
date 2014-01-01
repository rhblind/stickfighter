# -*- coding: utf-8 -*-

from django.views.generic import TemplateView


class IndexTemplateView(TemplateView):
    """
    Render the index.html page
    """
    template_name = "webclient/index.html"
