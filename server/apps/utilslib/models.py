# -*- coding: utf-8 -*-
#
#
# This is a good place to connect signals, as this
# file is always loaded before any signals actually can be
# sent.

from django.db.models.signals import pre_delete

from .tastypie.signals import tastypie_post_obj_create
from .tastypie.signals.handlers import set_tastypie_obj_create_permissions, remove_obj_permissions


# Connect signal handler for granting all row level
# permissions for object creator (authenticated user in API call)
tastypie_post_obj_create.connect(
    set_tastypie_obj_create_permissions, dispatch_uid="utilslib.signals.set_tastypie_obj_create_permissions"
)

# Connect signal handler for removing permissions on pre_delete signal
pre_delete.connect(remove_obj_permissions, dispatch_uid="utilslib.signals.remove_obj_permissions")
