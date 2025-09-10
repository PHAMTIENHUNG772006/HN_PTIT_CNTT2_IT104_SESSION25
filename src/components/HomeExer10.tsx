import React from "react";
import { useLocation } from "react-router-dom";

export default function HomeExer10() {
  const location = useLocation();
  const { email } = location.state || {};

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Home Page</h2>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}
