from django.urls import path
from .views import view_page, exists_name

urlpatterns = [
    path('', view_page, name="heladera"),
    path('page/<int:number_page>/', view_page, name="heladera_pag"),
    path('name/<str:name>/', exists_name, name="exists_name"),

]
