# Generated by Django 5.0.1 on 2024-01-13 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heladera', '0002_alter_heladera_expiration_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='heladera',
            name='status',
            field=models.CharField(default='Buen Estado', max_length=15),
        ),
    ]