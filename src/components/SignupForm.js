import React, { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isEmailValid = email !== "" && EMAIL_REGEX.test(email);
  const isPasswordValid = password.length >= 8;
  const isConfirmPasswordValid =
    confirmPassword !== "" && confirmPassword === password;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setEmailError("Email is required");
    } else if (!EMAIL_REGEX.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
    if (confirmPassword !== "" && confirmPassword !== value) {
      setConfirmPasswordError("Passwords do not match");
    } else if (confirmPassword !== "") {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  const emailBorderClass =
    email === "" ? "" : isEmailValid ? "valid" : "invalid";

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            className={emailBorderClass}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {passwordError && (
            <span className="error-message">{passwordError}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
          />
          {confirmPasswordError && (
            <span className="error-message">{confirmPasswordError}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
