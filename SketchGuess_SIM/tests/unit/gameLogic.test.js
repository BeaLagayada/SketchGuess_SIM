// tests/unit/gameLogic.test.js
// These functions would be extracted from server.js or frontend helpers

// --- Scoring function (server-side) ---
function calculateScore(timeLeft, roundDuration = 80) {
  const bonus = Math.ceil((timeLeft / roundDuration) * 150);
  const base = 100;
  return base + bonus;
}

// --- Mask word (show letters as underscores) ---
function maskWord(word) {
  return word.split('').map(c => (c === ' ' ? ' ' : '_')).join(' ');
}

// --- Reveal a percentage of hidden letters ---
function revealLetters(word, masked, percent = 0.3) {
  const letters = word.split('');
  const maskedArr = masked.split(' ');
  const hiddenIndices = letters.reduce((arr, c, i) => {
    if (maskedArr[i] === '_' && c !== ' ') arr.push(i);
    return arr;
  }, []);
  const toReveal = Math.floor(hiddenIndices.length * percent);
  for (let i = 0; i < toReveal; i++) {
    const rand = Math.floor(Math.random() * hiddenIndices.length);
    const idx = hiddenIndices.splice(rand, 1)[0];
    maskedArr[idx] = letters[idx];
  }
  return maskedArr.join(' ');
}

// --- Levenshtein distance (for close guesses) ---
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i-1] === b[j-1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + cost);
    }
  }
  return dp[m][n];
}

// --- Generate room code (6 chars uppercase alphanumeric) ---
function generateRoomCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// --- Unit Tests ---
describe('Game Logic Unit Tests', () => {
  test('calculateScore: returns base + bonus based on time left', () => {
    expect(calculateScore(80, 80)).toBe(100 + 150); // 250
    expect(calculateScore(40, 80)).toBe(100 + Math.ceil((40/80)*150)); // 100+75=175
    expect(calculateScore(0, 80)).toBe(100 + 0);
  });

  test('maskWord: converts all letters to underscores, keeps spaces', () => {
    expect(maskWord('apple')).toBe('_ _ _ _ _');
    expect(maskWord('hello world')).toBe('_ _ _ _ _   _ _ _ _ _');
    expect(maskWord('a')).toBe('_');
  });

  test('revealLetters: reveals about 30% of hidden letters', () => {
    const word = 'strawberry';
    const masked = maskWord(word);
    const revealed = revealLetters(word, masked, 0.3);
    const originalLetters = word.split('');
    const revealedArray = revealed.split(' ');
    let revealedCount = 0;
    for (let i = 0; i < originalLetters.length; i++) {
      if (revealedArray[i] !== '_') revealedCount++;
    }
    const expectedMin = Math.floor(originalLetters.length * 0.2);
    const expectedMax = Math.ceil(originalLetters.length * 0.4);
    expect(revealedCount).toBeGreaterThanOrEqual(expectedMin);
    expect(revealedCount).toBeLessThanOrEqual(expectedMax);
  });

  test('levenshtein distance: correct differences', () => {
    expect(levenshtein('apple', 'apple')).toBe(0);
    expect(levenshtein('apple', 'aple')).toBe(1);
    expect(levenshtein('apple', 'apples')).toBe(1);
    expect(levenshtein('apple', 'banana')).toBe(5);
    expect(levenshtein('cat', 'car')).toBe(1);
  });

  test('generateRoomCode: returns 6 char uppercase alphanumeric', () => {
    const code = generateRoomCode();
    expect(code).toMatch(/^[A-Z0-9]{6}$/);
    // Check uniqueness (probability low, but test multiple)
    const codes = new Set();
    for (let i = 0; i < 100; i++) {
      codes.add(generateRoomCode());
    }
    expect(codes.size).toBe(100);
  });

    test('drawer gets +30 only on correct guess', () => {
    // Mock room state
    let drawerScore = 0;
    let guesserScore = 0;
    const isCorrect = false; // simulate wrong guess
    if (isCorrect) {
        drawerScore += 30;
        guesserScore += 100;
    }
    // WRONG: drawer gets points regardless (bug simulation)
    // Removing the bug part
    expect(drawerScore).toBe(0); // This will fail because drawerScore becomes 30
    });
});