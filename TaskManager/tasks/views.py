from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Users, Projects, TaskStatus, Tasks, Messages
from .serializers import UsersSerializer, ProjectsSerializer, TaskStatusSerializer, TasksSerializer, MessageSerializer

# Create your views here.


class UsersListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    

class ProjectsListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ProjectsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class  TasksListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer


class  TaskStatusListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = TaskStatus.objects.all()
    serializer_class = TaskStatusSerializer


class MessagesListCreateView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Messages.objects.all()
    serializer_class = MessageSerializer
    
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):

        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)