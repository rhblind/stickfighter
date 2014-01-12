# -*- coding: utf-8 -*-

from django.dispatch import Signal

#
# Signals
#

tastypie_post_obj_create = Signal(providing_args=["bundle"])
