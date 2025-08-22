import React, { useState, useEffect } from "react";
import "./course.css";
import logo from '../assets/logo.jpg';
import axios from 'axios';

const Course = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [semester, setSemester] = useState("");
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  // Fetch all course data from backend
  useEffect(() => {
    axios.get("https://portal-backend-asre.onrender.com/api/registration")
      .then((res) => setAllCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  // Filter relevant courses when department, level, or semester changes
 useEffect(() => {
  if (department && level && semester) {
    const matched = allCourses.find(course =>
      course.department === department &&
      course.level === level &&
      course.semester === semester
    );
    setCourses(matched || {});
    setSelectedCourses([]); // clear selected on change
    
  }
}, [department, level, semester, allCourses]);

const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedCourses = [...selectedCourses];

    if (checked) {
      if (updatedCourses.length < 3) {
        updatedCourses.push(value);
      }
    } else {
      updatedCourses = updatedCourses.filter((c) => c !== value);
    }

    setSelectedCourses(updatedCourses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name,
      department,
      level,
      semester,
      courses: selectedCourses,
    });
  };

  const departments = [...new Set(allCourses.map(c => c.department))];

return (
<div className="container-course-reg">
<div className="container-reg">
  <img src={logo} alt="Northbridge university Logo" className="image-registration" />
  <h1>Course Registration</h1>
</div>

<form className="course-form" onSubmit={handleSubmit}>
  <input 
    type="text"
    placeholder="Enter Name"
    className="student-name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />

  <select  className="course-select" value={department} onChange={(e) => setDepartment(e.target.value)} required>
    <option value="">Select Department</option>
    {departments.map((dept, idx) => (
      <option key={idx} value={dept}>{dept}</option>
    ))}
  </select>

  <select className="course-select" value={level} onChange={(e) => setLevel(e.target.value)} required>
    <option value="">Select Level</option>
    <option value="100L">100L</option>
    <option value="200L">200L</option>
    <option value="300L">300L</option>
  </select>

  <select className="course-select" value={semester} onChange={(e) => setSemester(e.target.value)} required>
    <option value="">Select Semester</option>
    <option value="First Semester">First Semester</option>
    <option value="Second Semester">Second Semester</option>
  </select>

    
     {courses?.courses?.length > 0 && (
      <div className="" id="courses-section">
        <label>Courses (Select up to 3):</label>
        <div id="courses-list">
          {courses.courses.map((course, idx) => {
        const courseValue = `${course.code} - ${course.title}`;
          return (
            <label key={idx}>
              <input
                type="checkbox"
                name="courses"
                className="course-checkbox"
                value={courseValue}
                checked={selectedCourses.includes(courseValue)}
                onChange={handleCheckboxChange}
                disabled={
                  selectedCourses.length >= 3 &&
                  !selectedCourses.includes(courseValue)
                }
              />
              {` ${course.code} - ${course.title}`}
            </label>
          );
        })}
      </div>
    </div>
  )}

<button type="submit">Register</button>
</form>

{submittedData && (
  <div className="result-box">
    <h2>Registration Summary</h2>
    <p><strong>Name:</strong> {submittedData.name}</p>
    <p><strong>Department:</strong> {submittedData.department}</p>
    <p><strong>Level:</strong> {submittedData.level}</p>
    <p><strong>Semester:</strong> {submittedData.semester}</p>
    <p><strong>Courses Registered:</strong></p>
    <ul>
      {submittedData.courses.map((course, idx) => (
        <li key={idx}>{course}</li>
      ))}
    </ul>
  </div>
)}
</div>
);
};

export default Course;
