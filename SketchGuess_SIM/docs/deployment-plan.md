# Deployment Plan – SketchGuess (Render.com)

## Target Environment
- **Platform:** Render.com (free tier)
- **Region:** Oregon
- **Node version:** 18.x
- **Build command:** `npm install`
- **Start command:** `node server.js`
- **No database** – in‑memory storage. Data resets on service restart.

## Rollout Strategy: Recreate (simple)
- New version builds and starts.
- Old version stops.
- Users refresh the page to get the new version.

## Deployment Steps (Render.com)

### Prerequisites
- GitHub repository with `server.js` and `index.html` inside a `public/` folder.
- `package.json` with `express`, `socket.io`, `uuid`.

### Step-by-Step
1. Push your latest code to GitHub (`main` branch).
2. Log in to [Render Dashboard](https://dashboard.render.com).
3. Click **New +** → **Web Service**.
4. Connect your GitHub repository.
5. Select the repository.
6. Configure:
   - **Name:** `sketchguess` (or any unique name)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
7. Click **Create Web Service**.
8. Wait for the build to finish (view logs).
9. Your live URL will be `https://sketchguess-github-io.onrender.com`.

## Rollback Steps (Critical)

If the new deployment fails or has a critical bug:

1. **Via Render UI (easiest):**
   - Go to your service → **Events** tab.
   - Find the previous successful deployment.
   - Click **Rollback to this deploy**.
   - Confirm. Takes ~30 seconds.

2. **Via Git revert (if needed):**
   ```bash
   git revert HEAD
   git push origin main