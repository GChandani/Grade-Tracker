// import React, { useState } from 'react';
// //import axios from 'axios';

// const AddCourse = () => {
//   const [courseData, setCourseData] = useState({
//     name: '',
//     description: '',
//     startDate: '',
//     endDate: '',
//     assignmentPercentage: '',
//     examPercentage: '',
//     participationPercentage: '',
//     labPercentage: '',
//     projectPercentage: '',
//     finalExamPercentage: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCourseData({
//       ...courseData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    // axios
    //   .post('http://localhost:8000/addcourse/', {
    //     name: courseData.name,
    //     description: courseData.description,
    //     startDate: courseData.startDate,
    //     endDate: courseData.endDate,
    //     assignmentPercentage: courseData.assignmentPercentage,
    //     examPercentage: courseData.examPercentage,
    //     participationPercentage: courseData.participationPercentage,
    //     labPercentage: courseData.labPercentage,
    //     projectPercentage: courseData.projectPercentage,
    //     finalExamPercentage: courseData.finalExamPercentage,
    //   })
    //   .then((res) => {
    //     setCourseData({
    //       name: '',
    //       description: '',
    //       startDate: '',
    //       endDate: '',
    //       assignmentPercentage: '',
    //       examPercentage: '',
    //       participationPercentage: '',
    //       labPercentage: '',
    //       projectPercentage: '',
    //       finalExamPercentage: '',
    //     });
    //     console.log('Course Data Submitted:', courseData);
    //   })
    //   .catch((err) => {
    //     console.error('Error submitting course data:', err);
    //     // Handle the error as needed
    //   });
//   };

//   return (
//     <div>
//          <h2 style={{textAlign: "center"}}>Create a course</h2>
//       <div className="class-container">
//       <form onSubmit={handleSubmit}>
//         {/* Other fields */}
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={courseData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={courseData.description}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Start Date:
//           <input
//             type="date"
//             name="startDate"
//             value={courseData.startDate}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           End Date:
//           <input
//             type="date"
//             name="endDate"
//             value={courseData.endDate}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Assignment Percentage:
//           <input
//             type="number"
//             name="assignmentPercentage"
//             value={courseData.assignmentPercentage}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Exam Percentage:
//           <input
//             type="number"
//             name="examPercentage"
//             value={courseData.examPercentage}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Participation Percentage:
//           <input
//             type="number"
//             name="participationPercentage"
//             value={courseData.participationPercentage}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Lab Percentage:
//           <input
//             type="number"
//             name="labPercentage"
//             value={courseData.labPercentage}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Project Percentage:
//           <input
//             type="number"
//             name="projectPercentage"
//             value={courseData.projectPercentage}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Final Exam Percentage:
//           <input
//             type="number"
//             name="finalExamPercentage"
//             value={courseData.finalExamPercentage}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Create Course</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default AddCourse;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    assignmentPercentage: '',
    examPercentage: '',
    participationPercentage: '',
    labPercentage: '',
    projectPercentage: '',
    finalExamPercentage: '',
  });

  const [buttonCount, setButtonCount] = useState(0);
  const [additionalButtonClicked, setAdditionalButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you want to increment the button count when submitting
    setButtonCount(buttonCount + 1);

    // Other logic for handling form submission (e.g., sending data to the server)
  };

  const handleAdditionalButtonClick = () => {
    // You can add logic here for what happens when the additional button is clicked
    setAdditionalButtonClicked(true);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Create a course</h2>
      <div className="class-container">
        <form onSubmit={handleSubmit}>
          {/* ... (your form fields) */}
          {/* Other fields */}
//         <label>
//           Name:
//           <input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={courseData.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={courseData.endDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Assignment Percentage:
          <input
            type="number"
            name="assignmentPercentage"
            value={courseData.assignmentPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Exam Percentage:
          <input
            type="number"
            name="examPercentage"
            value={courseData.examPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Participation Percentage:
          <input
            type="number"
            name="participationPercentage"
            value={courseData.participationPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Lab Percentage:
          <input
            type="number"
            name="labPercentage"
            value={courseData.labPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Project Percentage:
          <input
            type="number"
            name="projectPercentage"
            value={courseData.projectPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Final Exam Percentage:
          <input
            type="number"
            name="finalExamPercentage"
            value={courseData.finalExamPercentage}
            onChange={handleInputChange}
            required
          />
        </label>
          <br />
          <button type="submit">Create Course</button>
        </form>

        {[...Array(buttonCount)].map((_, index) => (
             <Link to="/dashboard/class1" className="class-link" style={{ position: 'absolute', top: 130, left: 20 }}>
             Class 1
           </Link>
        ))}

        {/* Render the new button as a Link to /dashboard/class1 */}
        {additionalButtonClicked && (
          <Link to="/dashboard/class1" className="class-link">
          Class 1
        </Link>
        )}
      </div>
    </div>
  );
};

export default AddCourse;

