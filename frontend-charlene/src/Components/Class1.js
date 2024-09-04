import React from 'react';

function Class1() {
    console.log('Class1 component is rendering.'); // Add this line
    const currentGrade = 90;
    const finalScoreNeeded = 95;
    const classAverage = 88;
  
    return (
      <div>
        <h2>Class 1 Information</h2>
        <p>
          Current Grade: {currentGrade}
          <br />
          Final Score Needed: {finalScoreNeeded}
          <br />
          Class Average: {classAverage}
        </p>
      </div>
    );
  }

export default Class1;