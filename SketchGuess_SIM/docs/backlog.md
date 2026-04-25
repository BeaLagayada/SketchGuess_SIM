# Product Backlog – SketchGuess

## User Stories (10+)

1. **As a** new player, **I want** to create a new game room with a unique code **so that** I can invite my friends to play with me.  
   *Priority:* High | *Story Points:* 2  
   *Acceptance Criteria:*  
   - Player can click “Create New Room” and receive a 6‑character room code.  
   - Room code is displayed clearly in the waiting room.  
   - Other players can join using that code.

2. **As a** player, **I want** to join an existing room using a room code **so that** I can play with friends who already started a room.  
   *Priority:* High | *Story Points:* 2  
   *Acceptance Criteria:*  
   - Player can enter a room code and click “Join Room”.  
   - If room exists and has fewer than 10 players, they join successfully.  
   - An error message appears if room is full or does not exist.

3. **As a** player, **I want** to choose a character avatar (emoji) before entering the lobby **so that** I can personalise my appearance in the game.  
   *Priority:* Medium | *Story Points:* 1  
   *Acceptance Criteria:*  
   - In the lobby, a grid of at least 8 different emoji avatars is shown.  
   - Selected avatar is saved to localStorage and persists across page reloads.  
   - Avatar is displayed next to the player’s name in the waiting room and leaderboard.

4. **As a** player, **I want** to see the current room code displayed inside the game screen **so that** I can easily share it with others even after the game has started.  
   *Priority:* Medium | *Story Points:* 1  
   *Acceptance Criteria:*  
   - Room code appears in the top bar during the game.  
   - Code is readable and can be copied by players.

5. **As a** player, **I want** a floating indicator that shows who is currently drawing **so that** I always know whose turn it is without looking at the leaderboard.  
   *Priority:* High | *Story Points:* 2  
   *Acceptance Criteria:*  
   - A non‑intrusive badge appears on the canvas area showing the drawer’s name and avatar.  
   - Badge disappears when the round ends or the drawer changes.  
   - Badge is visible to all players except the drawer themselves.

6. **As a** player, **I want** the leaderboard to highlight the top three players by score **so that** I can quickly see who is leading.  
   *Priority:* Medium | *Story Points:* 1  
   *Acceptance Criteria:*  
   - Leaderboard rows for 1st, 2nd, and 3rd place have distinct background colors or borders.  
   - Scores update in real time when someone guesses correctly.

7. **As a** player, **I want** an “Exit” button in the game screen **so that** I can leave the current room and return to the lobby to join or create another game.  
   *Priority:* High | *Story Points:* 2  
   *Acceptance Criteria:*  
   - Exit button is always visible in the top bar.  
   - Clicking it disconnects the socket and reloads the lobby screen.  
   - The room’s player list updates for remaining players.

8. **As a** player, **I want** to see my own score and rank update immediately after a correct guess **so that** I get instant feedback.  
   *Priority:* High | *Story Points:* 3  
   *Acceptance Criteria:*  
   - Score changes appear on the leaderboard within 0.5 seconds of a correct guess.  
   - A celebratory sound or confetti effect (optional) triggers on a correct guess.

9. **As a** player, **I want** the game to automatically end after 3 rounds per player **so that** each game has a clear winner and duration.  
   *Priority:* Medium | *Story Points:* 5  
   *Acceptance Criteria:*  
   - Number of rounds = number of players × 3.  
   - After the final round, a game over overlay shows final scores.  
   - Players can start a new game without recreating the room.

10. **As a** player, **I want** to see a hint (revealed letters) when half the round time has passed **so that** I have a better chance to guess if the drawing is unclear.  
    *Priority:* Low | *Story Points:* 3  
    *Acceptance Criteria:*  
    - At 50% time remaining, the masked word reveals approximately 30% of its letters.  
    - Hints are shown to all non‑drawing players.

11. **As a** player, **I want** to be able to erase parts of my drawing **so that** I can correct mistakes without clearing the whole canvas.  
    *Priority:* Medium | *Story Points:* 2  
    *Acceptance Criteria:*  
    - Toolbar includes an eraser button that toggles eraser mode.  
    - Eraser uses a larger brush size and draws in white.  
    - Erased strokes are sent to other players in real time.

12. **As a** player, **I want** to receive a “close guess” notification when my guess is off by only 2 letters **so that** I know I’m near the correct word.  
    *Priority:* Low | *Story Points:* 2  
    *Acceptance Criteria:*  
    - Chat shows “(close!)” badge next to guesses that are within Levenshtein distance ≤2.  
    - Notification does not award points but encourages players.

13. **As a** player, **I want** to skip my drawing turn **so that** I can pass the turn to the next player without waiting for the timer to run out.  
    *Priority:* Medium | *Story Points:* 3  
    *Acceptance Criteria:*  
    - A “Skip” button appears only for the current drawer during their turn.  
    - Clicking skip ends the current round immediately and moves to the next player’s turn.  
    - No points are awarded to anyone for the skipped round.  
    - The skipped drawer receives a small penalty (–10 points) to discourage abuse.  
    - Skip can only be used once per player per game.
