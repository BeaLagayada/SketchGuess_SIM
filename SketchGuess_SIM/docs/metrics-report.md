# Metrics Report – SketchGuess

**Period:** April 20–24, 2026 (5 days)

## Data Collection Method
- Manual logs from Render dashboard and server console.
- Sample of 20 game sessions during team testing.

## KPI Results

| KPI | Current Value | Target | Interpretation | Action Plan |
|-----|---------------|--------|----------------|--------------|
| Deployment Frequency | 1.4 per week | ≥2 per week | Below target; we deployed only once this week (feature add). | Increase commit velocity; break features into smaller PRs. |
| Lead Time for Change | 3 min 20 sec | <5 min | ✅ On target. Render builds fast. | Maintain; consider adding build caching. |
| Error Rate | 3.8% | <2% | Slightly high. Main errors: "Room not found" (invalid codes), "Guess already made". | Add better user feedback for invalid room codes; prevent duplicate guess submissions. |
| Round Completion Rate | 88% | >90% | Close to target. Disconnects during rounds cause early termination. | Implement reconnection logic to rejoin active rounds. |
| User Retention (Session length) | 8.2 minutes | >10 minutes | Below target. Players leave after 1-2 rounds. | Add more engaging features (sound effects, animations, score streaks). |

## Observations
- Most errors occur when players mistype room codes or try to guess twice.
- Peak usage: 8–10 PM (team testing hours).
- No server downtime during the period.

## Recommended Improvements
1. **Reduce error rate:** Validate room code format on frontend before sending.
2. **Increase retention:** Add a “waiting for players” animation and a ready-up system.
3. **Deployment frequency:** Automate smoke test to run faster, encouraging more frequent commits.