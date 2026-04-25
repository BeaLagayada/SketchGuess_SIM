# Defect Log – SketchGuess

| Bug ID | Description | Severity | Status | PR Link |
|--------|-------------|----------|--------|---------|
| BUG-001 | Scoring miscalculation: drawer receives +30 points even when they skip or guess incorrectly. Should only receive +30 when a guesser is correct. | S2 (High) | Closed | [#1](https://github.com/your-repo/pull/1) |

## Bug Details

**Steps to Reproduce:**
1. Start a game as host.
2. As drawer, do not draw (or draw nonsense).
3. Wait for a guess (any guess, even wrong).
4. Observe drawer’s score increases by 30.

**Expected:** Drawer receives +30 only when a guesser correctly guesses the word.

**Actual:** Drawer receives +30 on any guess (correct or incorrect).

**Root Cause:** In `server.js`, the `socket.on('guess')` handler adds 30 points to the drawer inside the `isCorrect` block, but there is a misplaced bracket causing it to run for every guess.

**Fix:** Moved `room.players[room.currentDrawer].score += 30;` inside the `if (isCorrect)` block.

**PR Link:** [https://github.com/BeaLagayada/SketchGuess_SIM/pulls](https://github.com/BeaLagayada/SketchGuess_SIM/pulls)