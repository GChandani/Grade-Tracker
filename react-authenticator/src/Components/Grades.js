import React from 'react';

function Grades({ studentData, selectedTab }) {
  if (!studentData || !selectedTab) {
    return <div className="grades"></div>;
  }

  // Filter student data based on the selected tab
  const filteredData = studentData.filter(student => student.class === selectedTab);

  return (
    <div className="grades">
      <h2>Grades for Class {selectedTab}</h2>
      <ul>
        {filteredData.map(student => (
          <li key={student.id}>
            {student.name}: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grades;