from django.urls import path
from .views import view_page

urlpatterns = [
    path('', view_page, name="heladera"),
    path('page/<int:number_page>/', view_page, name="heladera_pag"),
]
