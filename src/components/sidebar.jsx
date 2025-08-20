import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar({ open, onClose }) {
  const startX = useRef(0);
  const [showStudentMenu, setShowStudentMenu] = useState(false);
  const [showLecturerMenu, setShowLecturerMenu] = useState(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const delta = e.touches[0].clientX - startX.current;
    if (delta < -40) onClose(); // Swipe left to close
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`sidebar ${open ? "open" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <nav>
          <h2>Portal Menu</h2>

      
         <Link to="#">Home</Link>

          {/* Student Dashboard with dropdown */}
          <div
            className="menu-item"
            onClick={() => setShowStudentMenu(!showStudentMenu)}
          >
            Student
            <span className="arrow">{showStudentMenu ? "▲" : "▼"}</span>
          </div>

          {showStudentMenu && (
            <div className="dropdown">
              <Link to="/student/profile" className="dropdown-item">Profile</Link>
              <Link to="/student/Assignment" className="dropdown-item">Assignments</Link>
              <Link to="/student/course" className="dropdown-item">Course Registration</Link>
              <Link to="/student/result" className="dropdown-item">Results</Link>
               <Link to="/student/clearance" className="dropdown-item">Clearances</Link>
            </div>
          )}

          
          <div
            className="menu-item"
            onClick={() => setShowLecturerMenu(!showLecturerMenu)}
          >
            Lecturer
            <span className="arrow">{showLecturerMenu ? "▲" : "▼"}</span>
          </div>

          {showLecturerMenu && (
            <div className="dropdown">
              <Link to="/lecturer/lecturerprofile" className="dropdown-item">Profile</Link>
              <Link to="/lecturer/upload" className="dropdown-item">Upload Result</Link>
            </div>
          )}
              
          <Link to="#">Admin-Panel</Link>
          <Link to="#">Logout</Link>
        </nav>
      </aside>
    </>
  );
}
