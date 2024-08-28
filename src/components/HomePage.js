import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    const navigate = useNavigate();
  
    function handleLogout() {
     
      localStorage.removeItem('user');
     
      navigate('/login');
    }
  
    return (
      <div className="home-container">
        <div className="nav-bar">
          <Link to="/login" className="login-link">
            Profile
          </Link>
          <Link to="/profile" className="profile-link">
            Profile
          </Link>
        </div>
        <h1>Welcome</h1>
      </div>
    );
  }
  
  export default HomePage;