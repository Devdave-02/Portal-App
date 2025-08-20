import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Landing from './pages/landing';
import Assignment from './pages/Assignment';
import Result from './pages/result';
import Course from './pages/course';
import Profile from './pages/profile';
import UploadResult from './pages/upload';
import LecturerProfile from './pages/lecturerprofile';
import Clearance  from  './pages/clearance';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Default route: login page */}
        <Route path="/" element={<Login />} />

        {/* Landing page after successful login */}
        <Route path="/landing" element={<Landing />} />
        
        <Route path="/student/assignment" element={<Assignment />} />

        <Route path="/student/result" element={<Result />} />

        <Route path="/student/course" element={<Course />} />

        <Route path="/student/profile" element={<Profile />} />

         <Route path="/student/clearance" element={<Clearance />} />

        <Route path="/lecturer/upload" element={<UploadResult />} />

        <Route path="/lecturer/lecturerprofile" element={<LecturerProfile />} />

       


      </Routes>
    </div>
  );
}

export default App;
