import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage"



function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
