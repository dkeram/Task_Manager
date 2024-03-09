from rest_framework import serializers
from .models import Users,Projects,TaskStatus,Tasks,Messages



class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'username', 'password', 'email', 'firstname', 'lastname']
        
        
class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'title', 'description', 'due_date']


class TaskStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskStatus
        fields = ['id', 'status']


class TasksSerializer(serializers.ModelSerializer):
    user = UsersSerializer(read_only=True)
    project = ProjectsSerializer(read_only=True)
    
    class Meta:
        model = Tasks
        fields = ['id', 'title', 'description', 'date_created', 'due_date', 'project', 'user', 'task_status']
        
class MyTasks(serializers.ModelSerializer):
    user = UsersSerializer(read_only=True)
    
    class Meta:
        model = Tasks
        fields = ['id', 'title', 'description', 'date_created', 'due_date', 'project', 'user', 'task_status']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['id', 'sender', 'receiver', 'subject', 'content', 'date_created']
        
class NewTaskSerializer(serializers.ModelSerializer):
    user = UsersSerializer(read_only=True)
    project = ProjectsSerializer(read_only=True)
    
    class Meta:
        model = Tasks
        fields = ['id', 'title', 'description', 'date_created', 'due_date', 'project', 'user', 'task_status']