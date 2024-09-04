// Class1.js
import React from 'react';

function Class1() {
  const currentGrade = 90;
  const finalScoreNeeded = 95;
  const classAverage = 88;

  return (
    <div className="class1-container">
      <h2>Class 1 Information</h2>
      <div className="class1-content">
        <p>
          Current Grade: {currentGrade}
          <br />
          Final Score Needed: {finalScoreNeeded}
          <br />
          Class Average: {classAverage}
        </p>
      </div>
    </div>
  );
}

export default Class1;