# Generated by Django 4.0.3 on 2023-01-20 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoe',
            name='pic_url',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]