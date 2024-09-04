import React from 'react';
import "./styles.css";

const AddCourseButton = ({ onClick }) => {
  return (
    <button className="btn px-3 addCourseBtn" onClick={onClick}>
      Add a Course
    </button>
  );
};

export default AddCourseButton;
