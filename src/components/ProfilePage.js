import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProfilePage.css";

function ProfilePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  function handleBackToHome() {
    navigate("/");
  }

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name || 'N/A'}</p>
        <p><strong>Email:</strong> {user.email || 'N/A'}</p>
        <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
      </div>
      <button className="back-to-home-button" onClick={handleBackToHome}>
        Back to Home Page
      </button>
    </div>
  );
}

export default ProfilePage;
