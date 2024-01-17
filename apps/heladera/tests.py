from django.test import TestCase
from django.utils import timezone
from .models import Heladera

class YourTestCase(TestCase):

    def setUp(self):
        Heladera.objects.create(
            name='Ejemplo',
            input_date=timezone.now(),
            expiration_date=timezone.now() + timezone.timedelta(days=30),
            quantity=2.5,
            unit='LT',
            amount=10,
            status='Buen Estado')

    def test_exists_name_true(self):
        input_name = "Ejemplo"
        result = Heladera.exists_name(input_name)
        self.assertTrue(result)

    def test_exists_name_false(self):
        input_name = "noexiste"
        result = Heladera.exists_name(input_name)
        self.assertFalse(result)

    def test_exists_name_void(self):
        input_name = ""
        result = Heladera.exists_name(input_name)
        self.assertFalse(result)

    def test_exists_name_null(self):
        input_name = None
        with self.assertRaises(ValueError):
            Heladera.exists_name(input_name)
