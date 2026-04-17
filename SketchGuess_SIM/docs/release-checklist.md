# Release Checklist – SketchGuess

## Before Deployment
- [ ] All unit tests pass (`npm test`).
- [ ] Integration tests pass (manual or automated).
- [ ] No S1 or S2 bugs open in defect log.
- [ ] CI pipeline (GitHub Actions) is green.
- [ ] Code is merged into `main` branch.
- [ ] Version tag is created (e.g., `v0.5-scm`).
- [ ] Release notes are written (`docs/release-notes.md`).
- [ ] Rollback plan is documented and understood by the team.

## During Deployment
- [ ] Deploy to staging environment first.
- [ ] Run smoke tests on staging.
- [ ] Promote to production (or deploy directly to production with blue‑green).

## After Deployment
- [ ] Verify live URL is accessible.
- [ ] Test critical user journey (create room, draw, guess).
- [ ] Monitor logs for errors (Render logs).
- [ ] Notify team on Discord/Slack.

## Rollback Triggers
- [ ] Any S1 (critical) bug discovered post‑deployment.
- [ ] WebSocket connections drop >10% of users.
- [ ] Deployed version fails smoke tests.