# Risk Register – SketchGuess

| Risk | Likelihood (1-5) | Impact (1-5) | Score (L×I) | Mitigation | Owner |
|------|------------------|--------------|-------------|-------------|-------|
| **WebSocket connection instability** – Players disconnect frequently during drawing. | 4 | 5 | 20 | Implement reconnection logic with automatic room rejoin. Add heartbeat ping/pong. | Mariel Laplap (DevOps) |
| **Canvas drawing lag** – High latency causes strokes to appear delayed on other players’ screens. | 3 | 4 | 12 | Optimise draw events: throttle (60fps), compress stroke data, use binary protocol. | Roger Bao Jr (Frontend) |
| **Room code collision** – Generated 6‑char codes may duplicate. | 2 | 4 | 8 | Check uniqueness before assigning; add retry logic (regenerate if collision). | Mariel Laplap |
| **Word API downtime** – External random word API fails, game cannot start. | 3 | 5 | 15 | Use fallback word list + cache 50+ words locally. Refresh cache every minute. | Thomas Gabriel Martinez (PM) |
| **Player leaves mid‑round as drawer** – Round breaks because no drawer remains. | 3 | 4 | 12 | Detect disconnection, immediately end current round, reassign drawer for next round. | Bea Lagayada (QA) |
| **Mobile touch drawing not smooth** – Canvas pointer events are inaccurate on touch devices. | 4 | 3 | 12 | Test on multiple devices; implement `touchmove` with `preventDefault` and proper coordinate scaling. | Roger Bao Jr |
| **Scores not synchronising** – Race condition when multiple guesses arrive simultaneously. | 2 | 5 | 10 | Server‑side atomic updates for score changes; broadcast final state after each correct guess. | Bea Lagayada |
| **Game state mismatch after reconnect** – Player sees old round or wrong word. | 3 | 4 | 12 | On reconnect, server sends full game state (round, masked word, timer, history). | Mariel Laplap |
| **Memory leak from draw history** – Storing all strokes per room causes memory exhaustion over long games. | 2 | 3 | 6 | Limit draw history to last 200 strokes; clear on round end. | Cydney Ruelo (Docs) |
| **Cheating via browser dev tools** – Player can see the hidden word. | 3 | 3 | 9 | Send word only to drawer; masked word to others. Server validates guesses. | Thomas Gabriel Martinez |
| **Skip button abuse** – Players may skip repeatedly to avoid drawing. | 3 | 3 | 9 | Limit skip to once per player per game; apply point penalty; log skips. | Bea Lagayada |

**Score legend:**  
- 1–4: Low  
- 5–12: Medium  
- 13–25: High

| **Spoofed host commands** – Malicious player could send 'start-game' event without being host. | 3 | 4 | 12 | Implement host token validation on server. Token generated per room, required for all host actions. | Thomas Martinez |
| **XSS via chat messages** – Player injects `<script>` in guess, executed on other clients. | 3 | 5 | 15 | Escape HTML on both server and client before rendering. Already using `escHtml` in frontend; ensure server also escapes before broadcasting. | Bea Lagayada |
| **Dependency vulnerability** – Outdated npm package with known CVE. | 2 | 4 | 8 | Run `npm audit` weekly; use `npm audit fix` or `npm update`; add `npm audit` to CI pipeline. | Mariel Laplap | 