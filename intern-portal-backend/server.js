const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Dummy intern data
const internData = {
  internName: "Anurag",
  referralCode: "anurag2025",
  totalDonations: 20000,
  rewards: [
    { name: "Bronze Badge", unlocked: true },
    { name: "Silver Badge", unlocked: false },
    { name: "Gold Badge", unlocked: false }
  ]
};

// Dummy leaderboard data
const leaderboardData = [
  { name: "Anurag", donations: 20000 },
  { name: "Divya", donations: 10000 },
  { name: "Amarpreet", donations: 7500 },
  { name: "Sakshi", donations: 6000 },
  { name: "Kriti", donations: 5000 },
  { name: "Vikas", donations: 5500 },
  { name: "Adarsh", donations: 5500 }
];

// Health check route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Intern data API
app.get('/api/intern-data', (req, res) => {
  res.json(internData);
});

// Leaderboard API
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

// Use Render's port or default to 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Backend running on port ${PORT}`));
