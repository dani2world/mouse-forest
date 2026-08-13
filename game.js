// ===== 마우스 대모험 - game.js =====

const MOLE_FACE_SVG = `
<svg viewBox="0 15 300 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="94" cy="48" r="26" fill="#e0a45c" stroke="#2b2b3d" stroke-width="7"/>
  <circle cx="206" cy="48" r="26" fill="#e0a45c" stroke="#2b2b3d" stroke-width="7"/>
  <ellipse cx="150" cy="122" rx="106" ry="86" fill="#e0a45c" stroke="#2b2b3d" stroke-width="9"/>
  <path d="M104 60 L150 104 L196 60" fill="none" stroke="#2b2b3d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <ellipse cx="122" cy="110" rx="7" ry="9" fill="#2b2b3d"/>
  <ellipse cx="178" cy="110" rx="7" ry="9" fill="#2b2b3d"/>
  <circle cx="100" cy="138" r="14" fill="#ff9eb0" opacity="0.9"/>
  <circle cx="200" cy="138" r="14" fill="#ff9eb0" opacity="0.9"/>
  <circle cx="150" cy="136" r="20" fill="#ff6f91" stroke="#2b2b3d" stroke-width="7"/>
  <path d="M120 160 Q135 182 150 162 Q165 182 180 160" fill="none" stroke="#2b2b3d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ACORN_SVG = `
<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 55 C24 40 30 34 50 34 C70 34 76 40 76 55 C76 78 66 100 50 100 C34 100 24 78 24 55 Z" fill="#e0a45c" stroke="#2b2b3d" stroke-width="6" stroke-linejoin="round"/>
  <path d="M50 14 C30 14 18 26 18 40 Q50 52 82 40 C82 26 70 14 50 14 Z" fill="#8a5a34" stroke="#2b2b3d" stroke-width="6" stroke-linejoin="round"/>
  <line x1="30" y1="21" x2="70" y2="21" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round"/>
  <line x1="25" y1="30" x2="75" y2="30" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round"/>
</svg>`;

const BASKET_SVG = `
<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 42 L118 42 L106 94 L34 94 Z" fill="#c9a06a" stroke="#2b2b3d" stroke-width="7" stroke-linejoin="round"/>
  <line x1="46" y1="48" x2="40" y2="88" stroke="#2b2b3d" stroke-width="4" stroke-linecap="round"/>
  <line x1="70" y1="48" x2="68" y2="90" stroke="#2b2b3d" stroke-width="4" stroke-linecap="round"/>
  <line x1="94" y1="48" x2="100" y2="88" stroke="#2b2b3d" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="70" cy="42" rx="48" ry="13" fill="#dba968" stroke="#2b2b3d" stroke-width="7"/>
</svg>`;

const GIFT_BOX_CLOSED_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="42" width="64" height="46" rx="6" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="6"/>
  <rect x="14" y="30" width="72" height="18" rx="6" fill="#ff6f91" stroke="#2b2b3d" stroke-width="6"/>
  <rect x="44" y="30" width="12" height="58" fill="#ffd93d" stroke="#2b2b3d" stroke-width="4"/>
  <path d="M50 30 C40 10 20 14 30 28 Z" fill="#ffd93d" stroke="#2b2b3d" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 30 C60 10 80 14 70 28 Z" fill="#ffd93d" stroke="#2b2b3d" stroke-width="4" stroke-linejoin="round"/>
</svg>`;

const GIFT_BOX_UNTIED_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="42" width="64" height="46" rx="6" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="6"/>
  <rect x="14" y="30" width="72" height="18" rx="6" fill="#ff6f91" stroke="#2b2b3d" stroke-width="6"/>
</svg>`;

const GIFT_BOX_OPEN_BASE_SVG = `
  <rect x="18" y="58" width="64" height="30" rx="6" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="6"/>
  <rect x="14" y="46" width="72" height="14" rx="6" fill="#ff6f91" stroke="#2b2b3d" stroke-width="6" transform="rotate(-16 50 60)"/>
`;

const TOY_BEAR_SVG = `
  <circle cx="33" cy="27" r="12.6" fill="#c9a06a" stroke="#2b2b3d" stroke-width="5"/>
  <circle cx="67" cy="27" r="12.6" fill="#c9a06a" stroke="#2b2b3d" stroke-width="5"/>
  <circle cx="50" cy="40" r="26" fill="#dba968" stroke="#2b2b3d" stroke-width="6"/>
  <ellipse cx="50" cy="46" rx="12" ry="9" fill="#f3e0c0" stroke="#2b2b3d" stroke-width="4"/>
  <circle cx="50" cy="42" r="3" fill="#2b2b3d"/>
  <circle cx="41" cy="34" r="3" fill="#2b2b3d"/>
  <circle cx="59" cy="34" r="3" fill="#2b2b3d"/>
  <path d="M50 63 L32 55 L32 71 Z" fill="#ffd93d" stroke="#2b2b3d" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 63 L68 55 L68 71 Z" fill="#ffd93d" stroke="#2b2b3d" stroke-width="4" stroke-linejoin="round"/>
`;

const TOY_FLOWER_SVG = `
  <rect x="47" y="44" width="6" height="22" fill="#7ab648" stroke="#2b2b3d" stroke-width="4"/>
  <path d="M50 54 Q38 54 34 44" fill="none" stroke="#7ab648" stroke-width="4" stroke-linecap="round"/>
  <circle cx="50" cy="17" r="9.5" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="4"/>
  <circle cx="63.3" cy="26.7" r="9.5" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="4"/>
  <circle cx="58.2" cy="42.3" r="9.5" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="4"/>
  <circle cx="41.8" cy="42.3" r="9.5" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="4"/>
  <circle cx="36.7" cy="26.7" r="9.5" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="4"/>
  <circle cx="50" cy="31" r="10" fill="#ffd93d" stroke="#2b2b3d" stroke-width="5"/>
`;

const TOY_ROBOT_SVG = `
  <line x1="50" y1="20" x2="50" y2="9" stroke="#2b2b3d" stroke-width="4" stroke-linecap="round"/>
  <circle cx="50" cy="7" r="4" fill="#ff8fa3" stroke="#2b2b3d" stroke-width="3"/>
  <rect x="30" y="20" width="40" height="34" rx="8" fill="#9fb8d9" stroke="#2b2b3d" stroke-width="5"/>
  <circle cx="41" cy="37" r="4" fill="#2b2b3d"/>
  <circle cx="59" cy="37" r="4" fill="#2b2b3d"/>
  <rect x="40" y="45" width="20" height="4" rx="2" fill="#2b2b3d"/>
  <rect x="35" y="54" width="30" height="10" rx="4" fill="#7d94b8" stroke="#2b2b3d" stroke-width="4"/>
`;

const TOY_CAR_SVG = `
  <path d="M32 34 L40 20 L64 20 L70 34 Z" fill="#4a90d9" stroke="#2b2b3d" stroke-width="5" stroke-linejoin="round"/>
  <rect x="42" y="24" width="20" height="10" fill="#eaf7ff" stroke="#2b2b3d" stroke-width="3"/>
  <rect x="20" y="34" width="60" height="18" rx="6" fill="#4a90d9" stroke="#2b2b3d" stroke-width="5"/>
  <circle cx="34" cy="54" r="8" fill="#2b2b3d"/>
  <circle cx="34" cy="54" r="3" fill="#fff"/>
  <circle cx="66" cy="54" r="8" fill="#2b2b3d"/>
  <circle cx="66" cy="54" r="3" fill="#fff"/>
`;

const TOY_DIAMOND_SVG = `
  <path d="M30 26 L70 26 L84 42 L50 74 L16 42 Z" fill="#8ad9ef" stroke="#2b2b3d" stroke-width="5" stroke-linejoin="round"/>
  <path d="M16 42 L84 42" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round"/>
  <path d="M30 26 L42 42" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round"/>
  <path d="M70 26 L58 42" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round"/>
  <path d="M50 42 L50 74" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round"/>
  <path d="M40 30 L45 35 L38 37 Z" fill="#ffffff" opacity="0.75"/>
`;

const TOY_SVGS = [TOY_BEAR_SVG, TOY_FLOWER_SVG, TOY_ROBOT_SVG, TOY_CAR_SVG, TOY_DIAMOND_SVG];

function getGiftBoxOpenSVG() {
  const toy = TOY_SVGS[Math.floor(Math.random() * TOY_SVGS.length)];
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${GIFT_BOX_OPEN_BASE_SVG}${toy}</svg>`;
}

const MAZE_ICON_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="84" height="84" rx="16" fill="#f5e6c8" stroke="#2b2b3d" stroke-width="7"/>
  <path d="M24 30 H50 V50 H76 V76" fill="none" stroke="#6fae4a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24 30 H50 V50 H76 V76" fill="none" stroke="#2b2b3d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="24" cy="30" r="6" fill="#4ade80" stroke="#2b2b3d" stroke-width="3"/>
</svg>`;

const BUNNY_CURSOR_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" viewBox="0 0 32 37">' +
  '<ellipse cx="12" cy="12" rx="4" ry="9" fill="#fff" stroke="#2b2b3d" stroke-width="2.5"/>' +
  '<ellipse cx="20" cy="12" rx="4" ry="9" fill="#fff" stroke="#2b2b3d" stroke-width="2.5"/>' +
  '<ellipse cx="12" cy="13" rx="1.6" ry="5.5" fill="#ffb3c1"/>' +
  '<ellipse cx="20" cy="13" rx="1.6" ry="5.5" fill="#ffb3c1"/>' +
  '<circle cx="16" cy="25" r="9.5" fill="#fff" stroke="#2b2b3d" stroke-width="2.5"/>' +
  '<circle cx="12.5" cy="23" r="1.6" fill="#2b2b3d"/>' +
  '<circle cx="19.5" cy="23" r="1.6" fill="#2b2b3d"/>' +
  '<circle cx="16" cy="27" r="1.6" fill="#ff9eb0"/>' +
  '</svg>';

const SPRING_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="58" rx="38" ry="26" fill="#8a6a4a" stroke="#2b2b3d" stroke-width="6"/>
  <ellipse cx="50" cy="55" rx="30" ry="20" fill="#5ec6e8" stroke="#2b2b3d" stroke-width="5"/>
  <ellipse cx="42" cy="49" rx="7" ry="4" fill="#ffffff" opacity="0.65"/>
</svg>`;

const MOTHER_RABBIT_SVG = `
<svg viewBox="0 0 100 108" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="36" cy="32" rx="12" ry="26" fill="#fdf6ec" stroke="#2b2b3d" stroke-width="6"/>
  <ellipse cx="64" cy="32" rx="12" ry="26" fill="#fdf6ec" stroke="#2b2b3d" stroke-width="6"/>
  <ellipse cx="36" cy="34" rx="5" ry="16" fill="#ffb3c1"/>
  <ellipse cx="64" cy="34" rx="5" ry="16" fill="#ffb3c1"/>
  <circle cx="50" cy="72" r="30" fill="#fdf6ec" stroke="#2b2b3d" stroke-width="6"/>
  <circle cx="40" cy="68" r="4.5" fill="#2b2b3d"/>
  <circle cx="60" cy="68" r="4.5" fill="#2b2b3d"/>
  <circle cx="50" cy="78" r="4.5" fill="#ff9eb0"/>
  <path d="M40 86 Q50 94 60 86" fill="none" stroke="#2b2b3d" stroke-width="4" stroke-linecap="round"/>
</svg>`;

const MUTE_KEY = 'mouseAdventure_muted';
const UNLOCK_KEY = 'mouseAdventure_unlockedStage';
const BEST_SCORE_KEY_1 = 'mouseAdventure_best_1';
const BEST_SCORE_KEY_2 = 'mouseAdventure_best_2';
const BEST_SCORE_KEY_3 = 'mouseAdventure_best_3';
const BEST_SCORE_KEY_4 = 'mouseAdventure_best_4';
const HOLE_COUNT = 9;
const GAME_DURATION = 30; // 초
const MIN_UP_TIME = 550; // ms, 두더지가 떠 있는 최소 시간
const MAX_UP_TIME = 1000; // ms, 두더지가 떠 있는 최대 시간
const SPAWN_INTERVAL = 700; // ms, 새 두더지 등장 주기
const DRAG_GAME_DURATION = 30; // 초

const screens = {
  map: document.getElementById('screen-map'),
  mole: document.getElementById('screen-mole'),
  drag: document.getElementById('screen-drag'),
  maze: document.getElementById('screen-maze'),
  box: document.getElementById('screen-box'),
  result: document.getElementById('screen-result'),
};

let currentStage = 1;

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.add('hidden'));
  screens[name].classList.remove('hidden');
}

function getBestScore(key) {
  return Number(localStorage.getItem(key) || 0);
}

function getUnlockedStage() {
  return Number(localStorage.getItem(UNLOCK_KEY) || 1);
}

function unlockStage(stageNum) {
  if (stageNum > getUnlockedStage()) {
    localStorage.setItem(UNLOCK_KEY, String(stageNum));
  }
}

function renderMap() {
  const unlocked = getUnlockedStage();

  const best1 = getBestScore(BEST_SCORE_KEY_1);
  document.getElementById('best-1').textContent = best1 > 0 ? `최고점수 : ${best1}점` : '최고점수 : -';

  const tile2 = document.querySelector('.stage-tile[data-stage="2"]');
  if (unlocked >= 2) {
    tile2.classList.remove('locked');
    tile2.disabled = false;
    document.getElementById('stage-icon-2').innerHTML = ACORN_SVG;
    const best2 = getBestScore(BEST_SCORE_KEY_2);
    document.getElementById('best-2').textContent = best2 > 0 ? `최고점수 : ${best2}점` : '최고점수 : -';
  }

  const tile3 = document.querySelector('.stage-tile[data-stage="3"]');
  if (unlocked >= 3) {
    tile3.classList.remove('locked');
    tile3.disabled = false;
    document.getElementById('stage-icon-3').innerHTML = MAZE_ICON_SVG;
    const best3 = getBestScore(BEST_SCORE_KEY_3);
    document.getElementById('best-3').textContent = best3 > 0 ? `최고점수 : ${best3}점` : '최고점수 : -';
  }

  const tile4 = document.querySelector('.stage-tile[data-stage="4"]');
  if (unlocked >= 4) {
    tile4.classList.remove('locked');
    tile4.disabled = false;
    document.getElementById('stage-icon-4').innerHTML = GIFT_BOX_CLOSED_SVG;
    const best4 = getBestScore(BEST_SCORE_KEY_4);
    document.getElementById('best-4').textContent = best4 > 0 ? `최고점수 : ${best4}점` : '최고점수 : -';
  }
}

// ===== 오디오 =====
const muteBtn = document.getElementById('mute-btn');
let audioUnlocked = false;

function applyMuteState(muted) {
  GameAudio.setMuted(muted);
  muteBtn.textContent = muted ? '🔇' : '🔊';
  localStorage.setItem(MUTE_KEY, muted ? '1' : '0');
}

applyMuteState(localStorage.getItem(MUTE_KEY) === '1');

function unlockAudioAndStartBgm() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  GameAudio.unlock();
  GameAudio.playBGM();
}

document.addEventListener('pointerdown', unlockAudioAndStartBgm, { once: true });

muteBtn.addEventListener('click', () => {
  unlockAudioAndStartBgm();
  applyMuteState(!GameAudio.isMuted());
});

// ===== 스테이지 맵 =====
document.getElementById('stage-grid').addEventListener('click', (e) => {
  const tile = e.target.closest('.stage-tile');
  if (!tile || tile.disabled) return;
  const stage = tile.dataset.stage;
  if (stage === '1') {
    currentStage = 1;
    openMoleGame();
  } else if (stage === '2') {
    currentStage = 2;
    openDragGame();
  } else if (stage === '3') {
    currentStage = 3;
    openMazeGame();
  } else if (stage === '4') {
    currentStage = 4;
    openBoxGame();
  }
});

// ===== 두더지 잡기 =====
const moleBoard = document.getElementById('mole-board');
const moleTimeEl = document.getElementById('mole-time');
const moleScoreEl = document.getElementById('mole-score');
const moleStartOverlay = document.getElementById('mole-start-overlay');
const moleStartBtn = document.getElementById('mole-start-btn');
const moleQuitBtn = document.getElementById('mole-quit-btn');

let holes = [];
let holeTimers = []; // 각 구멍의 "숨기" 타이머
let spawnTimer = null;
let countdownTimer = null;
let timeLeft = GAME_DURATION;
let score = 0;
let isPlaying = false;

function buildBoard() {
  moleBoard.innerHTML = '';
  holes = [];
  for (let i = 0; i < HOLE_COUNT; i++) {
    const hole = document.createElement('div');
    hole.className = 'mole-hole';
    hole.dataset.index = String(i);
    const mole = document.createElement('div');
    mole.className = 'mole';
    mole.innerHTML = MOLE_FACE_SVG;
    hole.appendChild(mole);
    hole.addEventListener('click', () => onHoleClick(i));
    moleBoard.appendChild(hole);
    holes.push(hole);
  }
  holeTimers = new Array(HOLE_COUNT).fill(null);
}

function openMoleGame() {
  buildBoard();
  moleStartOverlay.classList.remove('hidden');
  resetHud();
  showScreen('mole');
}

function resetHud() {
  timeLeft = GAME_DURATION;
  score = 0;
  moleTimeEl.textContent = String(timeLeft);
  moleScoreEl.textContent = String(score);
}

moleStartBtn.addEventListener('click', () => {
  moleStartOverlay.classList.add('hidden');
  startMoleGame();
});

moleQuitBtn.addEventListener('click', () => {
  stopMoleGame();
  showScreen('map');
});

function startMoleGame() {
  resetHud();
  isPlaying = true;
  unlockAudioAndStartBgm();
  GameAudio.playStart();

  spawnTimer = setInterval(spawnMole, SPAWN_INTERVAL);
  countdownTimer = setInterval(() => {
    timeLeft -= 1;
    moleTimeEl.textContent = String(timeLeft);
    if (timeLeft <= 0) {
      endMoleGame();
    }
  }, 1000);
}

function spawnMole() {
  if (!isPlaying) return;
  const downHoles = holes
    .map((h, i) => i)
    .filter((i) => !holes[i].classList.contains('up'));
  if (downHoles.length === 0) return;
  const idx = downHoles[Math.floor(Math.random() * downHoles.length)];
  const hole = holes[idx];
  hole.classList.remove('hit');
  hole.classList.add('up');

  const upTime = MIN_UP_TIME + Math.random() * (MAX_UP_TIME - MIN_UP_TIME);
  holeTimers[idx] = setTimeout(() => {
    hole.classList.remove('up');
    holeTimers[idx] = null;
  }, upTime);
}

function onHoleClick(idx) {
  if (!isPlaying) return;
  const hole = holes[idx];
  if (!hole.classList.contains('up') || hole.classList.contains('hit')) return;

  hole.classList.add('hit');
  score += 1;
  moleScoreEl.textContent = String(score);
  GameAudio.playHit();
  spawnHitEffect(hole);

  clearTimeout(holeTimers[idx]);
  holeTimers[idx] = setTimeout(() => {
    hole.classList.remove('up');
  }, 150);
}

function spawnHitEffect(hole) {
  const burst = document.createElement('div');
  burst.className = 'hit-burst';
  burst.textContent = '✨';
  hole.appendChild(burst);

  const pop = document.createElement('div');
  pop.className = 'score-pop';
  pop.textContent = '+1';
  hole.appendChild(pop);

  setTimeout(() => {
    burst.remove();
    pop.remove();
  }, 650);
}

function stopMoleGame() {
  isPlaying = false;
  clearInterval(spawnTimer);
  clearInterval(countdownTimer);
  holeTimers.forEach((t) => t && clearTimeout(t));
  holeTimers = new Array(HOLE_COUNT).fill(null);
}

function endMoleGame() {
  stopMoleGame();
  GameAudio.playGameOver();
  unlockStage(2);
  const best = getBestScore(BEST_SCORE_KEY_1);
  const isNewBest = score > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_1, String(score));
  }
  showResult(score, isNewBest ? score : best);
}

// ===== 도토리 모으기 =====
const dragField = document.getElementById('drag-field');
const basket = document.getElementById('basket');
const dragTimeEl = document.getElementById('drag-time');
const dragScoreEl = document.getElementById('drag-score');
const dragStartOverlay = document.getElementById('drag-start-overlay');
const dragStartBtn = document.getElementById('drag-start-btn');
const dragQuitBtn = document.getElementById('drag-quit-btn');
const basketFillBar = document.getElementById('basket-fill-bar');

const ACORN_SIZE = 58;
const LEAVES_HEIGHT = 60; // 나뭇잎 아래에서 도토리가 떨어지기 시작하는 위치
const FALL_SPEED = 40; // px/초, 도토리가 떨어지는 속도
const FILL_MAX_SCORE = 36; // 이 점수에 도달하면 바구니가 가득 참

let dragTimeLeft = DRAG_GAME_DURATION;
let dragScore = 0;
let isDragPlaying = false;
let dragSpawnTimer = null;
let dragCountdownTimer = null;
let currentAcorn = null;
let dragState = null;

document.getElementById('basket-svg').innerHTML = BASKET_SVG;

function updateBasketFill() {
  const percent = Math.min(dragScore / FILL_MAX_SCORE, 1) * 60;
  basketFillBar.style.height = `${percent}%`;
}

function openDragGame() {
  dragField.querySelectorAll('.acorn').forEach((el) => el.remove());
  currentAcorn = null;
  dragStartOverlay.classList.remove('hidden');
  resetDragHud();
  showScreen('drag');
}

function resetDragHud() {
  dragTimeLeft = DRAG_GAME_DURATION;
  dragScore = 0;
  updateBasketFill();
  dragTimeEl.textContent = String(dragTimeLeft);
  dragScoreEl.textContent = String(dragScore);
}

dragStartBtn.addEventListener('click', () => {
  dragStartOverlay.classList.add('hidden');
  startDragGame();
});

dragQuitBtn.addEventListener('click', () => {
  stopDragGame();
  showScreen('map');
});

function startDragGame() {
  resetDragHud();
  isDragPlaying = true;
  unlockAudioAndStartBgm();
  GameAudio.playStart();
  spawnAcorn();

  dragCountdownTimer = setInterval(() => {
    dragTimeLeft -= 1;
    dragTimeEl.textContent = String(dragTimeLeft);
    if (dragTimeLeft <= 0) {
      endDragGame();
    }
  }, 1000);
}

function spawnAcorn() {
  if (currentAcorn) {
    stopFalling(currentAcorn);
    currentAcorn.remove();
  }
  const acorn = document.createElement('div');
  acorn.className = 'acorn';
  acorn.innerHTML = ACORN_SVG;

  const fieldW = dragField.clientWidth;
  const maxX = Math.max(0, fieldW - ACORN_SIZE);
  const x = Math.random() * maxX;
  acorn.style.left = `${x}px`;
  acorn.style.top = `${LEAVES_HEIGHT}px`;

  acorn.addEventListener('pointerdown', onAcornPointerDown);
  dragField.appendChild(acorn);
  currentAcorn = acorn;
  startFalling(acorn);
}

function startFalling(acorn) {
  acorn.dataset.falling = '1';
  let lastTime = performance.now();

  function tick(now) {
    if (acorn.dataset.falling !== '1' || !isDragPlaying) return;
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    const maxTop = dragField.clientHeight - ACORN_SIZE;
    const nextTop = parseFloat(acorn.style.top) + FALL_SPEED * dt;

    if (nextTop >= maxTop) {
      acorn.dataset.falling = '0';
      acorn.remove();
      if (acorn === currentAcorn) spawnAcorn();
      return;
    }
    acorn.style.top = `${nextTop}px`;
    acorn._fallRaf = requestAnimationFrame(tick);
  }

  acorn._fallRaf = requestAnimationFrame(tick);
}

function stopFalling(acorn) {
  acorn.dataset.falling = '0';
  if (acorn._fallRaf) {
    cancelAnimationFrame(acorn._fallRaf);
    acorn._fallRaf = null;
  }
}

function onAcornPointerDown(e) {
  if (!isDragPlaying) return;
  const acorn = e.currentTarget;
  stopFalling(acorn);
  acorn.setPointerCapture(e.pointerId);
  const rect = acorn.getBoundingClientRect();
  dragState = {
    el: acorn,
    pointerId: e.pointerId,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
  };
  acorn.classList.add('dragging');
  acorn.addEventListener('pointermove', onAcornPointerMove);
  acorn.addEventListener('pointerup', onAcornPointerUp);
}

function onAcornPointerMove(e) {
  if (!dragState || e.pointerId !== dragState.pointerId) return;
  const fieldRect = dragField.getBoundingClientRect();
  let x = e.clientX - fieldRect.left - dragState.offsetX;
  let y = e.clientY - fieldRect.top - dragState.offsetY;
  x = Math.max(0, Math.min(x, dragField.clientWidth - dragState.el.offsetWidth));
  y = Math.max(0, Math.min(y, dragField.clientHeight - dragState.el.offsetHeight));
  dragState.el.style.left = `${x}px`;
  dragState.el.style.top = `${y}px`;
}

function onAcornPointerUp(e) {
  if (!dragState || e.pointerId !== dragState.pointerId) return;
  const acorn = dragState.el;
  acorn.classList.remove('dragging');
  acorn.removeEventListener('pointermove', onAcornPointerMove);
  acorn.removeEventListener('pointerup', onAcornPointerUp);

  const acornRect = acorn.getBoundingClientRect();
  const basketRect = basket.getBoundingClientRect();
  const cx = acornRect.left + acornRect.width / 2;
  const cy = acornRect.top + acornRect.height / 2;
  const overlaps = cx > basketRect.left && cx < basketRect.right && cy > basketRect.top && cy < basketRect.bottom;

  if (overlaps && isDragPlaying) {
    dragScore += 1;
    dragScoreEl.textContent = String(dragScore);
    updateBasketFill();
    GameAudio.playHit();
    spawnDropEffect();
    spawnAcorn();
  } else if (isDragPlaying) {
    startFalling(acorn);
  }
  dragState = null;
}

function spawnDropEffect() {
  const burst = document.createElement('div');
  burst.className = 'basket-burst';
  burst.textContent = '✨';
  dragField.appendChild(burst);
  setTimeout(() => burst.remove(), 500);
}

function stopDragGame() {
  isDragPlaying = false;
  clearInterval(dragCountdownTimer);
  if (dragState) {
    dragState.el.removeEventListener('pointermove', onAcornPointerMove);
    dragState.el.removeEventListener('pointerup', onAcornPointerUp);
    dragState = null;
  }
  if (currentAcorn) {
    stopFalling(currentAcorn);
  }
}

function endDragGame() {
  stopDragGame();
  GameAudio.playGameOver();
  unlockStage(3);
  const best = getBestScore(BEST_SCORE_KEY_2);
  const isNewBest = dragScore > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_2, String(dragScore));
  }
  showResult(dragScore, isNewBest ? dragScore : best);
}

// ===== 엄마 찾기 =====
const mazeField = document.getElementById('maze-field');
const mazeTimeEl = document.getElementById('maze-time');
const mazeScoreEl = document.getElementById('maze-score');
const mazeStartOverlay = document.getElementById('maze-start-overlay');
const mazeStartBtn = document.getElementById('maze-start-btn');
const mazeQuitBtn = document.getElementById('maze-quit-btn');

const MAZE_ROWS = 6;
const MAZE_COLS = 9;
const MAZE_DURATION = 30; // 초

// 1 = 통로, 0 = 벽. 레벨이 올라갈수록 길이 더 길고 꼬여있음
const MAZE_LEVELS = [
  {
    start: { row: 0, col: 0 },
    goal: { row: 0, col: 8 },
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    start: { row: 0, col: 0 },
    goal: { row: 1, col: 8 },
    grid: [
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
  {
    start: { row: 0, col: 0 },
    goal: { row: 5, col: 8 },
    grid: [
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1],
    ],
  },
  {
    start: { row: 0, col: 0 },
    goal: { row: 5, col: 8 },
    grid: [
      [1, 0, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1],
    ],
  },
  {
    start: { row: 0, col: 0 },
    goal: { row: 5, col: 8 },
    grid: [
      [1, 0, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 1],
    ],
  },
];

let mazeCells = [];
let mazeLevel = 0;
let mazeTimeLeft = MAZE_DURATION;
let mazeScore = 0;
let isMazePlaying = false;
let mazeActive = false; // 시작점에서 출발해 진행 중인지 여부
let mazeCountdownTimer = null;

const bunnyCursor = `url('data:image/svg+xml,${encodeURIComponent(BUNNY_CURSOR_SVG)}') 16 27, auto`;
mazeField.style.cursor = bunnyCursor;

function buildMaze() {
  const level = MAZE_LEVELS[mazeLevel];
  mazeField.innerHTML = '';
  mazeCells = [];
  for (let r = 0; r < MAZE_ROWS; r++) {
    const rowCells = [];
    for (let c = 0; c < MAZE_COLS; c++) {
      const cell = document.createElement('div');
      cell.className = `maze-cell ${level.grid[r][c] === 1 ? 'path' : 'wall'}`;
      if (r === level.start.row && c === level.start.col) {
        const marker = document.createElement('div');
        marker.className = 'maze-marker';
        marker.innerHTML = SPRING_SVG;
        cell.appendChild(marker);
      } else if (r === level.goal.row && c === level.goal.col) {
        const marker = document.createElement('div');
        marker.className = 'maze-marker';
        marker.innerHTML = MOTHER_RABBIT_SVG;
        cell.appendChild(marker);
      }
      mazeField.appendChild(cell);
      rowCells.push(cell);
    }
    mazeCells.push(rowCells);
  }
}

function openMazeGame() {
  resetMazeHud();
  buildMaze();
  mazeStartOverlay.classList.remove('hidden');
  showScreen('maze');
}

function resetMazeHud() {
  mazeTimeLeft = MAZE_DURATION;
  mazeScore = 0;
  mazeLevel = 0;
  mazeActive = false;
  mazeTimeEl.textContent = String(mazeTimeLeft);
  mazeScoreEl.textContent = String(mazeScore);
}

mazeStartBtn.addEventListener('click', () => {
  mazeStartOverlay.classList.add('hidden');
  startMazeGame();
});

mazeQuitBtn.addEventListener('click', () => {
  stopMazeGame();
  showScreen('map');
});

function startMazeGame() {
  resetMazeHud();
  isMazePlaying = true;
  unlockAudioAndStartBgm();
  GameAudio.playStart();

  mazeCountdownTimer = setInterval(() => {
    mazeTimeLeft -= 1;
    mazeTimeEl.textContent = String(mazeTimeLeft);
    if (mazeTimeLeft <= 0) {
      endMazeGame();
    }
  }, 1000);
}

mazeField.addEventListener('pointermove', (e) => {
  if (!isMazePlaying) return;
  const level = MAZE_LEVELS[mazeLevel];
  const rect = mazeField.getBoundingClientRect();
  const col = Math.floor(((e.clientX - rect.left) / rect.width) * MAZE_COLS);
  const row = Math.floor(((e.clientY - rect.top) / rect.height) * MAZE_ROWS);

  if (row < 0 || row >= MAZE_ROWS || col < 0 || col >= MAZE_COLS) {
    if (mazeActive) failMaze();
    return;
  }

  const isStart = row === level.start.row && col === level.start.col;
  const isGoal = row === level.goal.row && col === level.goal.col;
  const isPath = level.grid[row][col] === 1;

  if (!mazeActive) {
    if (isStart) {
      mazeActive = true;
      mazeCells[row][col].classList.add('visited');
    }
    return;
  }

  if (isGoal) {
    mazeScore += mazeLevel + 1; // 레벨이 높을수록 더 많은 점수 (1레벨=1점, 5레벨=5점)
    mazeScoreEl.textContent = String(mazeScore);
    GameAudio.playHit();
    spawnMazeGoalEffect();
    mazeActive = false;
    mazeLevel = (mazeLevel + 1) % MAZE_LEVELS.length;
    buildMaze();
    return;
  }

  if (!isPath) {
    failMaze();
    return;
  }

  mazeCells[row][col].classList.add('visited');
});

function failMaze() {
  mazeActive = false;
  GameAudio.playMiss();
  mazeField.classList.add('fail');
  clearMazeTrail();
  setTimeout(() => mazeField.classList.remove('fail'), 400);
}

function clearMazeTrail() {
  mazeCells.forEach((row) => row.forEach((cell) => cell.classList.remove('visited')));
}

function spawnMazeGoalEffect() {
  const level = MAZE_LEVELS[mazeLevel];
  const goalCell = mazeCells[level.goal.row][level.goal.col];
  const burst = document.createElement('div');
  burst.className = 'hit-burst';
  burst.textContent = '✨';
  goalCell.appendChild(burst);
  setTimeout(() => burst.remove(), 450);
}

function stopMazeGame() {
  isMazePlaying = false;
  mazeActive = false;
  clearInterval(mazeCountdownTimer);
}

function endMazeGame() {
  stopMazeGame();
  GameAudio.playGameOver();
  unlockStage(4);
  const best = getBestScore(BEST_SCORE_KEY_3);
  const isNewBest = mazeScore > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_3, String(mazeScore));
  }
  showResult(mazeScore, isNewBest ? mazeScore : best);
}

// ===== 선물 열어보기 =====
const boxField = document.getElementById('box-field');
const boxTimeEl = document.getElementById('box-time');
const boxScoreEl = document.getElementById('box-score');
const boxStartOverlay = document.getElementById('box-start-overlay');
const boxStartBtn = document.getElementById('box-start-btn');
const boxQuitBtn = document.getElementById('box-quit-btn');

const BOX_COUNT = 9;
const BOX_DURATION = 30; // 초
const BOX_UNTIE_TIMEOUT = 500; // ms, 리본을 푼 뒤 뚜껑을 열어야 하는 제한시간

let boxSlots = [];
let boxInners = [];
let boxTargetIndex = -1;
let boxTimeLeft = BOX_DURATION;
let boxScore = 0;
let isBoxPlaying = false;
let boxCountdownTimer = null;
let boxClickState = null; // { index, timer } - 리본을 푼 뒤 뚜껑 열기를 기다리는 상태

function buildBoxField() {
  boxField.innerHTML = '';
  boxSlots = [];
  boxInners = [];
  boxClickState = null;
  for (let i = 0; i < BOX_COUNT; i++) {
    const slot = document.createElement('div');
    slot.className = 'box-slot';
    const box = document.createElement('div');
    box.className = 'gift-box';
    box.innerHTML = GIFT_BOX_CLOSED_SVG;
    slot.appendChild(box);
    slot.addEventListener('click', () => onBoxClick(i));
    boxField.appendChild(slot);
    boxSlots.push(slot);
    boxInners.push(box);
  }
}

function openBoxGame() {
  buildBoxField();
  boxStartOverlay.classList.remove('hidden');
  resetBoxHud();
  showScreen('box');
}

function resetBoxHud() {
  boxTimeLeft = BOX_DURATION;
  boxScore = 0;
  boxTargetIndex = -1;
  boxTimeEl.textContent = String(boxTimeLeft);
  boxScoreEl.textContent = String(boxScore);
}

boxStartBtn.addEventListener('click', () => {
  boxStartOverlay.classList.add('hidden');
  startBoxGame();
});

boxQuitBtn.addEventListener('click', () => {
  stopBoxGame();
  showScreen('map');
});

function startBoxGame() {
  resetBoxHud();
  isBoxPlaying = true;
  unlockAudioAndStartBgm();
  GameAudio.playStart();
  pickNewTarget();

  boxCountdownTimer = setInterval(() => {
    boxTimeLeft -= 1;
    boxTimeEl.textContent = String(boxTimeLeft);
    if (boxTimeLeft <= 0) {
      endBoxGame();
    }
  }, 1000);
}

function pickNewTarget() {
  if (boxClickState) {
    clearTimeout(boxClickState.timer);
    boxInners[boxClickState.index].innerHTML = GIFT_BOX_CLOSED_SVG;
    boxClickState = null;
  }
  boxSlots.forEach((slot) => slot.classList.remove('target', 'opened'));
  let idx;
  do {
    idx = Math.floor(Math.random() * BOX_COUNT);
  } while (idx === boxTargetIndex && BOX_COUNT > 1);
  boxTargetIndex = idx;
  boxSlots[idx].classList.add('target');
}

function onBoxClick(i) {
  if (!isBoxPlaying || i !== boxTargetIndex) return;

  if (!boxClickState || boxClickState.index !== i) {
    // 1단계: 리본을 풀어요
    if (boxClickState) clearTimeout(boxClickState.timer);
    GameAudio.playClick();
    boxInners[i].innerHTML = GIFT_BOX_UNTIED_SVG;
    const timer = setTimeout(() => {
      boxInners[i].innerHTML = GIFT_BOX_CLOSED_SVG;
      boxClickState = null;
    }, BOX_UNTIE_TIMEOUT);
    boxClickState = { index: i, timer };
    return;
  }

  // 2단계(제한시간 내 재클릭): 뚜껑을 열어요
  clearTimeout(boxClickState.timer);
  boxClickState = null;
  boxInners[i].innerHTML = getGiftBoxOpenSVG();
  boxScore += 1;
  boxScoreEl.textContent = String(boxScore);
  GameAudio.playHit();
  const slot = boxSlots[i];
  spawnBoxEffect(slot);
  pickNewTarget(); // 다음 타겟을 먼저 고른 뒤(다른 칸의 target/opened 클래스 정리), 이 칸에만 열림 애니메이션 적용
  slot.classList.add('opened');
  setTimeout(() => {
    if (boxTargetIndex !== i) boxInners[i].innerHTML = GIFT_BOX_CLOSED_SVG;
    slot.classList.remove('opened');
  }, 550);
}

function spawnBoxEffect(slot) {
  const sparklePositions = [
    [50, 20], [20, 50], [80, 50], [30, 80], [70, 80],
  ];
  sparklePositions.forEach(([left, top], idx) => {
    const spark = document.createElement('div');
    spark.className = 'box-sparkle';
    spark.textContent = '✨';
    spark.style.left = `${left}%`;
    spark.style.top = `${top}%`;
    spark.style.animationDelay = `${idx * 50}ms`;
    slot.appendChild(spark);
    setTimeout(() => spark.remove(), 750);
  });

  const pop = document.createElement('div');
  pop.className = 'score-pop';
  pop.textContent = '+1';
  slot.appendChild(pop);
  setTimeout(() => pop.remove(), 650);
}

function stopBoxGame() {
  isBoxPlaying = false;
  clearInterval(boxCountdownTimer);
}

function endBoxGame() {
  stopBoxGame();
  GameAudio.playGameOver();
  const best = getBestScore(BEST_SCORE_KEY_4);
  const isNewBest = boxScore > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_4, String(boxScore));
  }
  showResult(boxScore, isNewBest ? boxScore : best);
}

// ===== 결과 화면 =====
function showResult(finalScore, bestScore) {
  document.getElementById('result-score').textContent = `${finalScore}점`;
  document.getElementById('result-best').textContent = `최고점수 : ${bestScore}점`;
  showScreen('result');
}

document.getElementById('retry-btn').addEventListener('click', () => {
  if (currentStage === 1) {
    openMoleGame();
    moleStartOverlay.classList.add('hidden');
    startMoleGame();
  } else if (currentStage === 2) {
    openDragGame();
    dragStartOverlay.classList.add('hidden');
    startDragGame();
  } else if (currentStage === 3) {
    openMazeGame();
    mazeStartOverlay.classList.add('hidden');
    startMazeGame();
  } else if (currentStage === 4) {
    openBoxGame();
    boxStartOverlay.classList.add('hidden');
    startBoxGame();
  }
});

document.getElementById('back-map-btn').addEventListener('click', () => {
  renderMap();
  showScreen('map');
});

// ===== 초기화 =====
document.getElementById('stage-icon-1').innerHTML = MOLE_FACE_SVG;
renderMap();
showScreen('map');
