# DevOps Practices – SketchGuess

## Automation

| Area | Tool | What It Does |
|------|------|---------------|
| **CI (Continuous Integration)** | GitHub Actions | Runs smoke tests on every push to `main`. |
| **CD (Continuous Deployment)** | Render auto‑deploy | Automatically deploys when `main` branch changes. |
| **Smoke Tests** | `curl` in GitHub Actions | Checks homepage (200 OK) and WebSocket handshake. |
| **Dependency Management** | `npm audit` + renovate (planned) | Scans for vulnerabilities weekly. |

## Collaboration

- **GitHub Flow** – Feature branches → PR → review → merge to `main`.
- **CODEOWNERS** – Defines who reviews backend (`server.js`) vs frontend (`public/`).
- **Issue Templates** – Bug reports and feature requests standardised.
- **Pull Request Template** – Ensures screenshots, testing evidence, and linked issues.

## Monitoring

| Metric | Tool | How We Monitor |
|--------|------|----------------|
| **Deployment status** | Render dashboard | Visual indicator + logs. |
| **Health / uptime** | `/health` endpoint | Returns JSON with uptime, room count, player count. |
| **HTTP requests** | Morgan + custom logs | Every request logged to console. |
| **Socket errors** | Socket error listener | Logs to console. |
| **Periodic stats** | `setInterval` (1 hour) | Logs active rooms and total players. |

## Feedback Loop

1. **User reports bug** → GitHub Issue.
2. **Developer fixes** → Branch → PR.
3. **CI runs smoke tests** → If pass, merge.
4. **Auto‑deploy to Render** → New version live.
5. **User verifies fix** → Close issue.

## DevOps Improvement Added (Pipeline Optimization)

**Before:** GitHub Actions smoke test had no caching; each run installed dependencies (if any).  
**After:** Added caching for `node_modules` using `actions/cache`. Reduces average test time from ~45s to ~15s.

### Implementation (in `.github/workflows/smoke-test.yml`):
```yaml
- name: Cache Node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-