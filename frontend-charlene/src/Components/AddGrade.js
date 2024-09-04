import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddGrade = () => {
  const history = useHistory();

  const [gradeData, setGradeData] = useState({
    course: '',
    title: '',
    description: '',
    dueDate: '',
    awardedPoints: '',
    totalPoints: '',
    component: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGradeData({
      ...gradeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions, such as sending data to a server, here
    console.log('Grade Data Submitted:', gradeData);

    // Clear the form after submission
    setGradeData({
      course: '',
      title: '',
      description: '',
      dueDate: '',
      awardedPoints: '',
      totalPoints: '',
      component: '',
    });

    // Navigate back to the dashboard
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Add Grade</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={gradeData.course}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={gradeData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={gradeData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={gradeData.dueDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Awarded Points:
          <input
            type="number"
            name="awardedPoints"
            value={gradeData.awardedPoints}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Total Points:
          <input
            type="number"
            name="totalPoints"
            value={gradeData.totalPoints}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Component:
          <select
            name="component"
            value={gradeData.component}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select a Component</option>
            <option value="assignment">Assignment</option>
            <option value="exam">Exam</option>
            <option value="participation">Participation</option>
            <option value="lab">Lab</option>
            <option value="project">Project</option>
            <option value="finalExam">Final Exam</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Grade</button>
      </form>
    </div>
  );
};

export default AddGrade;
