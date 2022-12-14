# Generated by Django 4.0.6 on 2022-07-10 19:44

import card.models
from django.db import migrations
import djongo.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('card', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='category',
            field=djongo.models.fields.EmbeddedField(model_container=card.models.Category, model_form_class=card.models.CategoryForm),
        ),
        migrations.AlterField(
            model_name='card',
            name='designer',
            field=djongo.models.fields.EmbeddedField(model_container=card.models.Designer, model_form_class=card.models.DesignerForm),
        ),
    ]
