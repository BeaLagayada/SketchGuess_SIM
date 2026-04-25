# Key Performance Indicators (KPIs) – SketchGuess

| KPI | Definition | Measurement Method | Target |
|-----|------------|--------------------|--------|
| **1. Deployment Frequency** | How often we successfully deploy to production (per week). | Count of merges to `main` that trigger Render deployment. | ≥ 2 per week |
| **2. Lead Time for Change** | Time from code commit to deployment live. | Time between `git push` and Render deployment completion. | < 5 minutes |
| **3. Error Rate** | Percentage of failed socket events (e.g., invalid room join, guess errors). | Log errors / total events per hour. | < 2% |
| **4. Round Completion Rate** | Percentage of started rounds that finish naturally (not interrupted by player disconnect). | (Completed rounds) / (Started rounds) over a day. | > 90% |
| **5. User Retention (Session length)** | Average time a player stays in a game room before leaving. | Average session duration from join to disconnect. | > 10 minutes |