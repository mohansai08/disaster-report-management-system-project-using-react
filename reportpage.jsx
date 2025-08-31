import React, { useState } from "react";

/**
 * ReportPage.jsx
 * React conversion of Report.html
 * - Allows submitting a disaster report with description and location.
 * - Styled with gradient + glass container like other pages.
 */
export default function ReportPage({ onSubmitReport }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !location.trim() || !description.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setSubmitting(true);
    const payload = { name: name.trim(), location: location.trim(), description: description.trim() };
    console.log("Report submitted:", payload);

    try {
      if (typeof onSubmitReport === "function") {
        onSubmitReport(payload);
      } else {
        alert("Report submitted successfully!");
      }
      setName("");
      setLocation("");
      setDescription("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="report-page">
      <style>{`
        .report-page {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #ff6a00, #ee0979);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .report-container {
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

        .report-container h2 {
          margin-bottom: 20px;
          font-size: 28px;
        }

        .report-container input,
        .report-container textarea {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .report-container textarea {
          resize: none;
          height: 100px;
        }

        .report-container button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #36d1dc, #5b86e5);
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .report-container button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(91, 134, 229, 0.6);
        }
      `}</style>

      <div className="report-container" role="region" aria-label="Report form">
        <h2>Disaster Report</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Your Name"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Location"
            required
          />
          <textarea
            placeholder="Describe the disaster..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-label="Disaster description"
            required
          />
          <button type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? "Submitting..." : "Submit Report"}
          </button>
        </form>
      </div>
    </div>
  );
}
