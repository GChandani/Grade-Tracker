// Dashboard.js
import React, { useState } from 'react';
import Grades from './Grades';
import Classes from './Classes';
import { Switch, Route, Link } from 'react-router-dom';
import Class1 from './Class1';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Student Dashboard</h1>
      <Classes selectedTab={selectedTab} onTabChange={handleTabChange} />
      <Switch>
        <Route path="/dashboard/class1" component={Class1} />
        {/* Add more routes for other classes as needed */}
        <Route path="/dashboard" exact>
          <Grades selectedTab={selectedTab} />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;