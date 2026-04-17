# Technical Debt Log – SketchGuess

## What is Technical Debt?
Areas where the code is messy, duplicated, or hard to maintain. These slow down future development.

## List of Technical Debts (5 items)

| ID | Description | Location | Impact | Estimated Fix Time |
|----|-------------|----------|--------|---------------------|
| TD-01 | **Duplicate canvas rendering code** – The same stroke rendering logic appears in `renderStroke()` and inside `doDraw()`. Could be extracted. | `index.html` (JavaScript) | Medium – makes changes error‑prone. | 30 min |
| TD-02 | **Global variables scattered** – Many global state variables (`myId`, `isDrawing`, `currentColor`, etc.) are defined at the top. Could be grouped into a single game state object. | `index.html` | Low – but increases risk of naming conflicts. | 1 hour |
| TD-03 | **No separation of concerns** – UI updates, socket handlers, and game logic are all mixed in the same script. Hard to test. | `index.html` | High – makes unit testing impossible. | 3 hours |
| TD-04 | **Hardcoded magic numbers** – Round duration (80), max players (10), brush sizes (3,6,12) appear multiple times. | `server.js` and `index.html` | Low – but makes tuning difficult. | 20 min |
| TD-05 | **No error handling for word API** – The word cache refill uses `fetch` but doesn’t retry on failure; fallback works but no alert. | `server.js` | Medium – could cause word starvation if API is down for long. | 1 hour |

## Selected Debt for This Sprint: **TD-01 – Duplicate canvas rendering code**

We will extract the stroke rendering into a single reusable function.