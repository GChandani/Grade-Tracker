import requests
from django.http import request
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages
from .models import Course, GradeBreakdown
from django.http import JsonResponse

# Create your views here.

from rest_framework import serializers, viewsets
from rest_framework.views import APIView 
from rest_framework.response import Response
from .models import Course, Assignment, Exam, GradeBreakdown
from .serializers import CourseSerializer, AssignmentSerializer, ExamSerializer, GradeBreakdownSerializer

<<<<<<< HEAD
class CourseViewSet(APIView):
=======
def get_class_data(request):
    class_data = {
        'currentGrade': 90,
        'finalScoreNeeded': 95,
        'classAverage': 88,
    }
    return JsonResponse(class_data)




class CourseViewSet(viewsets.ModelViewSet):
>>>>>>> 92de7ab3 (message)
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    def get(self, request): 
        # return data from the model and then using a list to return
        detail = [ {"name": detail.name,"detail": detail.detail}  
        for detail in Course.objects.all()] 
        return Response(detail) 
  
    def post(self, request): 
        # saving the data by passing the data to the serializer
        serializer = CourseSerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return  Response(serializer.data) 
class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

# class ExamViewSet(viewsets.ModelViewSet):
#     queryset = Exam.objects.all()
#     serializer_class = ExamSerializer

class GradeBreakdownViewSet(viewsets.ModelViewSet):
    queryset = GradeBreakdown.objects.all()
    serializer_class = GradeBreakdownSerializer



# def add_course(request):
#     if request.method == 'POST':
#         # Process the form data
#         name = request.POST['name']
#         description = request.POST['description']
#         start_date = request.POST['start_date']
#         end_date = request.POST['end_date']

#         # Fetch UIUC courses using the API
#         uiuc_courses = get_uiuc_courses()  # Implement this function

#         context = {
#             'name': name,
#             'description': description,
#             'start_date': start_date,
#             'end_date': end_date,
#             'uiuc_courses': uiuc_courses,
#         }

#         return render(request, 'your_app/select_uiuc_course.html', context)

#     return render(request, 'your_app/add_course.html')

# def get_uiuc_courses():
#     # Make a request to the UIUC API to get a list of courses
#     uiuc_api_url = 'http://courses.illinois.edu/cisapp/explorer/catalog.xml'
#     response = requests.get(uiuc_api_url)

#     if response.status_code == 200:
#         # Parse the XML response and extract relevant course information
#         # You may need to use an XML parsing library, such as lxml or xml.etree.ElementTree
#         # Extract relevant information, such as course name, description, etc.
#         # Construct a list of UIUC courses

#         # For demonstration purposes, let's assume you have a list of courses like this:
#         uiuc_courses = [
#             {'name': 'UIUC Course 1', 'description': 'Description 1'},
#             {'name': 'UIUC Course 2', 'description': 'Description 2'},
#             # Add more courses as needed
#         ]

#         return uiuc_courses
#     else:
#         # Handle the case when the API request fails
#         messages.error(request, 'Failed to fetch UIUC courses from the API.')

#         return []