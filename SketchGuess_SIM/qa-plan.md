# Quality Assurance Plan – SketchGuess

## Test Levels

| Level | Description | Scope |
|-------|-------------|-------|
| **Unit** | Test individual functions (scoring, word masking, Levenshtein distance, room code generation). | Backend logic, frontend helpers. |
| **Integration** | Test interactions: Socket events (room creation, guess → score update), canvas drawing sync. | Real‑time communication, state sync. |
| **System** | End‑to‑end gameplay: create room → join → draw → guess → round end → game over. | Full user journey, multi‑player simulation. |

## Entry / Exit Criteria

### Unit Testing
- **Entry:** Function implementation complete, Jest installed.
- **Exit:** All unit tests pass, coverage ≥80% on core logic.

### Integration Testing
- **Entry:** Socket.io server running, test client connected.
- **Exit:** All integration tests pass, no critical sync failures.

### System Testing
- **Entry:** Full application deployed to staging.
- **Exit:** Critical user journeys verified, no S1 or S2 bugs.

## Severity Levels

| Severity | Definition | Example |
|----------|------------|---------|
| **S1 – Critical** | Game cannot be played, crash, data loss. | Room creation fails, canvas not loading. |
| **S2 – High** | Major feature broken, workaround difficult. | Scores not updating, round timer stuck. |
| **S3 – Medium** | Non‑critical feature broken, workaround exists. | Avatar selector not persisting, chat lag. |
| **S4 – Low** | Cosmetic issue, minor UI glitch. | Typo in label, misaligned button. |

## Test Tools
- **Unit/Integration:** Jest + Supertest (for HTTP endpoints) + Socket.io-client (for WebSocket tests).
- **E2E:** Playwright (optional).
- **Coverage:** Jest `--coverage`.

## Test Execution
- Unit tests run on every PR (GitHub Actions – to be configured).
- Integration tests run daily or before release.
- Manual regression testing for each sprint.