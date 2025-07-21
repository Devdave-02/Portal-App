import React, { useEffect, useState } from 'react';
import './Assignment.css';
import logo from '../assets/logo.jpg';


const assignmentsData = [
  {
    id: 'a1', course: 'MED201', title: 'Neuroanatomy Assignment', due: '2025-08-20', submitted: false, fileUrl: null,
  },
  {
    id: 'a2', course: 'NUR204', title: 'Mental Health Case Study', due: '2025-07-10', submitted: true, fileUrl: 'https://example.com/uploads/a2.pdf',
  },
  {
    id: 'a3', course: 'MLS302', title: 'Virology Essay', due: '2025-08-25', submitted: false, fileUrl: null,
  },
  {
    id: 'a4', course: 'ANA101', title: 'Histology Lab Report', due: '2025-09-05', submitted: false, fileUrl: null,
  },
  {
    id: 'a5', course: 'PHS201', title: 'Cardiovascular Physiology Quiz', due: '2025-08-15', submitted: true, fileUrl: 'https://example.com/uploads/a5.docx',
  },
  {
    id: 'a6', course: 'MED302', title: 'Microbiology & Immunology Presentation', due: '2025-08-30', submitted: false, fileUrl: null,
  },
  {
    id: 'a7', course: 'NUR305', title: 'Gerontological Nursing Reflection', due: '2025-09-12', submitted: false, fileUrl: null,
  },
  {
    id: 'a8', course: 'MLS304', title: 'Transfusion Science Worksheet', due: '2025-07-25', submitted: true, fileUrl: 'https://example.com/uploads/a8.pdf',
  },
  {
    id: 'a9', course: 'ANA304', title: 'Applied Surgical Anatomy Poster', due: '2025-08-18', submitted: false, fileUrl: null,
  },
  {
    id: 'a10', course: 'PHS304', title: 'Integrative Physiology Research Brief', due: '2025-08-28', submitted: true, fileUrl: 'https://example.com/uploads/a10.pdf',
  },
];

const isOverdue = (due) => new Date(due) < new Date();

const AssignmentPage = () => {
  const [assignments, setAssignments] = useState(assignmentsData);

  const uploadAssignment = async (assignmentId, file) => {
    if (!file) return alert('Choose a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`/api/assignments/${assignmentId}/submit`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed.');
      alert('Upload successful!');
      window.location.reload();
    } catch (err) {
      alert('Upload failed: ' + err.message);
    }
  };

  const allCourses = ['All Courses', ...new Set(assignments.map(a => a.course))];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  const filteredAssignments = assignments.filter(a => {
    const matchTitle = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCourse = selectedCourse === 'All Courses' || a.course === selectedCourse;
    return matchTitle && matchCourse;
  });

  return (
    <div className="container">
      <header className="page-header">
          <img src={logo} alt="School Logo" className="assignment-logo" />
          <h1 className="page-title">Assignments</h1>
      </header>

      <div className="search-buttons">
        <form id="search-form" className="search-box" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            id="search-input"
            placeholder="Search assignments…"
            aria-label="Search assignments"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="course-filter">
          <label htmlFor="course-select">Course:</label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            {allCourses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
      </div>

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Course</th>
        <th>Title</th>
        <th>Due</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredAssignments.map((a) => (
        <tr key={a.id}>
          <td data-label="Course">{a.course}</td>

          <td data-label="Title">{a.title}</td>

          <td data-label="Due"> 
            <span className={isOverdue(a.due) ? 'overdue' : 'due'}>
              {isOverdue(a.due)
                ? 'Overdue'
                : `Due ${new Date(a.due).toDateString().slice(4)}`}
            </span>
          </td>

          <td data-label="Status">
            <span className={a.submitted ? 'submitted' : 'not-submitted'}>
              {a.submitted ? 'Submitted' : 'Not Submitted'}
            </span>
          </td>

            <td data-label="Action">
              {!a.submitted || !a.fileUrl ? (
                <div className="upload-group">
                  <input
                    type="file"
                    id={`file-${a.id}`}
                    onChange={(e) => uploadAssignment(a.id, e.target.files[0])}
                    aria-label="Upload Assignment"
                  />
                  <button
                    onClick={() => {
                      const fileInput = document.getElementById(`file-${a.id}`);
                      if (fileInput?.files?.[0]) {
                        uploadAssignment(a.id, fileInput.files[0]);
                      }
                    }}
                  >
                    Upload
                  </button>
                </div>
              ) : (
                <a
                  href={a.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  View File
                </a>
              )}
            </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  );
};

export default AssignmentPage;
