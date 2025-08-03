// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const internName = localStorage.getItem("internName");
  return internName ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
