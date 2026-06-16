# InterCode 💻
A full-stack virtual interview and collaborative programming platform with real-time code sync, video calling, live chat, and in-browser code execution.

---

## 🔗 Live Demo

| | Link |
|--|--|
| 🚀 Live App | [intercode-wdpe.onrender.com](https://intercode-wdpe.onrender.com/) |

---

## Tech Stack

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Stream](https://img.shields.io/badge/Stream.io-005FFF?style=for-the-badge&logo=stream&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Project Structure

```
intercode/
├── frontend/     # React SPA (Vite + Tailwind)
└── backend/      # Express REST API + WebSocket server
```

---

## Features

- **Sessions** — Create or join password-protected 1-on-1 coding sessions
- **Code Editor** — Monaco Editor (VS Code engine) with real-time WebSocket sync across both users
- **Video & Chat** — Integrated video calling and live chat via Stream.io, no external app needed
- **Code Execution** — Run code directly in the browser across C++, Java, Python, and JavaScript via Piston API
- **Problem Library** — Pre-loaded coding problems with difficulty levels, examples, and starter code
- **Auth** — Secure authentication via Clerk with event-driven user sync to MongoDB using Inngest
- **Dashboard** — View active sessions, recent session history, and session statistics
- **Session Persistence** — Sessions stored in MongoDB with host and participant tracking

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance
- Stream.io account (Chat + Video)
- Clerk account
- Inngest account

### Backend `.env`

```env
PORT=5000
NODE_ENV=development
DB_URL=
STREAM_API_KEY=
STREAM_API_SECRET=
CLIENT_URL=http://localhost:5173
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
JWT_SECRET=
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_STREAM_API_KEY=
VITE_WS_URL=ws://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=
```

### Run Locally

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend
cd frontend && npm install && npm run dev
```

---

## Deployment

- Deployed on **Render**
- Database hosted on **MongoDB Atlas**
- Backend serves frontend `dist/` in production via Express
