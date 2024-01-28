from django.contrib import admin
from .models import Users, Projects, Tasks, Messages

# Register your models here.
admin.site.register(Users)
admin.site.register(Projects)
admin.site.register(Tasks)
admin.site.register(Messages)