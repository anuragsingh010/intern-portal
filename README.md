# 🎓 Intern Portal – Full Stack Developer Internship (Round 1 Task)

This is a basic **Full Stack Intern Portal** built as part of the internship assignment.  
The portal includes a dummy login/signup, dashboard, leaderboard, rewards section, and a simple backend API.

---

## 🚀 Features
### Frontend (React + Vite)
- ✅ Dummy Login & Signup (no authentication required, localStorage based)
- ✅ Dashboard with:
  - Intern Name
  - Referral Code
  - Total Donations Raised
  - Rewards/Unlockables Section
- ✅ Leaderboard Page (with dummy backend data)
- ✅ Modern UI/UX (responsive, clean, and professional design)
- ✅ Navbar with smooth navigation

### Backend (Node.js + Express)
- ✅ `/api/intern-data` → Returns dummy intern details
- ✅ `/api/leaderboard` → Returns dummy leaderboard data
- ✅ CORS enabled for frontend-backend connection

---

## 🖼️ Screenshots
| Login | Dashboard | Leaderboard |
|-------|-----------|-------------|
| ![Login Screenshot](./screenshots/login.png) | ![Dashboard Screenshot](./screenshots/dashboard.png) | ![Leaderboard Screenshot](./screenshots/leaderboard.png) |

---

## 🛠️ Tech Stack
### Frontend:
- React (Vite)
- Axios
- CSS (Custom Styling)

### Backend:
- Node.js
- Express.js
- CORS

---

## ⚡ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/intern-portal.git
cd intern-portal

###backend setup

cd intern-portal-backend
npm install
node server.js

Backend will run on http://localhost:5000

####Frontend Setup

cd ../intern-portal-frontend
npm install
npm run dev

Frontend will run on http://localhost:5173

