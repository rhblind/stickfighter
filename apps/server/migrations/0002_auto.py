# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding M2M table for field can_block on 'Card'
        m2m_table_name = db.shorten_name(u'server_card_can_block')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('from_card', models.ForeignKey(orm[u'server.card'], null=False)),
            ('to_card', models.ForeignKey(orm[u'server.card'], null=False))
        ))
        db.create_unique(m2m_table_name, ['from_card_id', 'to_card_id'])


    def backwards(self, orm):
        # Removing M2M table for field can_block on 'Card'
        db.delete_table(db.shorten_name(u'server_card_can_block'))


    models = {
        u'server.action': {
            'Meta': {'object_name': 'Action'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        u'server.card': {
            'Meta': {'object_name': 'Card'},
            'can_block': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'to': u"orm['server.Card']", 'null': 'True', 'blank': 'True'}),
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