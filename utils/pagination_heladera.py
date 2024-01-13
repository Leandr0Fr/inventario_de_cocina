from apps.heladera.models import Heladera
from django.core.paginator import Paginator

class Pag_heladera():
    
    def __init__(self, items_per_page=10) -> None:
        self.paginator = Paginator(Heladera.objects.order_by('id'), items_per_page)
        self.actualy_page = 1
    
    def get_items(self) -> list:
        return self.paginator.page(self.actualy_page).object_list
    
    def advance_page(self) -> None:
        if not self.paginator.page(self.actualy_page).has_next():
            raise ValueError("Next page does not exist")
        self.actualy_page += 1

    def previous_page(self) -> None:
        if not self.paginator.page(self.actualy_page).has_previous():
            raise ValueError("Previous page does not exist")
        self.actualy_page -= 1
    
    def get_actualy_page(self) -> int:
        return self.actualy_page
    