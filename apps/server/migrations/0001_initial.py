# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Action'
        db.create_table(u'server_action', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
        ))
        db.send_create_signal(u'server', ['Action'])

        # Adding model 'Card'
        db.create_table(u'server_card', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(unique=True, max_length=100)),
            ('description', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('type', self.gf('django.db.models.fields.CharField')(max_length=30)),
            ('created', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
        ))
        db.send_create_signal(u'server', ['Card'])

        # Adding M2M table for field effects on 'Card'
        m2m_table_name = db.shorten_name(u'server_card_effects')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('card', models.ForeignKey(orm[u'server.card'], null=False)),
            ('effect', models.ForeignKey(orm[u'server.effect'], null=False))
        ))
        db.create_unique(m2m_table_name, ['card_id', 'effect_id'])

        # Adding model 'Combo'
        db.create_table(u'server_combo', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
        ))
        db.send_create_signal(u'server', ['Combo'])

        # Adding model 'DeckCardQuantity'
        db.create_table(u'server_deckcardquantity', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('card', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['server.Card'])),
            ('quantity', self.gf('django.db.models.fields.PositiveIntegerField')()),
        ))
        db.send_create_signal(u'server', ['DeckCardQuantity'])

        # Adding model 'Deck'
        db.create_table(u'server_deck', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(unique=True, max_length=100)),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
        ))
        db.send_create_signal(u'server', ['Deck'])

        # Adding M2M table for field cards on 'Deck'
        m2m_table_name = db.shorten_name(u'server_deck_cards')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('deck', models.ForeignKey(orm[u'server.deck'], null=False)),
            ('deckcardquantity', models.ForeignKey(orm[u'server.deckcardquantity'], null=False))
        ))
        db.create_unique(m2m_table_name, ['deck_id', 'deckcardquantity_id'])

        # Adding model 'Effect'
        db.create_table(u'server_effect', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('ability', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('priority', self.gf('django.db.models.fields.PositiveIntegerField')(default=50)),
            ('min_modifier', self.gf('django.db.models.fields.PositiveIntegerField')(default=0)),
            ('max_modifier', self.gf('django.db.models.fields.PositiveIntegerField')(default=0)),
            ('default_max', self.gf('django.db.models.fields.BooleanField')(default=True)),
            ('resolves', self.gf('django.db.models.fields.CharField')(max_length=100)),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('created', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
        ))
        db.send_create_signal(u'server', ['Effect'])

        # Adding M2M table for field cost on 'Effect'
        m2m_table_name = db.shorten_name(u'server_effect_cost')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('from_effect', models.ForeignKey(orm[u'server.effect'], null=False)),
            ('to_effect', models.ForeignKey(orm[u'server.effect'], null=False))
        ))
        db.create_unique(m2m_table_name, ['from_effect_id', 'to_effect_id'])


    def backwards(self, orm):
        # Deleting model 'Action'
        db.delete_table(u'server_action')

        # Deleting model 'Card'
        db.delete_table(u'server_card')

        # Removing M2M table for field effects on 'Card'
        db.delete_table(db.shorten_name(u'server_card_effects'))

        # Deleting model 'Combo'
        db.delete_table(u'server_combo')

        # Deleting model 'DeckCardQuantity'
        db.delete_table(u'server_deckcardquantity')

        # Deleting model 'Deck'
        db.delete_table(u'server_deck')

        # Removing M2M table for field cards on 'Deck'
        db.delete_table(db.shorten_name(u'server_deck_cards'))

        # Deleting model 'Effect'
        db.delete_table(u'server_effect')

        # Removing M2M table for field cost on 'Effect'
        db.delete_table(db.shorten_name(u'server_effect_cost'))


    models = {
        u'server.action': {
            'Meta': {'object_name': 'Action'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        u'server.card': {
            'Meta': {'object_name': 'Card'},
            'created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'effects': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['server.Effect']", 'symmetrical': 'False'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '100'}),
            'type': ('django.db.models.fields.CharField', [], {'max_length': '30'})
        },
        u'server.combo': {
            'Meta': {'object_name': 'Combo'},
            'created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'})
        },
        u'server.deck': {
            'Meta': {'object_name': 'Deck'},
            'cards': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['server.DeckCardQuantity']", 'symmetrical': 'False'}),
            'created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '100'})
        },
        u'server.deckcardquantity': {
            'Meta': {'object_name': 'DeckCardQuantity'},
            'card': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['server.Card']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'quantity': ('django.db.models.fields.PositiveIntegerField', [], {})
        },
        u'server.effect': {
            'Meta': {'ordering': "(u'ability', u'priority', u'resolves')", 'object_name': 'Effect'},
            'ability': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'cost': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['server.Effect']", 'null': 'True', 'blank': 'True'}),
            'created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'default_max': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'max_modifier': ('django.db.models.fields.PositiveIntegerField', [], {'default': '0'}),
            'min_modifier': ('django.db.models.fields.PositiveIntegerField', [], {'default': '0'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'priority': ('django.db.models.fields.PositiveIntegerField', [], {'default': '50'}),
            'resolves': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['server']