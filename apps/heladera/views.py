from django.shortcuts import render
from django.http import JsonResponse
from .models import Heladera
from utils.pagination_heladera import Pag_heladera

def view_page(request):
    pag = Pag_heladera()
    items = pag.get_items()
    return render(request, 'heladera.html', {'list_items': items, 'actual_page': 2, 'total_pages': 20 })

def create_item(request):
    if request.method == 'GET':
        raise ValueError("Get method is not accepted")

def exists_name(request, name):
    return JsonResponse({"exists": bool(Heladera.exists_name(name))}, status=200)
