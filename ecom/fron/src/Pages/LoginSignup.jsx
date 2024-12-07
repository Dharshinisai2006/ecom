import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });
  const { setUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin
        ? "http://localhost:4000/login"
        : "http://localhost:4000/signup";
      const response = await axios.post(endpoint, formData);

      if (response.data.success) {
        alert(isLogin ? "Login successful!" : "Signup successful!");
        setUser(response.data.user); // Update user context
      } else {
        alert(response.data.message || "Operation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="loginsignup">
      <form className="loginsignUp-container" onSubmit={handleSubmit}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required={!isLogin}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {!isLogin && (
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agree">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        )}
        <button type="submit">Continue</button>
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="loginsignup-toggle"
        >
          {isLogin
            ? "Don't have an account? Sign up here"
            : "Already have an account? Login here"}
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
