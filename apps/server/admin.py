# -*- coding: utf-8 -*-

from django.contrib import admin
from django.db.models import Sum
from .models import Card, DeckCardQuantity, Deck, Effect


class CardAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "type")
    list_filter = ("type",)
    filter_horizontal = ("effects",)


class DeckCardQuantityAdmin(admin.ModelAdmin):
    pass


class DeckAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "total_cards")
    filter_horizontal = ("cards",)

    @staticmethod
    def total_cards(obj):
        return obj.cards.aggregate(total_cards=Sum("quantity"))["total_cards"]


class EffectAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "has_cost", "ability", "priority", "resolves")
    list_filter = ("ability", "resolves")
    filter_horizontal = ("cost",)

    @staticmethod
    def has_cost(obj):
        return obj.cost.exists()


class EffectGroupAdmin(admin.ModelAdmin):
    pass


admin.site.register(Card, CardAdmin)
admin.site.register(DeckCardQuantity, DeckCardQuantityAdmin)
admin.site.register(Deck, DeckAdmin)
admin.site.register(Effect, EffectAdmin)
