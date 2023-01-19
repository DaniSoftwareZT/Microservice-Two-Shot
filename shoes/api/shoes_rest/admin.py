from django.contrib import admin
from .models import Shoe, BinVO


@admin.register(BinVO)
class BinAdmin(admin.ModelAdmin):
    pass


@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    pass
