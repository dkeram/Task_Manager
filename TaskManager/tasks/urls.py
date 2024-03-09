from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name ='token-obtain-pair'),
    path('users/', views.UsersListCreateView.as_view(), name ='users-list-create'),
    path('projects/', views.ProjectsListCreateView.as_view(), name ='projects-list-create'),
    path('projects/<int:pk>', views.ProjectsRetrieveUpdateDestroyView.as_view(), name ='project-detail'),
    path('tasks/', views.TasksListCreateView.as_view(), name ='tasks-list-create'),
    path('my_tasks/<int:user_id>', views.MyTasks.as_view(), name = 'tasks-list'),
    path('messages/', views.MessagesListCreateView.as_view(), name ='messages-list-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name ='token-refresh'),
    path('logout/', views.LogoutView.as_view(), name ='logout-page')
]
