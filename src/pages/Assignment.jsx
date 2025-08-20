import React, { useEffect, useState } from 'react';
import './Assignment.css';
import axios from 'axios';
import logo from '../assets/logo.jpg';

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get('https://portal-backend-asre.onrender.com/api/assignments');
        console.log("✅ Assignments fetched:", res.data);
        if (Array.isArray(res.data)) {
          setAssignments(res.data);
        } else {
          console.warn("Unexpected response format:", res.data);
        }
      } catch (error) {
        console.error("❌ Error fetching assignments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  const handleSubmit = async (assignmentId, file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(`https://portal-backend-asre.onrender.com/api/assignments/${assignmentId}/submit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Assignment submitted successfully.');
    } catch (error) {
      console.error('❌ Submission error:', error);
      alert('Failed to submit assignment.');
    }
  };

  const handleFileChange = (e, assignmentId) => {
    const file = e.target.files[0];
    if (file) {
      handleSubmit(assignmentId, file);
    }
  };

  const filteredAssignments =
    selectedCourse === 'All Courses'
      ? assignments
      : assignments.filter((a) => a.course === selectedCourse);

  const allCourses = ['All Courses', ...new Set(assignments.map((a) => a.course))];

  return (
   <div className="container">
   <div className="page-header">
     <img src={logo} alt="Northbridge university Logo" className="image-registration" />
    <h1 className="page-title">Assignments</h1>
  </div>

  <div className="search-buttons">
    <div className="course-filter">
      <label>Filter by Course:</label>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        {allCourses.map((course, i) => (
          <option key={i} value={course}>{course}</option>
        ))}
      </select>
    </div>
  </div>

  {loading ? (
    <p>Loading assignments...</p>
  ) : filteredAssignments.length === 0 ? (
    <p>No assignments found for this course.</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Course</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th data-label="Action">Upload</th>
        </tr>
      </thead>
      <tbody>
        {filteredAssignments.map((assignment) => (
          <tr key={assignment._id}>
            <td data-label="Title">{assignment.title}</td>
            <td data-label="Course" className="Course">{assignment.course}</td>
            <td data-label="Description">{assignment.description}</td>
            <td data-label="Due Date">{new Date(assignment.dueDate).toLocaleDateString()}</td>
            <td data-label="Status">
              {assignment.submitted ? (
                <span className="submitted">Submitted ✅</span>
              ) : (
                <span className="not-submitted">Not Submitted ❌</span>
              )}
            </td>
            <td data-label="Action">
              <div className="upload-group">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, assignment._id)}
                />
                <button onClick={() => handleSubmit(assignment._id)}>Upload</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
  );
};

export default Assignment;
