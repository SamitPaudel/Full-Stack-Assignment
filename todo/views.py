from django.shortcuts import render
from rest_framework import viewsets
from todo.models import Todo
from todo.serializers import TodoSerializer

# Create your views here.
# Class based views:

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    print(queryset)

