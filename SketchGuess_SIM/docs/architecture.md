# System Architecture – SketchGuess

## Architecture Diagram (ASCII)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Clients (Browsers)                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│  │Player 1 │  │Player 2 │  │Player 3 │  │Player 4 │  │Player 5 │          │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘          │
│       │            │            │            │            │                │
│       └────────────┼────────────┼────────────┼────────────┘                │
│                    │            │            │                             │
│                    ▼            ▼            ▼                             │
│              WebSocket (Socket.IO) – real‑time, low latency                 │
│                              │                                              │
│                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         Render (Cloud Hosting)                         │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │                      Node.js + Express Server                     │  │  │
│  │  │  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐     │  │  │
│  │  │  │ HTTP      │  │ Socket.IO │  │ In‑Memory │  │ Word Pool │     │  │  │
│  │  │  │ Routes    │  │ Events    │  │ Rooms     │  │ (200 words)│     │  │  │
│  │  │  └───────────┘  └───────────┘  └───────────┘  └───────────┘     │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                              │                                              │
│                              ▼                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         GitHub (Code & CI/CD)                          │  │
│  │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐               │  │
│  │  │   main      │───▶│ Smoke Test  │───▶│  Render     │               │  │
│  │  │   branch    │    │ (GitHub     │    │  Auto‑deploy│               │  │
│  │  │             │    │  Actions)   │    │             │               │  │
│  │  └─────────────┘    └─────────────┘    └─────────────┘               │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Client** | HTML5 Canvas, JavaScript, Socket.IO client | Drawing, guessing, real‑time updates |
| **Web Server** | Express.js (Node.js) | Serves static files, health checks |
| **Real‑time Engine** | Socket.IO | Bidirectional event communication (draw strokes, guesses, timers) |
| **In‑Memory Store** | JavaScript Map / Object | Rooms, players, scores, draw history (no persistence) |
| **Word Pool** | Array of 200 curated words | Ensures easy, drawable words; reshuffled when low |
| **CI/CD** | GitHub Actions + Render | Automated smoke tests on push, auto‑deploy to cloud |
| **Cloud Hosting** | Render (free tier) | Hosts Node.js app, provides public URL |

## Data Flow (Typical Game Session)

1. **User opens lobby** → Browser loads `index.html` from Render.
2. **Player creates room** → Socket.IO `create-room` event → Server generates room code, host token → Player receives room code.
3. **Other players join** → `join-room` event → Server validates, adds to room → All players see updated player list.
4. **Host starts game** → Sends `start-game` with token → Server selects first drawer, picks random word, starts timer.
5. **Drawing** – Drawer sends `draw` events → Server broadcasts to other players → Canvas updates in real time.
6. **Guessing** – Players send `guess` events → Server checks correctness, awards points, broadcasts `correct-guess`.
7. **Round end** – Timer reaches 0 or all guessers correct → Server shows word, waits 5 seconds, starts next round.
8. **Game end** – After all rounds → Server emits `game-over` with final scores.