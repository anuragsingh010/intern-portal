import React, { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const internName = localStorage.getItem("internName") || "Guest";

  useEffect(() => {
    axios
      .get("/api/leaderboard")
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, []);

  return (
    <div className="container leaderboard">
      <div className="card">
        <h2>Leaderboard</h2>
        <ol>
          {leaders.map((l, idx) => (
            <li
              key={idx}
              style={{
                background:
                  l.name === internName ? "#dff0d8" : "white",
              }}
            >
              <span>
                {idx + 1}. {l.name}
              </span>
              <strong>₹{l.donations}</strong>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Leaderboard;
