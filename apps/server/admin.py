# -*- coding: utf-8 -*-

from django.contrib import admin
from .models import Card, DeckCardQuantity, Deck, Effect


class CardAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "type")
    list_filter = ("type",)
    filter_horizontal = ("effects",)


class DeckCardQuantityAdmin(admin.ModelAdmin):
    pass


class DeckAdmin(admin.ModelAdmin):
    filter_horizontal = ("cards",)


class EffectAdmin(admin.ModelAdmin):
    list_display = ("name", "ability", "priority", "resolves")
    list_filter = ("ability", "resolves")
    filter_horizontal = ("cost",)


class EffectGroupAdmin(admin.ModelAdmin):
    pass


admin.site.register(Card, CardAdmin)
admin.site.register(DeckCardQuantity, DeckCardQuantityAdmin)
admin.site.register(Deck, DeckAdmin)
admin.site.register(Effect, EffectAdmin)
