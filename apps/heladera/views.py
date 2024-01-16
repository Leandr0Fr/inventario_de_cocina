from django.shortcuts import render
from .models import Heladera
from utils.pagination_heladera import Pag_heladera

def view_page(request):
    pag = Pag_heladera()
    items = pag.get_items()
    return render(request, 'heladera.html', {'list_items': items, 'actual_page': 2, 'total_pages': 20 })

def create_item(request):
    if request.method == 'GET':
        raise ValueError("Get method is not accepted")
