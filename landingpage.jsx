import React from "react";

/**
 * LandingPage.jsx
 * React conversion of landing.html
 * - Provides a welcoming landing screen after login/signup.
 * - Styled with gradient background + card.
 */
export default function LandingPage({ onLogout }) {
  const handleLogout = (e) => {
    e.preventDefault();
    if (typeof onLogout === "function") {
      onLogout();
    } else {
      // Fallback: mimic going back to login page
      window.location.href = "login.html";
    }
  };

  return (
    <div className="landing-page">
      <style>{`
        .landing-page {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .landing-container {
          background: rgba(255, 255, 255, 0.15);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          text-align: center;
          color: white;
          width: 400px;
        }

        .landing-container h1 {
          margin-bottom: 20px;
          font-size: 32px;
        }

        .landing-container p {
          margin-bottom: 20px;
          font-size: 18px;
        }

        .landing-container button {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .landing-container button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(238, 9, 121, 0.6);
        }
      `}</style>

      <div className="landing-container">
        <h1>Welcome!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
