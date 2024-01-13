from django.contrib import admin
from .models import Heladera

class HeladeraAdmin(admin.ModelAdmin):
    list_display = ("name", "input_date", "expiration_date", "amount", "status")
    search_fields = ("name", "status")
    list_filter = ("input_date", "expiration_date", "status")

admin.site.register(Heladera, HeladeraAdmin)
    
