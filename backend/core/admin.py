from django.contrib import admin

from .models import Course, Assignment, GradeBreakdown

# Register your models here.



# admin.site.register(Course)
admin.site.register(Assignment)
# admin.site.register(GradeBreakdown)


class AssignmentInline(admin.TabularInline):
    model = Assignment
    extra = 1

class GradeBreakdownInline(admin.TabularInline):
    model = GradeBreakdown
    extra = len(GradeBreakdown.components_choices)  # Set the number of forms based on the number of components

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    inlines = [GradeBreakdownInline]
    list_display = ['name', 'description', 'start_date', 'end_date', 'calculated_grade']
    def calculated_grade(self, obj):
        grade =  obj.calculate_grade()
        return f"{grade:.2%}"

    calculated_grade.short_description = 'Calculated Grade'

if not admin.site.is_registered(Course):
    admin.site.register(Course, CourseAdmin)

admin.site.register(GradeBreakdown)

# @admin.register(GradeBreakdown)
class GradeBreakdownAdmin(admin.ModelAdmin):
    list_display = ('course', 'component', 'percentage')


