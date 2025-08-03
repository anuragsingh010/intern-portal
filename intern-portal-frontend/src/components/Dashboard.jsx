import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);
  const internName = localStorage.getItem("internName") || "Guest";

  useEffect(() => {
    axios
      .get("/api/intern-data")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <div className="container card">Loading...</div>;

  return (
    <div className="container dashboard">
      <div className="card">
        <h2>Welcome, {internName}</h2>
        <p>
          <strong>Referral Code:</strong> {data.referralCode}
        </p>
        <p>
          <strong>Total Donations Raised:</strong> ₹{data.totalDonations}
        </p>
      </div>

      <div className="card">
        <h3>Rewards / Unlockables</h3>
        <div className="rewards">
          {data.rewards.map((reward, idx) => (
            <div
              key={idx}
              className={`reward-card ${reward.unlocked ? "unlocked" : "locked"}`}
            >
              {reward.name} {reward.unlocked ? "✅" : "🔒"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
