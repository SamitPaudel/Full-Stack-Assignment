# Generated by Django 4.2.4 on 2023-08-13 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='due_date',
            field=models.DateTimeField(),
        ),
    ]
