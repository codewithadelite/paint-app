from django.contrib import admin

from .models import Card, Category, Designer

admin.site.register([Card, Category, Designer])
