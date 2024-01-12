# django-template
Template para un proyecto Django

## Pasos adicionales
- Instanciar el entorno virtual: ```virtualenv env``` o ```python -m venv env```
- Crear carpeta database e incluir la base de datos sqlite3.
- Crear un archivo .env en el ```root``` del proyecto e instanciar variables para el ambiente de producción.
- Instalar librerias: ```pip install -r requirements.txt```

## Inicializar el proyecto
- *Para ambiente de desarrollo:* ```python manage.py runserver --settings=core.settings.local```
- *Para ambiente de producción:* ```python manage.py runserver --settings=core.settings.production```

# Aclaraciones
Al momento de utilizar el manage.py, en ocasiones, es necesario especificar la configuración.
Ejemplo: ```python manage.py migrate --settings=core.settings.local```
