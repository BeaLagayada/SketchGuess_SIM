# SCM Notes – Merge Conflict Resolution

**Date:** 2025-04-15  
**Branches involved:** `bugfix/timer-format` and `feature/timer-color`  
**File with conflict:** `index.html` (timer display section)

**Cause:** Both branches modified the same `<div id="timer-text">` element – one changed the text format, the other added conditional styling.

**Resolution:** Kept the text format change and also added the red color logic. No functionality lost.

**Commands used:**