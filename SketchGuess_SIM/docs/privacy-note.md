# Privacy Notice – SketchGuess

**Effective date:** April 2026

SketchGuess is a real-time multiplayer drawing and guessing game. This notice explains what data we collect, why, and your rights.

## What Data We Collect

| Data Type | Examples | Collected? | Retention |
|-----------|----------|------------|-----------|
| **Nickname** | Player-chosen name (e.g., "Artist123") | ✅ Yes | Until the room ends or server restarts |
| **Avatar** | Emoji selected from the picker | ✅ Yes | Same as nickname |
| **IP address** | Assigned by your ISP | ✅ Temporarily (by Socket.IO) | Not logged; only used for connection |
| **Drawing strokes** | Coordinates, color, brush size | ✅ During active round | Deleted when round ends |
| **Chat messages** | Guesses and system messages | ✅ During active round | Deleted when room is deleted |

## Why We Collect This Data

- **Nickname and avatar:** To identify players in the room and on the leaderboard.
- **IP address:** Required for WebSocket connections (network protocol). Not stored or shared.
- **Drawing strokes:** To synchronise the canvas among players in real time.
- **Chat messages:** To enable guessing and social interaction.

## How Long We Keep Data

All data is stored **in memory** on the game server.  
- When a room becomes empty (all players leave), the room and its data are deleted immediately.  
- When the server restarts (e.g., after a Render deployment), all data is lost permanently.  
- No data is written to a database or long-term storage.

## Your Rights

Because SketchGuess does not create user accounts or store data persistently, you have the right to:

- **Access:** Ask what data is currently held about you (your nickname and avatar in the room).
- **Rectification:** Change your name/avatar before joining a room.
- **Deletion:** Leave the room – your data is removed instantly.
- **Withdraw consent:** Simply close your browser tab; no further action needed.

## Data Sharing

We do **not** share your data with any third parties. The only data visible to other players is your nickname, avatar, and guesses (which are broadcast to the room).

## Children’s Privacy

SketchGuess is intended for general audiences. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided data, please contact us and we will delete the room.

## Changes to This Notice

If we change how data is handled, we will update this document and change the effective date.

## Contact

For privacy concerns, open an issue on our GitHub repository or email: sketchguess-privacy@example.com (forwarded to the team).