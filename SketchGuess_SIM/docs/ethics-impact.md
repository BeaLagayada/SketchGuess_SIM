# Ethics Impact Assessment – SketchGuess

## Stakeholders

| Stakeholder | Interests / Values |
|-------------|--------------------|
| **Players** | Enjoyment, fair play, privacy, no harassment. |
| **Hosts** | Ability to control game start, manage players. |
| **Developers** | Build a safe, inclusive, and reliable game. |
| **Platform providers** (Render, GitHub) | Uphold terms of service, prevent abuse. |
| **Parents / guardians** (if minors play) | Child safety, appropriate content. |

## Potential Ethical Risks and Harms

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-------------|
| **Harassment through chat** – Players send offensive messages. | Medium | High | Chat messages are visible; we can add a profanity filter and a mute/kick feature (future). Currently, host can end the game or players can leave. |
| **Cheating** – Using external tools to see hidden word. | Low | Medium | Word is sent only to the drawer; masked word to others. Server validates guesses. No persistent account, so cheating has little incentive. |
| **Addiction / excessive play** – No time limits on game sessions. | Low | Low | Rounds are timed and games have a finite number of rounds. No reward loops that encourage grinding. |
| **Data privacy** – Collection of names and IP addresses. | Medium | Medium | We collect only a nickname and temporary IP (via socket). No persistent storage. See `privacy-note.md`. |
| **Exclusion bias** – Avatar selection may lack diversity. | Low | Low | Avatars are simple emojis; players can choose any from a wide set. No gender/race assumptions. |
| **Accessibility** – Players with motor or vision impairments may struggle with drawing. | Medium | Medium | Future improvement: voice guessing, higher contrast mode, keyboard shortcuts. Currently, the game relies on mouse/touch. |

## Mitigation Summary

- **Chat moderation:** Add profanity filter and report button (planned).
- **Transparency:** Clear privacy notice and in-game rules.
- **Inclusive design:** Emoji avatars, colour‑blind friendly palette (using distinct hues).
- **No data retention:** Rooms and player data are deleted when the room empties or server restarts.