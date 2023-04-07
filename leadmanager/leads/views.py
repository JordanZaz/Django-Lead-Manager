
from .models import Lead
from .serializers import LeadSerializer
# from rest_framework import generics, permissions
from rest_framework import viewsets, permissions


# class LeadListCreate(generics.ListCreateAPIView):
#     queryset = Lead.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = LeadSerializer

class LeadListCreate(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
