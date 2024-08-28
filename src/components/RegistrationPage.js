import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationPage.css";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "country") setCountry(value);
    if (name === "phone") setPhone(value);
    if (name === "password") setPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !country || !phone || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Registering", { name, email, country, phone, password });

    localStorage.setItem('user',JSON.stringify( {email,password}));

    setName("");
    setEmail("");
    setCountry("");
    setPhone("");
    setPassword("");
    navigate('/')
  }
  
  return (
    <div className="registration-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
          >
            <option value="">Select your country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="south-africa">South Africa</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Create Password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
