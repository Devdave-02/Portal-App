import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import "./landing.css"
import "../styles/sidebar.css";

function Landing() {
  const [open, setOpen] = useState(false); // Sidebar state

  const toggleSidebar = () => {
    setOpen((prev) => !prev); // Toggle open/close
  };

  return (
    <div className="landing-wrapper">
      {/* Header */}
      <header
        className="main-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h4 className="welcoming-text">Welcome!</h4>

        {/* Hamburger toggle */}
        <button
          className="hamburger"
          onClick={toggleSidebar}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </header>

      {/* Sidebar (opens/closes via prop) */}
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* University Branding */}
      <div className="uni-container">
        <img className="logo-image" src="Logo.png" alt="Logo" />
        <p className="uni-text">NorthBridge University</p>
      </div>

      {/* Upper Container */}
      <div className="container-upper">
        <div className="course-container">
          <p className="course-text">Courses</p>
          <img className="course-image" src="course.png" alt="Courses" />
        </div>
        <div className="lecture-container">
          <p className="lecture-text">Lecture Materials</p>
          <img className="lecture-image" src="Lecture.png" alt="Lecture Materials" />
        </div>
      </div>

      {/* Lower Container */}
      <div className="container-lower">
        <div className="event-container">
          <p className="event-text">Upcoming Events</p>
          <button className="event-button">View Events</button>
        </div>
        <div className="timetable-container">
          <p className="timetable-text">Timetable</p>
          <button className="timetable-button">View Timetable</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
