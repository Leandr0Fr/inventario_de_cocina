from django.contrib import admin
from .models import Heladera

class HeladeraAdmin(admin.ModelAdmin):
    list_display = ("name", "input_date", "expiration_date", "amount")
    search_fields = ("name",)
    list_filter = ("input_date", "expiration_date")

admin.site.register(Heladera, HeladeraAdmin)
    
