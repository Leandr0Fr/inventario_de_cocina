from django.db import models
class Heladera(models.Model):

    name = models.CharField(max_length=15)
    input_date = models.DateField(auto_now_add=True)
    expiration_date = models.DateField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    liters = models.FloatField(null=True, blank=True)
    amount = models.IntegerField()
    status = models.CharField(max_length=15, default="Buen Estado")

    def __str__(self):
        return f"name: {self.name} ; input_date: {self.input_date} ; expiration_date: {self.expiration_date} ; weight: {self.weight} ; liters: {self.liters} ; amount: {self.amount} ; status: {self.status}"