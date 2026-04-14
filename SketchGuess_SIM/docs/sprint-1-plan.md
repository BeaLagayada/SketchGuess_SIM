# Sprint 1 Plan – SketchGuess

**Sprint Duration:** 2 weeks  
**Goal:** Establish core multiplayer functionality, room management, and basic drawing & guessing loop. Deliver a playable minimum viable product (MVP) that allows friends to play a full round.

## Selected Stories for Sprint 1 (4 stories)

| Story ID | Description | Story Points | Owner | Acceptance Criteria summary |
|----------|-------------|--------------|-------|------------------------------|
| #1 | Create new room with unique code | 2 | DevOps Lead | Room code generated and displayed. |
| #2 | Join existing room using code | 2 | Backend Dev | Players can join, max 10 per room. |
| #8 | Real‑time score updates on correct guess | 3 | QA Lead | Scores update instantly, confetti on correct guess. |
| #5 | Floating indicator for current drawer | 2 | Frontend Dev | Non‑drawers see a badge with drawer name & avatar. |
| #13 | Skip drawing turn (skip button) | 3 | Frontend/UI Lead (Roger) | Skip button appears for drawer, ends round, applies penalty. |

**Total Story Points:** 12

## Additional Tasks (non‑story)
- Set up Node.js + Express + Socket.io server (already exists, but ensure documentation).  
- Basic HTML/CSS styling for lobby and game screens.  
- Deploy to a test environment (e.g., Heroku or Render).  
- Write initial test plan for room creation and joining.

## Sprint Goal Statement
By the end of Sprint 1, we will have a fully functional multiplayer drawing‑and‑guessing game where two or more players can create/join a room, take turns drawing, guess words, see scores update, and know who is drawing – all in real time.

## Definition of Done for Sprint 1
- All acceptance criteria for selected stories are met.  
- Code is merged into `main` branch.  
- Basic manual testing passes (room creation, joining, drawing sync, scoring).  
- No critical bugs that block gameplay.  
- Team retrospective held.