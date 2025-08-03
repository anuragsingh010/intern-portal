import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      
    </nav>
  );
}

export default Navbar;
