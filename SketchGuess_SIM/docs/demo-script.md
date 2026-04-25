# Demo Script – SketchGuess (v1.0)

## 1. Problem Statement (1 min)
“Remote teams struggle with engaging icebreakers. Existing drawing games are either too simple or require accounts. We built a no‑login, real‑time drawing & guessing game.”

## 2. Solution Overview (1 min)
- Show lobby: create room → code appears.
- Join from another browser.
- Start game → drawer sees word, others see underscores.
- Draw a simple object (e.g., “apple”).
- Other player guesses → score updates, confetti.

## 3. CI/CD Pipeline (1.5 min)
- Open GitHub Actions → show smoke test passing.
- Show Render dashboard → auto‑deploy on `main` push.
- Show health endpoint: `https://your-app.onrender.com/health`.

## 4. Monitoring & Logging (1 min)
- Show Render logs (HTTP requests, socket errors).
- Show periodic monitor log (rooms, players) in console.

## 5. Architecture & DevOps Practices (1 min)
- Show `docs/architecture.md` (ASCII diagram).
- Show `docs/devops-practices.md` (caching, CI, monitoring).

## 6. Metrics & Lessons Learned (1 min)
- KPIs: deployment frequency, error rate, lead time.
- Main lesson: In‑memory state is simple but not persistent; for production we would add Redis.
- Next steps: Dockerize, add staging environment.

## 7. Q&A (30 sec)
“Code is open‑source on GitHub; questions welcome.”