import React, { useState } from "react";
import "./Lecturerprofile.css";


function LecturerProfile() {
  const [profileImage, setProfileImage] = useState("/image.png");
  const [name, setName] = useState("Enter Full Name");
  const [lecturerId, setLecturerId] = useState("Enter ID");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  
  const toggleVisibility = (field, setter) => {
    setter((prev) => (prev === "password" ? "text" : "password"));
  };

  const [oldType, setOldType] = useState("password");
  const [newType, setNewType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");

  return (
    <div className="profile-card">
      <h2 class="lecturer-header" >Lecturer Profile</h2>

      {/* Profile Picture */}
      <div className="profile-pic">
        <img
        id="profileImage"
        src={profileImage}
        alt="Profile"
        className="profile-pic-img"
      />

      <input
        type="file"
        id="uploadPhoto"
        accept="image/*"
        style={{ display: "none" }}   // hides the input
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            // preview the image
            const reader = new FileReader();
            reader.onload = (event) => {
              document.getElementById("profileImage").src = event.target.result;
            };
            reader.readAsDataURL(file);
          }
        }}
      />

      {/* Trigger the input via label */}
      <label htmlFor="uploadPhoto" className="upload-btn">
        📸 Change Photo
      </label>
  </div>

      {/* Profile Form */}
      <form id="profileForm">
        <label className="labelled" htmlFor="name">
          Full Name
        </label>
        <input
          className="profile-input"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="labelled" htmlFor="lecturerId">
          Lecturer ID
        </label>
        <input
          className="profile-input"
          type="text"
          id="lecturerId"
          value={lecturerId}
          onChange={(e) => setLecturerId(e.target.value)}
        />

       

        <label className="labelled" htmlFor="department">
          Department
        </label>
        <select
          className="profile-select"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>MEDICINE</option>
          <option>NURSING</option>
          <option>PHYSIOLOGY</option>
          <option>ANATOMY</option>
          <option>MLS</option>
        </select>

        <label className="labelled" htmlFor="password">
          Password
        </label>
        <div className="password-wrapper">
          <input class="passord-input"
            type={password ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            id="togglePassword"
            className="toggle-icon"
            onClick={() =>
              setPassword((prev) => (prev ? "" : password))
            }
          >
            👁️
          </span>
        </div>
      </form>

      <button type="submit" className="btn">
        Save Changes
      </button>

      {/* Change Password Button */}
      <button
        id="changePasswordBtn"
        className="btn secondary"
        onClick={() => setModalOpen(true)}
      >
         Change Password
      </button>

      {/* Password Change Modal */}
        {modalOpen && (
      <div className="modal">
        <div className="modal-content">
          <h3>Change Password</h3>

          <label htmlFor="oldPassword">Old Password</label>
          <div className="password-wrapper">
            <input
              type={oldType}
              id="oldPassword"
              className="modal-input"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <span
              className="toggle-visibility"
              onClick={() => toggleVisibility("old", setOldType)}
            >
              👁️
            </span>
          </div>

          <label htmlFor="newPassword">New Password</label>
          <div className="password-wrapper">
            <input 
              type={newType}
              id="newPassword"
              className="modal-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              className="toggle-visibility"
              onClick={() => toggleVisibility("new", setNewType)}
            >
              👁️
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm New Password</label>
          <div className="password-wrapper">
            <input
              type={confirmType}
              id="confirmPassword"
              className="modal-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="toggle-visibility"
              onClick={() => toggleVisibility("confirm", setConfirmType)}
            >
              👁️
            </span>
          </div>

          <div className="modal-actions">
            <button id="savePassword" className="modal-btn confirm">
              Save
            </button>
            <button
              id="closeModal"
              className="modal-btn cancel"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default LecturerProfile;