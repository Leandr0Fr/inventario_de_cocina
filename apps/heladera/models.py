from django.db import models
class Heladera(models.Model):
    UNIT_CHOICES = [
        ('LT', 'Litros'),
        ('KG', 'Kilogramos')
    ]

    name = models.CharField(max_length=15)
    input_date = models.DateField(auto_now_add=True)
    expiration_date = models.DateField(null=True, blank=True)
    quantity = models.FloatField(null=True, blank=True)
    unit = models.CharField(max_length=2, choices=UNIT_CHOICES, null=True, blank=True)
    amount = models.IntegerField()
    status = models.CharField(max_length=15, default="Buen Estado")

    def __str__(self) -> str:
        return f"name: {self.name} ; input_date: {self.input_date} ; expiration_date: {self.expiration_date} ; unit: {self.unit} ; quantity: {self.quantity} ; amount: {self.amount} ; status: {self.status}"
    
    @staticmethod
    def exists_name(name_input: str) -> bool:
        return Heladera.objects.filter(name = name_input).exists()