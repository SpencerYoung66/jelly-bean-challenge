from django.contrib import admin

# Register your models here.

from .models import Flavor

admin.site.register(Flavor)