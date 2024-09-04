import React from 'react';
import "./styles.css";
import "./styles.css";

const GradeEntryButton = ({ onClick }) => {
  return (
    <button className="btn px-3 gradeEntryBtn" onClick={onClick}>
      Enter Grades
    </button>
  );
};

export default GradeEntryButton;
