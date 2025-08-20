import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <button className="profile-button">Profile</button>

      <div className="profile-icon">
        {/* You can add an <img src={userIcon} alt="Profile Icon" /> here if you have one */}
      </div>

      <h1 className="profile-name">Northbridge Student</h1>
      <h2 className="section-title">Basic Information</h2>

      <div className="info-grid">
        <div className="info-box">
          <span>Full Name</span>
          <u className="info-value">Felix John</u>
        </div>
        <div className="info-box">
          <span>Pronunciation</span>
          <u className="info-value">Add Pronunciation</u>
        </div>
        <div className="info-box">
          <span>Email Address</span>
          <u className="info-value">felix@gmail.com</u>
        </div>
        <div className="info-box">
          <span>Pronouns</span>
          <u className="info-value">Add Pronouns</u>
        </div>
        <div className="info-box">
          <span>Password</span>
          <u className="info-value">Change password</u>
        </div>
      </div>
    </div>
  );
};

export default Profile;
