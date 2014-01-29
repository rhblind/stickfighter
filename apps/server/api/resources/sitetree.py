# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from tastypie import fields
from tastypie.serializers import Serializer
from tastypie.authentication import MultiAuthentication, ApiKeyAuthentication

from apps.utilslib.tastypie.authentication import GuardianSessionAuthentication
from apps.utilslib.tastypie.resources import GuardianModelResource
from apps.utilslib.tastypie.authorization import CredentialsAuthorization, GuardianAuthorization

from sitetree.models import Tree, TreeItem


class TreeItemResource(GuardianModelResource):
    """

    """

    class Meta:
        queryset = TreeItem.objects.all().prefetch_related("effects")
        resource_name = "card"
        serializers = Serializer(formats=["xml", "json"])
        default_format = "application/json"
        include_resource_uri = True
        allowed_methods = ["get"]
        always_return_data = True
        authorization = GuardianAuthorization()
        authentication = MultiAuthentication(ApiKeyAuthentication(), GuardianSessionAuthentication())
