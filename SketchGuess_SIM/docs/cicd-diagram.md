# CI/CD Pipeline – SketchGuess

## Pipeline Diagram (Mermaid)

```mermaid
graph LR
    A[Push to main] --> B[Render auto-deploy]
    A --> C[GitHub Actions: Smoke Test]
    C --> D[Wait 30s]
    D --> E[HTTP GET / → 200 OK]
    E --> F[WebSocket handshake check]
    F --> G[✅ Smoke test passed]
    B --> H[Live at sketchguess.onrender.com]

[Developer pushes to main]
           │
           ├──────────────────────┐
           │                      │
           ▼                      ▼
   ┌─────────────┐        ┌─────────────────┐
   │   Render    │        │ GitHub Actions  │
   │ auto-deploy │        │  Smoke Test     │
   └─────────────┘        └─────────────────┘
           │                      │
           ▼                      ▼
   Live URL (onrender.com)   Wait 30s → curl / → 200 OK
                                      │
                                      ▼
                              WebSocket handshake
                                      │
                                      ▼
                              ✅ Test passes

Live at https://sketchguess.onrender.com


## Explanation of Stages

| Stage | Trigger | Action |
|-------|---------|--------|
| **Push to main** | Developer `git push` | GitHub detects push, Render starts deployment. |
| **Render auto‑deploy** | Push to main | Builds, installs, starts `node server.js`. |
| **GitHub Actions smoke test** | Same push, runs in parallel | Waits 30s, checks homepage (200), checks WebSocket handshake. |
| **Notification** | Action completes | Success/failure shown in GitHub. |

## Tools Used
- **CI:** GitHub Actions
- **Deployment:** Render (auto-deploy)
- **Smoke test:** `curl` (HTTP & WebSocket polling)

## Note
The smoke test does not block deployment – it runs after Render starts. If it fails, a red ❌ appears in GitHub, but the site is already live.