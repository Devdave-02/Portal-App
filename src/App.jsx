import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Landing from './pages/landing';
import Assignment from './pages/Assignment';
import Result from './pages/result';


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
      </Routes>
    </div>
  );
}

export default App;
