import React, { useState } from 'react';
import './result.css';
import logo from '../assets/logo.jpg';
import axios from 'axios';

function getPoint(grade) {
  switch (grade) {
    case "A": return 5;
    case "B": return 4;
    case "C": return 3;
    case "D": return 2;
    case "E": return 1;
    default: return 0;
  }
}

const Result = () => {
  const [program, setProgram] = useState('');
  const [level, setLevel] = useState('');
  const [semester, setSemester] = useState('');
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState({ totalUnits: 0, gpa: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = async () => {
    if (!program || !level || !semester) {
      alert("Please select all fields.");
      return;
    }

    try {
      const { data } = await axios.get(
       `https://portal-backend-asre.onrender.com/api/results/${program}/${level}/${encodeURIComponent(semester)}`
    );


      if (!data?.courses?.length) {
        alert("No result found for this selection.");
        return;
      }

      let totalUnits = 0;
      let totalPoints = 0;

      data.courses.forEach(course => {
        totalUnits += course.unit;
        totalPoints += getPoint(course.grade) * course.unit;
      });

      setResults(data.courses);
      setSummary({ totalUnits, gpa: (totalPoints / totalUnits).toFixed(2) });
      setShowResult(true);
    } catch (error) {
      console.error("❌ Error fetching result:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="result-container">
      <header className="result-header">
        <div className="result-image">
          <img src={logo} alt="Northbridge university Logo" className="image-result" />
          <h1>My Result</h1>
        </div>

        <div className="dropdowns">
          <label>
            Department:
            <select value={program} onChange={e => setProgram(e.target.value)}>
              <option value="">Select</option>
              <option value="Medicine">Medicine</option>
              <option value="Nursing">Nursing</option>
              <option value="Anatomy">Anatomy</option>
              <option value="Physiology">Physiology</option>
              <option value="MLS">MLS</option>
            </select>
          </label>

          <label>
            Level:
            <select value={level} onChange={e => setLevel(e.target.value)}>
              <option value="">Select</option>
              <option value="100L">100L</option>
              <option value="200L">200L</option>
              <option value="300L">300L</option>
            </select>
          </label>

          <label>
            Semester:
            <select value={semester} onChange={e => setSemester(e.target.value)}>
              <option value="">Select</option>
              <option value="First Semester">First Semester</option>
              <option value="Second Semester">Second Semester</option>
            </select>
          </label>

          <button onClick={handleShowResult}>Show Result</button>
        </div>
      </header>

      {showResult && (
        <>
          <div className="bridge-text" id="student-details">
            <p>Name: <span>Northbridge Student</span></p>
            <p>Department: <span>{program}</span></p>
            <p>Level: <span>{level}</span></p>
            <p>Semester: <span>{semester}</span></p>
          </div>

          <table className="result-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Unit</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i}>
                  <td data-label="Course Code">{r.code}</td>
                  <td data-label="Course Title">{r.title}</td>
                  <td data-label="Unit">{r.unit}</td>
                  <td data-label="Score">{r.score}</td>
                  <td data-label="Grade">{r.grade}</td>
                  <td data-label="Remark">{r.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="result-summary">
            <p>Total Units: <span>{summary.totalUnits}</span></p>
            <p>GPA: <span>{summary.gpa}</span></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
