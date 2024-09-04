from rest_framework import serializers
from .models import Course, Assignment, GradeBreakdown

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class GradeBreakdownSerializer(serializers.ModelSerializer):
    class Meta:
        model = GradeBreakdown
        fields = '__all__'
