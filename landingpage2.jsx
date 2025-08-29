import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function ReportIncident() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (!mapRef.current) return;

    const mapInstance = L.map(mapRef.current).setView([20.5937, 78.9629], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapInstance);

    // On map click select location
    mapInstance.on("click", (e) => {
      const lat = e.latlng.lat.toFixed(6);
      const lng = e.latlng.lng.toFixed(6);
      setLocation(`${lat}, ${lng}`);

      if (marker) {
        mapInstance.removeLayer(marker);
      }

      const newMarker = L.marker([lat, lng]).addTo(mapInstance);
      setMarker(newMarker);
    });

    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        mapInstance.setView([lat, lng], 13);
      });
    }

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Incident reported successfully!");
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <div>
      <header style={{ background: "#0052cc", color: "white", padding: "1rem", textAlign: "center" }}>
        <h1>Report an Incident</h1>
      </header>

      <main style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
          }}
        >
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., Flood in Main Street"
            required
            style={inputStyle}
          />

          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe the incident..."
            rows="4"
            required
            style={inputStyle}
          ></textarea>

          <label>Your Location (click on the map)</label>
          <input
            type="text"
            value={location}
            readOnly
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit Report
          </button>
        </form>

        <div ref={mapRef} style={{ height: "400px", borderRadius: "10px", marginTop: "1rem" }}></div>
      </main>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginTop: "0.5rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  marginTop: "0.75rem",
  borderRadius: "5px",
  border: "none",
  fontSize: "1rem",
  background: "#ff5722",
  color: "white",
  cursor: "pointer",
};