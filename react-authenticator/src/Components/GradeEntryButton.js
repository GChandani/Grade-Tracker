import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

const GradeEntryButton = ({ selectedTab, onTabChange }) => {
  return (
    <Link to="/dashboard/AddGrade" className={`class-link ${selectedTab === 'tab1' ? 'active' : ''}`}>
    Add Grade
  </Link>
  );
};

export default GradeEntryButton;