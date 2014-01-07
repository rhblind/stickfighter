# -*- coding: utf-8 -*-

from django import forms
from django.contrib import admin
from django.db.models import Sum
from django.utils.translation import ugettext_lazy as _

from .models import Card, DeckCardQuantity, Deck, Effect


#
# Custom Admin model forms
#

class CardAdminModelForm(forms.ModelForm):
    """
    Override the queryset for the `can_block` relation
    depending if the card in question is an offensive card
    or not. If it's an offensive card, it mean it can't block
    and we set the queryset to empty.
    """

    class Meta:
        model = Card

    def __init__(self, *args, **kwargs):
        super(CardAdminModelForm, self).__init__(*args, **kwargs)
        if self.instance.type == "offensive":
            self.fields["can_block"].queryset = Card.objects.none()


#
# Model Admins
#

class CardAdmin(admin.ModelAdmin):
    form = CardAdminModelForm
    list_display = ("name", "description", "type")
    list_filter = ("type",)
    filter_horizontal = ("effects", "can_block")
    ordering = ("name", "type")


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
        """
        Returns True if the effect has a cost, and False otherwise.
        """
        return _("Yes") if obj.cost.exists() else _("No")


class EffectGroupAdmin(admin.ModelAdmin):
    pass


admin.site.register(Card, CardAdmin)
admin.site.register(DeckCardQuantity, DeckCardQuantityAdmin)
admin.site.register(Deck, DeckAdmin)
admin.site.register(Effect, EffectAdmin)
