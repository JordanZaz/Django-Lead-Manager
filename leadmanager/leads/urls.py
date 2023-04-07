from rest_framework import routers
from .views import LeadListCreate

# from django.urls import path
# from . import views


router = routers.DefaultRouter()
router.register('api/leads', LeadListCreate, 'leads')

urlpatterns = router.urls

# urlpatterns = [
#     path('api/leads/', views.LeadListCreate.as_view()),
# ]
