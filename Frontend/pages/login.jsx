// App.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="main"
      style={{
        backgroundColor: "#63ab45",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="booking-form-wrapper mfp-img-container"
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
          width: "360px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", fontSize: "24px", color: "#333" }}>
          Log in
        </h2>
        <form onSubmit={handleSubmit} >
          <div className="form_group" style={{ marginBottom: "1.2rem" }}>
            <input
              type="text"
              className="form_control"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div className="form_group" style={{ marginBottom: "1.2rem" }}>
            <input
              type="password"
              className="form_control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div className="form_group">
            <button
              type="submit"
              className="booking-btn"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#63ab45",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
                transition: "background-color 0.3s",
              }}
            >
              Log in
            </button>
          </div>
        </form>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "14px",
            color: "#666",
          }}
        >
          or,{" "}
          <a href="#" style={{ color: "#63ab45", textDecoration: "none" }}>
            sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;