# -*- coding: utf-8 -*-

from tastypie import fields
from tastypie.serializers import Serializer
from tastypie.authentication import MultiAuthentication, ApiKeyAuthentication

from apps.utilslib.tastypie.authentication import GuardianSessionAuthentication
from apps.utilslib.tastypie.resources import GuardianModelResource
from apps.utilslib.tastypie.authorization import CredentialsAuthorization, GuardianAuthorization

from apps.server.models import Card, Effect


class CardResource(GuardianModelResource):
    """
    Resource for accessing cards.
    """

    effects = fields.ToManyField("apps.server.api.resources.cards.EffectResource", "effects", full=True)

    class Meta:
        queryset = Card.objects.all().prefetch_related("effects")
        resource_name = "card"
        serializers = Serializer(formats=["xml", "json"])
        default_format = "application/json"
        include_resource_uri = True
        allowed_methods = ["get"]
        authorization = GuardianAuthorization()
        authentication = MultiAuthentication(ApiKeyAuthentication(), GuardianSessionAuthentication())


class EffectResource(GuardianModelResource):
    """
    Resource for accessing effects.
    """

    cost = fields.ToManyField("apps.server.api.resources.cards.EffectResource", "cost", full=True, null=True, blank=True)

    class Meta:
        queryset = Effect.objects.all().prefetch_related("cost")
        resource_name = "effect"
        serializers = Serializer(formats=["xml", "json"])
        default_format = "application/json"
        include_resource_uri = True
        allowed_methods = ["get"]
        authorization = GuardianAuthorization()
        authentication = MultiAuthentication(ApiKeyAuthentication(), GuardianSessionAuthentication())
