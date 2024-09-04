from django import forms

class CourseForm(forms.Form):
    name = forms.CharField(max_length=200)
    description = forms.TextField()
    start_date = forms.DateField()
    end_date = forms.DateField()