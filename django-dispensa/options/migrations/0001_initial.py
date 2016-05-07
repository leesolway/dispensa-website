# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-07 17:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0028_merge'),
    ]

    operations = [
        migrations.CreateModel(
            name='WebsiteSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vat', models.CharField(help_text='Your company VAT with initial state code (i.e.: GB)', max_length=16)),
                ('phone', models.CharField(help_text='Your company phone number', max_length=16)),
                ('email', models.EmailField(help_text='Your company email address', max_length=255)),
                ('facebook', models.URLField(help_text='Your Facebook page URL')),
                ('instagram', models.URLField(help_text='Your Instagram page URL')),
                ('pinterest', models.URLField(help_text='Your Pinterest page URL')),
                ('site', models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to='wagtailcore.Site')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
