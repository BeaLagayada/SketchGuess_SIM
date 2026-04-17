# Support Plan – SketchGuess

## Issue Reporting Process

### For Players (end users)
- **GitHub Issues:** [Link to your repo issues page]
- **Email:** sketchguess-support@example.com (forwards to team)

### For Team Members
- Use **GitHub Issues** with labels: `bug`, `severity-s1`, `severity-s2`, etc.
- For critical issues (S1), also ping the team on Discord/Slack.

## Severity & Response Times

| Severity | Definition | Response Time | Resolution Time |
|----------|------------|---------------|------------------|
| **S1 – Critical** | Game completely broken (cannot create/join rooms, canvas not loading). | < 1 hour | < 4 hours |
| **S2 – High** | Major feature broken (scores not updating, timer stuck). | < 4 hours | < 24 hours |
| **S3 – Medium** | Non‑critical feature broken (avatar selector not saving, chat lag). | < 24 hours | < 3 days |
| **S4 – Low** | Cosmetic issue, typo, minor UI glitch. | < 1 week | Next sprint |

## Escalation Path
1. **First responder:** QA Lead (Bea Lagayada) triages the issue.
2. **If S1/S2:** PM (Thomas Martinez) assigns a developer.
3. **If cannot fix within SLA:** DevOps (Mariel Laplap) performs rollback.

## Common Issues & Solutions

| Issue | Likely Cause | Workaround / Fix |
|-------|--------------|------------------|
| Canvas not drawing | Browser touch events blocked | Refresh page; use mouse. |
| Room code not found | Typo or room expired (server restart) | Create a new room. |
| Timer stuck at 0 | WebSocket disconnect | Refresh the page. |
| No sound on correct guess | Browser autoplay policy | Click anywhere on the page first. |
| Slow drawing on mobile | High stroke frequency | Use a stylus or reduce brush size. |

## Support Hours
- **Weekdays:** 9 AM – 9 PM (UTC+8)
- **Weekends:** Limited – only S1 issues via chat.