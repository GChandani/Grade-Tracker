import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    assignmentPercentage: '',
    examPercentage: '',
    participationPercentage: '',
    labPercentage: '',
    projectPercentage: '',
    finalExamPercentage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/addcourse/', {
        name: courseData.name,
        description: courseData.description,
        startDate: courseData.startDate,
        endDate: courseData.endDate,
        assignmentPercentage: courseData.assignmentPercentage,
        examPercentage: courseData.examPercentage,
        participationPercentage: courseData.participationPercentage,
        labPercentage: courseData.labPercentage,
        projectPercentage: courseData.projectPercentage,
        finalExamPercentage: courseData.finalExamPercentage,
      })
      .then((res) => {
        setCourseData({
          name: '',
          description: '',
          startDate: '',
          endDate: '',
          assignmentPercentage: '',
          examPercentage: '',
          participationPercentage: '',
          labPercentage: '',
          projectPercentage: '',
          finalExamPercentage: '',
        });
        console.log('Course Data Submitted:', courseData);
      })
      .catch((err) => {
        console.error('Error submitting course data:', err);
        // Handle the error as needed
      });
  };

  return (
    <div>
      <h2>Create a Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Other fields */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={courseData.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={courseData.endDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Assignment Percentage:
          <input
            type="number"
            name="assignmentPercentage"
            value={courseData.assignmentPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Exam Percentage:
          <input
            type="number"
            name="examPercentage"
            value={courseData.examPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Participation Percentage:
          <input
            type="number"
            name="participationPercentage"
            value={courseData.participationPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Lab Percentage:
          <input
            type="number"
            name="labPercentage"
            value={courseData.labPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Project Percentage:
          <input
            type="number"
            name="projectPercentage"
            value={courseData.projectPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Final Exam Percentage:
          <input
            type="number"
            name="finalExamPercentage"
            value={courseData.finalExamPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
