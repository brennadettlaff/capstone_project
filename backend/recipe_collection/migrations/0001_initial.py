# Generated by Django 4.1.2 on 2022-10-21 21:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('collection', '0002_remove_collection_recipe'),
        ('recipe', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe_Collection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Collection', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collection.collection')),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipe.recipe')),
            ],
        ),
    ]
