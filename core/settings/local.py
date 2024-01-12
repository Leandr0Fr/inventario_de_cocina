from .base import *

SECRET_KEY = "soyadmin"

DEBUG = True

ALLOWED_HOSTS = ['*']

STATICFILES_DIRS = [
    STATIC_DIR
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': DATABASE_DIR / 'db.sqlite3',
    }
}