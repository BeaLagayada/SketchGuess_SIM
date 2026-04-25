# Security Checklist – SketchGuess

## Data Validation
- [x] Player name: 2-16 alphanumeric + underscore, trimmed, no HTML tags.
- [x] Room code: 6 uppercase alphanumeric, validated on server.
- [x] Chat messages: HTML-escaped on frontend (`escHtml`), also sanitized on server before broadcast.
- [x] Draw stroke data: coordinates bounded to canvas size (implicit validation via `getPos`).

## Authentication & Authorization
- [x] Host token created on room creation, required for host actions (start game, new game).
- [x] Token stored server-side, never exposed to other clients.
- [x] No guest access – explicit join with name required.

## Secrets Management
- [x] Environment variables used for port, secrets, API URLs.
- [x] `.env` ignored by Git, not committed.
- [x] No hardcoded passwords or keys in source.

## Logging & Monitoring
- [ ] Basic logging of failed auth attempts (planned).
- [x] Console logs for room creation/joining (for debugging).

## Least Privilege
- [x] Host-only actions guarded by token.
- [x] Non-drawing players cannot send draw events (server checks `room.currentDrawer === socket.id`).
- [x] Players cannot guess their own word (server prevents drawer from guessing).

## Dependency Security
- [x] `npm audit` run regularly (screenshot in repo).
- [x] Dependencies updated to latest secure versions.

## Security Risks Accepted
- In-memory storage: data lost on restart, no persistent user data to leak.
- Free tier of Render: no DDoS protection, but low risk for student project.