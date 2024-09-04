import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

const AddCourseButton = ({ selectedTab, onTabChange }) => {
  return (
    <Link to="/dashboard/AddCourse" className={`class-link ${selectedTab === 'tab1' ? 'active' : ''}`}>
        Add Course
      </Link>
  );
};

export default AddCourseButton;