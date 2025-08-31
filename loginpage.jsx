import React, { useState } from "react";

/**
 * LoginPage.jsx
 * React conversion of the original static login.html + login.css + login.js.
 * - Preserves the visual design (animated gradient, glass card) and UX.
 * - Adds basic validation and a graceful redirect (configurable).
 * - No external CSS file required; styles are scoped to this component.
 */
export default function LoginPage({ onLogin, redirectTo = "landing.html", onGoToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }
    setSubmitting(true);

    // Simulate processing as the original script did, then redirect
    const payload = { email: email.trim(), password: password.trim() };
    console.log("Login attempt:", payload);

    try {
      if (typeof onLogin === "function") {
        onLogin(payload);
      } else {
        // Fallback: mimic original behavior and navigate to landing page
        window.location.href = redirectTo;
      }
    } finally {
      setSubmitting(false);
    }
  };

  const gotoSignup = (e) => {
    e.preventDefault();
    if (typeof onGoToSignup === "function") {
      onGoToSignup();
    } else {
      // Fallback: preserve original link target
      window.location.href = "signup.html";
    }
  };

  return (
    <div className="login-page">
      <style>{`
        /* Scoped styles (ported from login.css and adapted to component scope) */
        .login-page {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #3b8d99, #6b6b83, #aa4b6b);
          background-size: 400% 400%;
          animation: loginGradientBG 12s ease infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes loginGradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .login-container {
          background: rgba(255, 255, 255, 0.1);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          width: 350px;
          text-align: center;
          color: white;
        }

        .login-container h2 {
          margin-bottom: 20px;
          font-size: 28px;
        }

        .login-container input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .login-container input:focus {
          box-shadow: 0 0 5px #fff, 0 0 10px #ff4081;
        }

        .login-container button[type="submit"] {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .login-container button[type="submit"]:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(255, 105, 180, 0.6);
        }

        .login-container a {
          display: block;
          margin-top: 15px;
          color: #fff;
          text-decoration: none;
        }

        .login-container a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-container" role="region" aria-label="Login form">
        <h2>Welcome Back</h2>
        <form id="loginForm" onSubmit={handleSubmit} noValidate>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
            autoComplete="email"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
            autoComplete="current-password"
          />
          <button type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
        <a href="signup.html" onClick={gotoSignup}>Create New Account</a>
      </div>
    </div>
  );
}
