
from django.contrib import admin 
from django.conf.urls import url 
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, AssignmentViewSet, ExamViewSet, GradeBreakdownViewSet
from .views import add_course, get_uiuc_courses

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'assignments', AssignmentViewSet)
##router.register(r'exams', ExamViewSet)
router.register(r'grade-breakdowns', GradeBreakdownViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

urlpatterns = [
    path('add_course/', add_course, name='add_course'),
    path('get_uiuc_courses/', get_uiuc_courses, name='get_uiuc_courses'),
<<<<<<< HEAD
    path('getcourse/', CourseViewSet.as_view(), name = "getcourse")
=======
    path('api/class1/', get_class_data, name='get_class_data'),
>>>>>>> 92de7ab3 (message)
    # Add other URL patterns as needed
]