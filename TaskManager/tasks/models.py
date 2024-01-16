from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Users(AbstractUser):
    username = models.CharField(max_length=80, unique=True)
    password = models.CharField(max_length=80)
    email = models.EmailField(unique=True)
    firstname = models.CharField(max_length=80)
    lastname = models.CharField(max_length=80)
    CLASSES = (
        ('User','User'),
        ('Power User', 'Power User'),
    )
    classes = models.CharField(max_length=10, choices=CLASSES, default='User')
    
    def __str__(self):
        return self.username
    
    
class Projects(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField()
    due_date = models.DateTimeField()

    def __str__(self):
        return self.title
    

class TaskStatus(models.Model):
    STATUS = (
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    )
    
    status = models.CharField(max_length=11, choices=STATUS, default='In Progress')
    
    def __str__(self):
        return self.status
    
    
class Tasks(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    project = models.ForeignKey(Projects, on_delete=models.CASCADE, related_name='project')
    user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='user')
    task_status = models.ForeignKey(TaskStatus, on_delete=models.CASCADE, related_name='task_status')
    
    def __str__(self):
        return self.title
    
    
class Messages(models.Model):
    sender = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='receiver')
    subject = models.CharField(max_length=80)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.sender} to {self.receiver}'