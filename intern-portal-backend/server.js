const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

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
  {name: "Sakshi", donations: 6000},
  { name: "Kriti", donations: 5000 },
  {name: "Vikas", donations: 5500},
  {name: "Adarsh", donations: 5500},

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

// Start server
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
