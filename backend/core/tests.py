from django.test import TestCase

# Create your tests here.
from .models import Course, GradeBreakdown, Assignment

class CourseModelTestCase(TestCase):
    def setUp(self):
        # Set up a sample course for testing
        self.course = Course.objects.create(
            name='Test Course',
            description='Test course description',
            start_date='2023-01-01',
            end_date='2023-12-31'
        )

    def test_course_str_method(self):
        self.assertEqual(str(self.course), 'Test Course')

    def test_add_assignment_method(self):
        # Test the add_assignment method
        assignment_title = 'Test Assignment'
        assignment_description = 'Test assignment description'
        due_date = '2023-12-15'
        awarded_points = 80
        total_points = 100
        component = 'Assignment'

        assignment = self.course.add_assignment(
            title=assignment_title,
            description=assignment_description,
            due_date=due_date,
            awarded_points=awarded_points,
            total_points=total_points,
            component=component
        )

        self.assertEqual(assignment.title, assignment_title)
        self.assertEqual(assignment.description, assignment_description)
        self.assertEqual(assignment.due_date.strftime('%Y-%m-%d'), due_date)
        self.assertEqual(assignment.awarded_points, awarded_points)
        self.assertEqual(assignment.total_points, total_points)
        self.assertEqual(assignment.component, component)

    def test_calculate_grade_method(self):
        # Test the calculate_grade method
        component_percentages = {'Assignment': 50, 'Exam': 50}
        self.course.add_grade_breakdown(component_percentages)

        assignment1 = self.course.add_assignment(
            title='Assignment 1',
            description='Assignment 1 description',
            due_date='2023-12-10',
            awarded_points=80,
            total_points=100,
            component='Assignment'
        )

        assignment2 = self.course.add_assignment(
            title='Assignment 2',
            description='Assignment 2 description',
            due_date='2023-12-20',
            awarded_points=90,
            total_points=100,
            component='Assignment'
        )

        final_grade = self.course.calculate_grade()
        self.assertEqual(final_grade, 85)

    def test_delete_assignment_method(self):
        # Test the delete_assignment method
        assignment = Assignment.objects.create(
            course=self.course,
            title='Assignment to delete',
            description='Assignment to delete description',
            due_date='2023-12-25',
            awarded_points=75,
            total_points=100,
            component='Assignment'
        )

        assignment_id = assignment.id
        self.course.delete_assignment(assignment_id)
        with self.assertRaises(Assignment.DoesNotExist):
            Assignment.objects.get(id=assignment_id)

    def test_grade_breakdown_model(self):
        # Test the GradeBreakdown model
        breakdown = GradeBreakdown.objects.create(
            course=self.course,
            component='Assignment',
            percentage=40
        )

        self.assertEqual(str(breakdown), 'Test Course - Assignment - 40.00%')

    def test_create_assignment_method(self):
        # Test the create_assignment method in the Assignment model
        assignment = Assignment.create_assignment(
            course=self.course,
            title='Created Assignment',
            description='Created assignment description',
            due_date='2023-12-31',
            awarded_points=95,
            total_points=100,
            component='Assignment'
        )

        self.assertEqual(assignment.title, 'Created Assignment')
        self.assertEqual(assignment.awarded_points, 95)
        self.assertEqual(assignment.total_points, 100)
        self.assertEqual(assignment.component, 'Assignment')
