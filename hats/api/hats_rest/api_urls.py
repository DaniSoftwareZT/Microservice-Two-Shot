from django.urls import path, include
from .api_views import hat_list, hat_detail

urlpatterns = [
    path("hats/", hat_list, name="hat_list"),
    path("hats/<int:pk>", hat_detail, name="hat_detail"),
]
