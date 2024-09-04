from django.db import models

# Create your models here.

# class UIUCCourse(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.TextField()
#     start_date = models.DateField()
#     end_date = models.DateField()
class Course(models.Model):
    name = models.CharField(max_length = 200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

    def add_grade_breakdown(self, component_percentages):
        breakdowns = GradeBreakdown.add_grade_breakdown(course=self, component_percentages=component_percentages)
        return breakdowns

    def add_assignment(self, title, description, due_date, awarded_points, total_points, component):
        # Create the assignment and associate it with the specified component
        assignment = Assignment.create_assignment(
            course=self,
            title=title,
            description=description,
            due_date=due_date,
            awarded_points=awarded_points,
            total_points=total_points,
            component=component
        )
        return assignment

    # def add_exam(self, title, description, exam_date):
    #     return Exam.objects.create(course=self, title=title, description=description, exam_date=exam_date)

    def delete_course(self):
        self.delete()

    # def delete_exam(self, exam_id):
    #     Exam.objects.filter(course=self, id=exam_id).delete()

    def delete_assignment(self, assignment_id):
        Assignment.objects.filter(course=self, id=assignment_id).delete()

    def calculate_grade(self):
        assignments = Assignment.objects.filter(course=self)
        grade_breakdowns = GradeBreakdown.objects.filter(course=self)

        # Create a dictionary to store the total grade for each component
        component_grades = {component: 0 for component, _ in GradeBreakdown.components_choices}

        # Create a dictionary to store the total weight for each component
        component_weights = {component: 0 for component, _ in GradeBreakdown.components_choices}

        # Calculate the contribution of each component to the total grade
        for assignment in assignments:
            # Find all grade breakdowns for the current assignment's component
            relevant_grade_breakdowns = grade_breakdowns.filter(component=assignment.component)

            # Include the weight of the component, even if there are no assignments
            for grade_breakdown in relevant_grade_breakdowns:
                component_weights[assignment.component] += grade_breakdown.percentage

            # Calculate the grade for each component based on the percentage
            for grade_breakdown in relevant_grade_breakdowns:
                component_percentage = grade_breakdown.percentage
                component_grades[assignment.component] += (assignment.awarded_points / assignment.total_points) * component_percentage

        # Calculate the overall grade by summing up the contributions from all components
        total_grade = sum(component_grades.values())

        # Calculate the overall weight by summing up the weights from all components
        total_weight = sum(component_weights.values())

        # Ensure the total weight is not zero to avoid division by zero
        total_weight = max(1, total_weight)

        # Calculate the weighted average grade
        average_grade = total_grade / total_weight

        # Ensure the total grade is within the range of 0 to 100
        final_grade = max(0, min(100, average_grade))

        return final_grade

       

class GradeBreakdown(models.Model):
    components_choices= [
        ('Assignment', 'Assignment'),
        ('Exam', 'Exam'),
        ('Participation', 'Participation'),
        ('Lab', 'Lab'),
        ('Project', 'Project'),
        ('Final Exam', 'Final Exam')
    ]
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    component = models.CharField(max_length= 200, choices=components_choices) 
    percentage = models.DecimalField(max_digits=5, decimal_places=2)

    @classmethod
    def add_grade_breakdown(cls, course, component_percentages):
        breakdowns = []
        for component, percentage in component_percentages.items():
            valid_components = {component for component, _ in cls.components_choices}
            if component not in valid_components:
                raise ValueError(f"Invalid component choice: {component}")

            breakdowns.append(cls.objects.create(course=course, component=component, percentage=percentage))

        return breakdowns
    
    def __str__(self):
        return f"{self.course.name} - {self.component} - {self.percentage}%"
    
class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length = 200)
    description = models.TextField()
    due_date = models.DateField()
    awarded_points = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    total_points = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    component = models.CharField(max_length=200, choices=GradeBreakdown.components_choices, default='Assignment')

    def __str__(self):
        return f"{self.title} - {self.course.name}, {self.awarded_points}/{self.total_points}" 
    

    @classmethod
    def create_assignment(cls, course, title, description, due_date, awarded_points, total_points, component):
        return cls.objects.create(
            course=course,
            title=title,
            description=description,
            due_date=due_date,
            awarded_points=awarded_points,
            total_points=total_points,
            component=component
        )
    
# class Exam(models.Model):
#     course = models.ForeignKey(Course, on_delete=models.CASCADE)
#     title = models.CharField(max_length=200)
#     description = models.TextField()
#     exam_date = models.DateField()
#     awarded_points = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
#     total_points = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
#     grade_breakdown = models.ForeignKey(GradeBreakdown, on_delete=models.SET_NULL, null=True, blank=True)