import React, { useState } from "react";

/**
 * SignupPage.jsx
 * React conversion of signup.html + signup.css
 * - Replicates glassmorphism style and form behavior.
 * - Handles basic validation before submission.
 */
export default function SignupPage({ onSignup, redirectTo = "login.html" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    const payload = { name: name.trim(), email: email.trim(), password: password.trim() };
    console.log("Signup attempt:", payload);

    try {
      if (typeof onSignup === "function") {
        onSignup(payload);
      } else {
        // Fallback: mimic redirect to login page after successful signup
        window.location.href = redirectTo;
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-page">
      <style>{`
        .signup-page {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4);
          background-size: 400% 400%;
          animation: signupGradientBG 12s ease infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes signupGradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .signup-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          width: 350px;
          text-align: center;
          color: white;
        }

        .signup-container h2 {
          margin-bottom: 20px;
          font-size: 28px;
        }

        .signup-container input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .signup-container input:focus {
          box-shadow: 0 0 5px #fff, 0 0 10px #ff4081;
        }

        .signup-container button[type="submit"] {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #36d1dc, #5b86e5);
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .signup-container button[type="submit"]:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(91, 134, 229, 0.6);
        }

        .signup-container a {
          display: block;
          margin-top: 15px;
          color: #fff;
          text-decoration: none;
        }

        .signup-container a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="signup-container" role="region" aria-label="Signup form">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Full Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-label="Confirm Password"
            required
          />
          <button type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <a href="login.html">Already have an account? Login</a>
      </div>
    </div>
  );
}
