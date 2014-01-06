# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _

from tastypie.models import create_api_key

from utilslib.string import pluralize_string


PHASES = (
    ("block.start", _("Block - Start")),
    ("block.main", _("Block - Main")),
    ("block.end", _("Block - End")),

    ("damage.start", _("Damage - Start")),
    ("damage.main", _("Damage - Main")),
    ("damage.end", _("Damage - End")),

    ("action.start", _("Action - Start")),
    ("action.main", _("Action - Main")),
    ("action.end", _("Action - End")),

    ("upkeep.start", _("Upkeep - Start")),
    ("upkeep.main", _("Upkeep - Main")),
    ("upkeep.end", _("Upkeep - End")),

    ("attack.start", _("Attack - Start")),
    ("attack.main", _("Attack - Main")),
    ("attack.end", _("Attack - End")),

    ("end.start", _("End - Start")),
    ("end.main", _("End - Main")),
    ("end.end", _("End - End")),
)


class Action(models.Model):
    """

    """
    pass


class Card(models.Model):
    """

    """

    CARD_TYPE = (
        ("basic_attack", _("Basic attack")),
        ("offensive", _("Offensive")),
        ("defensive", _("Defensive"))
    )

    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=30, choices=CARD_TYPE)
    effects = models.ManyToManyField("server.Effect", help_text=_("Stack of effects which makes up the card."))

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        pass

    def __unicode__(self):
        return self.name


class Combo(models.Model):
    """

    """

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


class DeckCardQuantity(models.Model):
    """
    Table to hold the quantity of each card for a given deck.
    """

    card = models.ForeignKey("Card")
    quantity = models.PositiveIntegerField()

    class Meta:
        verbose_name_plural = "Deck card quantities"

    def __unicode__(self):
        return pluralize_string(self.quantity, self.card.name)


class Deck(models.Model):
    """

    """

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    cards = models.ManyToManyField("server.DeckCardQuantity")

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.name


class Effect(models.Model):
    """
    Contain all kind of effects
    """

    ABILITIES = (
        ("attack", _("Attack")),
        ("block", _("Block")),
        ("chain", _("Play another card")),
        ("discard", _("Discard")),
        ("draw", _("Draw")),
        ("gain_turn", _("Gain turn")),
        ("loose_turn", _("Loose turn")),
        ("reveal", _("Reveal hand")),
        ("throw", _("Throw")),
    )

    ability = models.CharField(max_length=100, choices=ABILITIES)
    priority = models.PositiveIntegerField(default=50, help_text=_(
        "Prioritize the execution of the effect. Lower values execute before higher. "
        "Example: An effect with a priority 10 will be taken into account before an effect with priority 20."
    ))
    min_modifier = models.PositiveIntegerField(default=0)
    max_modifier = models.PositiveIntegerField(default=0, help_text=_(
        "Maximum allowed modifier value. Example: Throw 3 allows you to throw up to three cards, which in "
        "case the minimum value here would be 0 and the maximum modifier value would be 3."
    ))
    default_max = models.BooleanField(default=True, help_text=_(
        "Automatically use the max modifier value when executing the effect. If set to False, the user "
        "need to specify a valid value between min and max modifier if order to make a calculation."
    ))
    resolves = models.CharField(max_length=100, choices=PHASES)
    description = models.TextField(blank=True, null=True)
    cost = models.ManyToManyField("self", symmetrical=False, help_text=_(
        "An effect might have a cost, ie + 1 dmg cost 1 Throw."
    ), blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("ability", "priority", "resolves")

    def __unicode__(self):
        return self.name

    @property
    def name(self):
        return "{ability} (priority: {priority})".format(
            ability="{ability} {min} - {max}".format(
                ability=self.get_ability_display(), min=self.min_modifier, max=self.max_modifier)
            if not self.default_max else "{ability} {max}".format(
                ability=self.get_ability_display(), max=self.max_modifier),
            priority=self.priority
        )


#
# Create an API key per user
#

# models.signals.post_save.connect(create_api_key, sender=User)
