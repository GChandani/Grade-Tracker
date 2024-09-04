// Dashboard.js
import React, { useState } from 'react';
import Classes from './Classes';
import { Switch, Route } from 'react-router-dom';
import Class1 from './Class1';
import Grades from './Grades';
import './Class1.css';
import AddCourse from './AddCourse';
import AddGrade from './AddGrade';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Student Dashboard</h1>
      <Switch>
        <Route path="/dashboard/class1" render={() => <Class1 />} />
        <Route path="/dashboard/AddCourse" render={() => <AddCourse />} />
        <Route path="/dashboard/AddGrade" render={() => <AddGrade />} />
        {/* Add more routes for other classes as needed */}
        <Route path="/dashboard" render={() => <Grades selectedTab={selectedTab} />} />
      </Switch>
    </div>
  );
}

export default Dashboard;