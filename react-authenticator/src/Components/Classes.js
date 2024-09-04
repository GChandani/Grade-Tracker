import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'

function Classes({ selectedTab, onTabChange }) {
  return (
    <div className="class-tabs">
      <Link to="/dashboard/class1" className={`class-link ${selectedTab === 'tab1' ? 'active' : ''}`}>
        Class 1
      </Link>
      <Link to="/dashboard/class2" className={`class-link ${selectedTab === 'tab1' ? 'active' : ''}`}>
        Class 2
      </Link>
    </div>
  );
}

export default Classes;