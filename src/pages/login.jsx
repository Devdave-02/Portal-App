import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "tailwindcss";
import './login.css'; 

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validUsers = [
    { username: 'student01', password: 'pass123' },
    { username: 'admin01', password: 'adminpass' },
    { username: 'lecturer01', password: 'teachme' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValid) {
      navigate('/landing');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="container">
      <div className="logo-box">
        <img
          className="uni-logo"
          src="Logo.png"
          alt="Student Logo"
        />
        <h1>
          NORTHBRIDGE <br /> UNIVERSITY <br /> PORTAL
        </h1>
      </div>

      <p className="instruction">
        Enter your Username and Password to access the portal
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Student ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            id="togglePassword"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit">Sign In</button>
        <a href="#" className="forgot-link">
          Forgot Password?
        </a>
      </form>
    </div>
  );
}

export default Login;
