# 🎨 SketchGuess – Multiplayer Drawing & Guessing Game

SketchGuess is a real‑time multiplayer game where one player draws a word while others guess it. No accounts, no installation – just create a room, share the code, and start playing.

**Live Demo:** [https://sketchguess.onrender.com](https://sketchguess.onrender.com)

---

## ✨ Features

- **Real‑time drawing** – Every stroke appears instantly on all players’ screens.
- **Multiplayer rooms** – Up to 10 players per room; unique 6‑character room codes.
- **Turn‑based drawing** – Rotates drawer each round; word is hidden from guessers.
- **Smart scoring** – Faster guesses earn more points; drawer gets bonus when someone guesses correctly.
- **Word hints** – At 50% time remaining, some letters are revealed.
- **Close guess detection** – Levenshtein distance ≤2 triggers a “close!” badge.
- **Host controls** – Start game, new game, skip turn (with penalty).
- **Character avatars** – Choose from 12+ emojis to personalise your appearance.
- **Floating drawer indicator** – Shows who is currently drawing (visible to all non‑drawers).
- **Top‑3 leaderboard** – Highlights 1st, 2nd, and 3rd place with distinct styles.
- **Exit button** – Leave a room and return to lobby without reloading the page.

---

## 🛠️ Tech Stack

| Area | Technology |
|------|------------|
| **Frontend** | HTML5 Canvas, CSS3, Vanilla JavaScript, Socket.IO client |
| **Backend** | Node.js, Express.js, Socket.IO |
| **Hosting** | Render (free tier) |
| **CI/CD** | GitHub Actions (smoke tests) + Render auto‑deploy |
| **Dependencies** | Express, Socket.IO, UUID, Morgan, Dotenv |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18 or later)
- npm (v9 or later)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SketchGuess_SIM.git
   cd SketchGuess_SIM
   ```

2. **Navigate to the backend folder** (if your structure is nested)
   ```bash
   cd SketchGuess_SIM/tests   # adjust to where server.js is located
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the server**
   ```bash
   node server.js
   ```

5. **Open your browser** and go to `https://sketchguess.onrender.com`

> **Note:** If your `server.js` is in a subfolder, make sure the `public/` directory (with `index.html`) is in the same folder.

---

## ☁️ Deployment (Render)

This project is set up for automatic deployment on Render.

1. Push your code to a GitHub repository.
2. Log in to [Render](https://render.com).
3. Click **New +** → **Web Service** → connect your GitHub repo.
4. Configure:
   - **Root Directory:** `SketchGuess_SIM/SketchGuess_SIM/tests` (or the folder containing `server.js`)
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Click **Create Web Service**.
6. Render auto‑deploys on every push to `main`.

**Health check endpoint:** `https://your-app.onrender.com/health`

---

## 🔁 CI/CD Pipeline (GitHub Actions)

- **Trigger:** Every push to `main` branch
- **Jobs:**
  1. Waits 60 seconds for Render to wake up.
  2. Checks homepage (`/`) returns HTTP 200.
  3. Verifies Socket.IO handshake (returns a session ID).
- **Status:** Badge in README (see above).

Workflow file: `.github/workflows/smoke-test.yml`

---

## 📊 Monitoring & KPIs

| KPI | Target | Current | Status |
|-----|--------|---------|--------|
| Deployment frequency | ≥2 per week | 1.4 | ⚠️ Below |
| Lead time for change | <5 min | 3 min 20 sec | ✅ Good |
| Error rate | <2% | 3.8% | ⚠️ High |
| Round completion rate | >90% | 88% | ⚠️ Near |
| Session length | >10 min | 8.2 min | ⚠️ Low |

**Logging:** HTTP requests (morgan), socket errors, periodic room/player counts (every hour).

---

## 📁 Project Structure

```
SketchGuess_SIM/
├── .github/
│   └── workflows/
│       └── smoke-test.yml
└── SketchGuess_SIM/
    └── tests/
        ├── public/
        │   └── index.html
        ├── server.js
        ├── package.json
        ├── package-lock.json
        └── docs/               (all lab documentation)
            ├── backlog.md
            ├── sprint-1-plan.md
            ├── risk-register.md
            ├── qa-plan.md
            ├── defect-log.md
            ├── release-notes.md
            ├── architecture.md
            ├── devops-practices.md
            ├── cost-benefit.md
            ├── ethics-impact.md
            ├── ip-and-attribution.md
            ├── privacy-note.md
            ├── kpis.md
            ├── metrics-report.md
            └── ...
```

---

## 🧪 Running Tests

```bash
# Unit tests (if you have Jest set up)
npm test

# Smoke test (local simulation – requires running server)
curl http://localhost:3000 | head -n 1 | grep "200"
```

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Thomas Gabriel Martinez – Project Manager / Scrum Master
- Bea Lagayada – QA Lead
- Mariel Laplap – DevOps Lead
- Cydney Ruelo – Docs Lead
- Roger Bao Jr – Frontend / UI Lead

---

## 🙏 Acknowledgements

- [Google Fonts](https://fonts.google.com) – Fredoka One & Nunito (Open Font License)
- [Render](https://render.com) – Free hosting
- [Socket.IO](https://socket.io) – Real‑time engine
- Emoji avatars – Unicode Standard

---

## 🐛 Known Issues

- Free tier on Render spins down after 15 minutes of inactivity (first request may take ~15 seconds to wake up).
- No persistent database – rooms are lost on server restart.
- Mobile touch drawing has slight lag on older devices (planned improvement).

---

## 🔮 Future Roadmap

- [ ] Add Redis for persistent rooms and scores.
- [ ] Implement user accounts with saved stats.
- [ ] Add voice/video chat (WebRTC).
- [ ] More drawing tools (fill bucket, spray can).
- [ ] Private rooms with passwords.

---

*Built as a capstone project for software engineering course – all documentation included in `/docs`.*
```

This README is ready to copy and paste into your repository. It covers all major aspects of your project and will look great on GitHub.
