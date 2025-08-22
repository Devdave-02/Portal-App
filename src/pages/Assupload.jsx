import React, { useState } from "react";
import "./Assupload.css";
import logo from '../assets/logo.jpg';

const AssignmentUpload = () => {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file ❌");
      return;
    }

    const newAssignment = {
      title,
      description,
      deadline,
      fileName: file.name,
    };

    setAssignments([...assignments, newAssignment]);

    // Reset form fields
    setTitle("");
    setDescription("");
    setDeadline("");
    setFile(null);

    // Reset input file manually
    document.getElementById("fileUpload").value = "";

    alert("✅ Assignment uploaded successfully!");
  };

  return (
    <div className="upload-container">
      <img src={logo} alt="Northbridge university Logo" className="image-registration" />
      <h5>📘 Upload Assignment</h5>

      <form onSubmit={handleSubmit}>
        <label className="header-text">Assignment Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter course title"
          required
        />

        <label className="header-text">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter assignment details"
          required
        ></textarea>

        <label className="header-text">Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <label className="header-text">Upload File (PDF/DOCX)</label>
        <input
          type="file"
          id="fileUpload"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />

        <button type="submit" className="btn-upload">
          Upload Assignment
        </button>
      </form>

      {/* Uploaded Assignments */}
      <div className="assignment-list">
        <h3>Uploaded Assignments</h3>
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index}>
              <strong>{assignment.title}</strong> (Deadline: {assignment.deadline}) - 📂{" "}
              {assignment.fileName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentUpload;
