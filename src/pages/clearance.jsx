import React, { useState } from "react";
import "./clearance.css";
import logo from '../assets/logo.jpg';

const Clearance = () => {
  // Units that require clearance
  const units = [
    { name: "Library", requirement: "Upload soft copy of library card" },
    { name: "Bursary", requirement: "Upload all payment receipts" },
    { name: "Department", requirement: "Upload departmental clearance form" },
    { name: "Hostel", requirement: "Upload hostel clearance form" },
    { name: "Sports", requirement: "Upload sports clearance receipt" },
    { name: "Faculty", requirement: "Upload faculty clearance form" },
  ];

  // State for form inputs & statuses
  const [formData, setFormData] = useState(
    units.map(() => ({
      name: "",
      matric: "",
      file: null,
      status: "Pending",
    }))
  );

  // Handle input change
  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  // Handle submission
  const submitDoc = (index) => {
    const { name, matric, file } = formData[index];
    if (!name || !matric) {
      alert("Please fill in your name and matric number.");
      return;
    }
    if (!file) {
      alert("Please upload a document before submitting!");
      return;
    }

    // Update status to submitted
    const updatedData = [...formData];
    updatedData[index].status = "Submitted (Awaiting Review)";
    setFormData(updatedData);

    // Simulate Admin review
    setTimeout(() => {
      updatedData[index].status = "Cleared ✅";
      setFormData([...updatedData]);
    }, 3000);
  };

  return (
    <div className="container">
       <img src={logo} alt="Northbridge university Logo" className="image-registration" />
      <h1>Student Clearance</h1>
    
      <div className="units">
        {units.map((unit, index) => (
          <div className="card" key={index}>
            <h2>{unit.name} Clearance</h2>
            <p>{unit.requirement}</p>

            <input
              type="text"
              placeholder="Enter Full Name"
              className="input-field"
              value={formData[index].name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Matric Number"
              className="input-field"
              value={formData[index].matric}
              onChange={(e) => handleChange(index, "matric", e.target.value)}
            />

            <input
              type="file"
              onChange={(e) =>
                handleChange(index, "file", e.target.files[0] || null)
              }
            />

            <br />
            <button onClick={() => submitDoc(index)}>Submit</button>

            <div
              className={`status ${
                formData[index].status.includes("Cleared")
                  ? "cleared"
                  : "pending"
              }`}
            >
              {formData[index].status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clearance;
