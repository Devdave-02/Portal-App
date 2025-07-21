import React, { useState } from 'react';
import './result.css'; 
import logo from '../assets/logo.jpg';

const mockResults = {
  Medicine: {
    "100L": {
      "First Semester": [
        { code: "MED101", title: "Intro to Medicine", unit: 2, score: 80, grade: "A", remark: "Excellent" },
        { code: "MED102", title: "Medical Biology", unit: 3, score: 67, grade: "B", remark: "Very Good" },
        { code: "MED105", title: "Health Psychology", unit: 2, score: 72, grade: "A", remark: "Excellent" }
      ],
      "Second Semester": [
        { code: "MED103", title: "Chemistry for Medicine", unit: 3, score: 72, grade: "A", remark: "Excellent" },
        { code: "MED104", title: "Human Anatomy", unit: 2, score: 58, grade: "C", remark: "Good" },
        { code: "MED106", title: "Medical Terminology", unit: 2, score: 65, grade: "B", remark: "Very Good" }
      ]
    },
    "200L": {
      "First Semester": [
        { code: "MED201", title: "Physiology I", unit: 3, score: 75, grade: "A", remark: "Excellent" },
        { code: "MED202", title: "Microbiology", unit: 3, score: 66, grade: "B", remark: "Very Good" },
        { code: "MED205", title: "Immunology", unit: 2, score: 68, grade: "B", remark: "Very Good" }
      ],
      "Second Semester": [
        { code: "MED203", title: "Biochemistry", unit: 3, score: 64, grade: "B", remark: "Very Good" },
        { code: "MED204", title: "Clinical Anatomy", unit: 2, score: 59, grade: "C", remark: "Good" },
        { code: "MED206", title: "Physiology II", unit: 3, score: 71, grade: "A", remark: "Excellent" }
      ]
   },
    "300L": {
      "First Semester": [
        { code: "MED301", title: "Pathology I", unit: 3, score: 68, grade: "B", remark: "Very Good" },
        { code: "MED302", title: "Pharmacology I", unit: 3, score: 62, grade: "B", remark: "Very Good" },
        { code: "MED305", title: "Medical Ethics", unit: 2, score: 70, grade: "A", remark: "Excellent" }
      ],
      "Second Semester": [
        { code: "MED303", title: "Surgery", unit: 2, score: 55, grade: "C", remark: "Good" },
        { code: "MED304", title: "Internal Medicine", unit: 3, score: 74, grade: "A", remark: "Excellent" },
        { code: "MED306", title: "Pathology II", unit: 3, score: 66, grade: "B", remark: "Very Good" }
      ]
    }
  },

  Nursing: {
    "100L": {
      "First Semester": [
        { code: "NUR101", title: "Introduction to Nursing", unit: 2, score: 69, grade: "B", remark: "Very Good" },
        { code: "NUR102", title: "Biochemistry", unit: 3, score: 58, grade: "C", remark: "Good" },
        { code: "NUR105", title: "Anatomy Basics", unit: 2, score: 63, grade: "B", remark: "Very Good" }
      ],
      "Second Semester": [
        { code: "NUR103", title: "Nursing Ethics", unit: 2, score: 72, grade: "A", remark: "Excellent" },
        { code: "NUR104", title: "First Aid", unit: 1, score: 64, grade: "B", remark: "Very Good" },
        { code: "NUR106", title: "Psychiatric Nursing", unit: 2, score: 68, grade: "B", remark: "Very Good" }
      ]
    },
    "200L": {
      "First Semester": [
        { code: "NUR201", title: "Foundations of Nursing", unit: 3, score: 68, grade: "B", remark: "Very Good" },
        { code: "NUR202", title: "Health Assessment", unit: 2, score: 75, grade: "A", remark: "Excellent" },
        { code: "NUR205", title: "Patient Communication", unit: 2, score: 70, grade: "A", remark: "Excellent" }
      ],
      "Second Semester": [
        { code: "NUR203", title: "Nutrition & Diet", unit: 2, score: 70, grade: "A", remark: "Excellent" },
        { code: "NUR204", title: "Mental Health Nursing", unit: 3, score: 61, grade: "B", remark: "Very Good" },
        { code: "NUR206", title: "Community Nursing", unit: 2, score: 64, grade: "B", remark: "Very Good" }
      ]
    },
    "300L": {
      "First Semester": [
        { code: "NUR301", title: "Maternal & Child Health", unit: 3, score: 66, grade: "B", remark: "Very Good" },
        { code: "NUR302", title: "Community Health", unit: 2, score: 60, grade: "B", remark: "Very Good" },
        { code: "NUR305", title: "Clinical Pharmacology", unit: 2, score: 67, grade: "B", remark: "Very Good" }
      ],
      "Second Semester": [
        { code: "NUR303", title: "Surgical Nursing", unit: 3, score: 72, grade: "A", remark: "Excellent" },
        { code: "NUR304", title: "Nursing Research", unit: 2, score: 65, grade: "B", remark: "Very Good" },
        { code: "NUR306", title: "Advanced Health Assessment", unit: 2, score: 70, grade: "A", remark: "Excellent" }
      ]
    }
  },

  Anatomy: {
  "100L": {
    "First Semester": [
      { code: "ANA101", title: "Introduction to Anatomy", unit: 3, score: 74, grade: "A", remark: "Excellent" },
      { code: "ANA102", title: "General Biology", unit: 3, score: 67, grade: "B", remark: "Very Good" },
      { code: "ANA103", title: "Histology", unit: 2, score: 69, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "ANA104", title: "Human Embryology", unit: 3, score: 63, grade: "B", remark: "Very Good" },
      { code: "ANA105", title: "Anatomical Terminologies", unit: 2, score: 72, grade: "A", remark: "Excellent" },
      { code: "ANA106", title: "Physiological Chemistry", unit: 2, score: 70, grade: "A", remark: "Excellent" }
    ]
  },
  "200L": {
    "First Semester": [
      { code: "ANA201", title: "Neuroanatomy", unit: 3, score: 76, grade: "A", remark: "Excellent" },
      { code: "ANA202", title: "Gross Anatomy", unit: 3, score: 64, grade: "B", remark: "Very Good" },
      { code: "ANA203", title: "Histotechniques", unit: 2, score: 69, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "ANA204", title: "Developmental Anatomy", unit: 3, score: 71, grade: "A", remark: "Excellent" },
      { code: "ANA205", title: "Head and Neck Anatomy", unit: 2, score: 66, grade: "B", remark: "Very Good" },
      { code: "ANA206", title: "Anatomy of Thorax", unit: 2, score: 67, grade: "B", remark: "Very Good" }
    ]
  },
  "300L": {
    "First Semester": [
      { code: "ANA301", title: "Clinical Anatomy", unit: 3, score: 73, grade: "A", remark: "Excellent" },
      { code: "ANA302", title: "Microscopic Anatomy", unit: 3, score: 69, grade: "B", remark: "Very Good" },
      { code: "ANA303", title: "Applied Embryology", unit: 2, score: 70, grade: "A", remark: "Excellent" }
    ],
    "Second Semester": [
      { code: "ANA304", title: "Neurophysiology", unit: 3, score: 65, grade: "B", remark: "Very Good" },
      { code: "ANA305", title: "Advanced Histology", unit: 2, score: 72, grade: "A", remark: "Excellent" },
      { code: "ANA306", title: "Gross Dissection", unit: 2, score: 68, grade: "B", remark: "Very Good" }
    ]
  }
},

Physiology: {
  "100L": {
    "First Semester": [
      { code: "PHY101", title: "Intro to Physiology", unit: 3, score: 78, grade: "A", remark: "Excellent" },
      { code: "PHY102", title: "Cell Physiology", unit: 3, score: 65, grade: "B", remark: "Very Good" },
      { code: "PHY103", title: "Basic Biophysics", unit: 2, score: 66, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "PHY104", title: "Endocrinology", unit: 3, score: 61, grade: "B", remark: "Very Good" },
      { code: "PHY105", title: "Nerve and Muscle Physiology", unit: 2, score: 70, grade: "A", remark: "Excellent" },
      { code: "PHY106", title: "Cardiovascular System", unit: 2, score: 69, grade: "B", remark: "Very Good" }
    ]
  },
  "200L": {
    "First Semester": [
      { code: "PHY201", title: "Neurophysiology", unit: 3, score: 72, grade: "A", remark: "Excellent" },
      { code: "PHY202", title: "Gastrointestinal Physiology", unit: 3, score: 68, grade: "B", remark: "Very Good" },
      { code: "PHY203", title: "Reproductive Physiology", unit: 2, score: 65, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "PHY204", title: "Renal Physiology", unit: 3, score: 66, grade: "B", remark: "Very Good" },
      { code: "PHY205", title: "Respiratory Physiology", unit: 2, score: 69, grade: "B", remark: "Very Good" },
      { code: "PHY206", title: "Thermoregulation", unit: 2, score: 73, grade: "A", remark: "Excellent" }
    ]
  },
  "300L": {
    "First Semester": [
      { code: "PHY301", title: "Clinical Physiology", unit: 3, score: 71, grade: "A", remark: "Excellent" },
      { code: "PHY302", title: "Comparative Physiology", unit: 3, score: 67, grade: "B", remark: "Very Good" },
      { code: "PHY303", title: "Environmental Physiology", unit: 2, score: 70, grade: "A", remark: "Excellent" }
    ],
    "Second Semester": [
      { code: "PHY304", title: "Neuroendocrinology", unit: 3, score: 74, grade: "A", remark: "Excellent" },
      { code: "PHY305", title: "Exercise Physiology", unit: 2, score: 69, grade: "B", remark: "Very Good" },
      { code: "PHY306", title: "Metabolic Regulation", unit: 2, score: 65, grade: "B", remark: "Very Good" }
    ]
  }
},

MLS: {
  "100L": {
    "First Semester": [
      { code: "MLS101", title: "Introduction to MLS", unit: 2, score: 70, grade: "A", remark: "Excellent" },
      { code: "MLS102", title: "Basic Chemistry", unit: 3, score: 66, grade: "B", remark: "Very Good" },
      { code: "MLS103", title: "Haematology Basics", unit: 2, score: 68, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "MLS104", title: "Medical Parasitology", unit: 3, score: 72, grade: "A", remark: "Excellent" },
      { code: "MLS105", title: "Blood Banking", unit: 2, score: 65, grade: "B", remark: "Very Good" },
      { code: "MLS106", title: "Instrumentation", unit: 2, score: 70, grade: "A", remark: "Excellent" }
    ]
  },
  "200L": {
    "First Semester": [
      { code: "MLS201", title: "Clinical Chemistry I", unit: 3, score: 74, grade: "A", remark: "Excellent" },
      { code: "MLS202", title: "Medical Bacteriology", unit: 3, score: 68, grade: "B", remark: "Very Good" },
      { code: "MLS203", title: "Virology", unit: 2, score: 66, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "MLS204", title: "Immunology", unit: 3, score: 71, grade: "A", remark: "Excellent" },
      { code: "MLS205", title: "Medical Mycology", unit: 2, score: 69, grade: "B", remark: "Very Good" },
      { code: "MLS206", title: "Toxicology", unit: 2, score: 67, grade: "B", remark: "Very Good" }
    ]
  },
  "300L": {
    "First Semester": [
      { code: "MLS301", title: "Advanced Haematology", unit: 3, score: 75, grade: "A", remark: "Excellent" },
      { code: "MLS302", title: "Diagnostic Cytology", unit: 3, score: 70, grade: "A", remark: "Excellent" },
      { code: "MLS303", title: "Histopathology", unit: 2, score: 69, grade: "B", remark: "Very Good" }
    ],
    "Second Semester": [
      { code: "MLS304", title: "Research Methodology", unit: 3, score: 72, grade: "A", remark: "Excellent" },
      { code: "MLS305", title: "Forensic Science", unit: 2, score: 68, grade: "B", remark: "Very Good" },
      { code: "MLS306", title: "Advanced Parasitology", unit: 2, score: 71, grade: "A", remark: "Excellent" }
    ]
  }
}
};

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
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');
  const [semester, setSemester] = useState('');
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState({ totalUnits: 0, gpa: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    const data = mockResults?.[department]?.[level]?.[semester];
    if (!data) {
      alert("No result found. Please check your selections.");
      return;
    }

    let totalUnits = 0;
    let totalPoints = 0;

    data.forEach(r => {
      totalUnits += r.unit;
      totalPoints += getPoint(r.grade) * r.unit;
    });

    setResults(data);
    setSummary({ totalUnits, gpa: (totalPoints / totalUnits).toFixed(2) });
    setShowResult(true);
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
            <select value={department} onChange={e => setDepartment(e.target.value)}>
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
          <div className='bridge-text' id="student-details">
            <p>Name: <span>Northbridge Student</span></p>
            <p>Department: <span>{department}</span></p>
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
