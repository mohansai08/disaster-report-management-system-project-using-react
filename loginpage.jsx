import React from "react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality not implemented yet");
  };

  return (
    <div className="login-container">
      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f7f9fc;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }

        .login-container {
          background: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .login-container h2 {
          color: #0052cc;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .login-container p {
          color: #555;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        input {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1.2rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        button {
          width: 100%;
          padding: 0.9rem;
          background: #ff5722;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 6px 12px rgba(255,87,34,0.3);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        button:hover {
          background: #e64a19;
          transform: translateY(-2px);
        }

        .alt-links {
          margin-top: 1.5rem;
          font-size: 0.9rem;
        }

        .alt-links a {
          color: #0052cc;
          text-decoration: none;
          font-weight: 600;
        }

        .alt-links a:hover {
          text-decoration: underline;
        }
      `}</style>

      <h2>Login to DisasterWatch</h2>
      <p>Sign in to report incidents, track disasters, and stay informed.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="alt-links">
        <p>Don't have an account? <a href="/register">Create one</a></p>
        <p><a href="#">Forgot password?</a></p>
      </div>
    </div>
  );
}