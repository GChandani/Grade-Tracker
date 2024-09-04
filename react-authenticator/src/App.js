
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginButton from './Components/Login';
import LogoutButton from './Components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import GradeEntryButton from './Components/GradeEntryButton';
import AuthenticatedRoute from './Components/Authenticated';
import AddCourseButton from './Components/AddCourseButton';
import AddCourse from './Components/AddCourseButton.js';
import AddGrade from './Components/AddGrade.js';
import "./Components/styles.css";

function App() {
  return (
    <Router>
      <>
        <nav className="navbar">
          <div className="container-fluid">
            <span className="appName"> Grade Tracker </span>
            <LoginButton />
            <AddCourseButton onClick={() => console.log('Adding course...')} /> {/* Handle the button click event */}
            <GradeEntryButton onClick={() => console.log('Entering Grades...')} /> {/* Handle the button click event */}
            <LogoutButton />

          </div>
        </nav>        
        <Switch>
          <AuthenticatedRoute path="/addcourse" component={AddCourse} />
          <AuthenticatedRoute path="/addgrade" component={AddGrade} />
          <AuthenticatedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    </Router>
  );
}


export default App;