# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from tastypie.resources import ModelResource
from ..signals import tastypie_post_obj_create

from .forms import FormResource


class GuardianModelResource(ModelResource):
    """
    A ModelResouce class which extends some methods
    to handle row level permissions for user in request
    """

    def obj_create(self, bundle, **kwargs):
        """
        Catch the bundle after obj_create save,
        and emit a post_save signal which includes the
        bundle object.
        """
        bundle = super(GuardianModelResource, self).obj_create(bundle, **kwargs)
        tastypie_post_obj_create.send(sender=self, bundle=bundle)
        return bundle

