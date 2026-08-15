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

function buildChestnutSpikes(cx, cy, count, color) {
  let spikes = '';
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    spikes += `<polygon points="50,6 43,26 57,26" fill="${color}" stroke="#2b2b3d" stroke-width="3.5" stroke-linejoin="round" transform="rotate(${angle} ${cx} ${cy})"/>`;
  }
  return spikes;
}

const CHESTNUT_SVG = `
<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
  ${buildChestnutSpikes(50, 58, 14, '#8a9b4a')}
  <circle cx="50" cy="58" r="30" fill="#8a9b4a" stroke="#2b2b3d" stroke-width="6"/>
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
const TOY_NAMES = ['곰인형', '꽃', '로봇', '자동차', '다이아몬드'];

function buildToySVG(toy) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${GIFT_BOX_OPEN_BASE_SVG}${toy}</svg>`;
}

function getRandomToy() {
  const typeIndex = Math.floor(Math.random() * TOY_SVGS.length);
  return { typeIndex, svg: buildToySVG(TOY_SVGS[typeIndex]) };
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
  '<circle cx="10" cy="26.5" r="1.7" fill="#ffb3c1"/>' +
  '<circle cx="22" cy="26.5" r="1.7" fill="#ffb3c1"/>' +
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
  <path d="M50 30 L39 22 L39 38 Z" fill="#ff6f91" stroke="#2b2b3d" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 30 L61 22 L61 38 Z" fill="#ff6f91" stroke="#2b2b3d" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="40" cy="68" r="4.5" fill="#2b2b3d"/>
  <circle cx="60" cy="68" r="4.5" fill="#2b2b3d"/>
  <circle cx="50" cy="78" r="4.5" fill="#ff9eb0"/>
  <path d="M40 86 Q50 94 60 86" fill="none" stroke="#2b2b3d" stroke-width="4" stroke-linecap="round"/>
</svg>`;

const MUTE_KEY = 'mouseAdventure_muted';
const SESSION_KEY = 'mouseAdventure_session';
const UNLOCK_KEY = 'mouseAdventure_unlockedStage';
const BEST_SCORE_KEY_1 = 'mouseAdventure_best_1';
const BEST_SCORE_KEY_2 = 'mouseAdventure_best_2';
const BEST_SCORE_KEY_3 = 'mouseAdventure_best_3';
const BEST_SCORE_KEY_4 = 'mouseAdventure_best_4';
const MOLE_UNLOCK_SCORE = 10; // 이 점수 이상이어야 도토리 모으기가 열림
const DRAG_UNLOCK_SCORE = 10; // 이 점수 이상이어야 엄마토끼 찾기가 열림
const MAZE_UNLOCK_SCORE = 6; // 이 점수 이상이어야 선물 열어보기가 열림
const HOLE_COUNT = 9;
const GAME_DURATION = 30; // 초
const MIN_UP_TIME = 550; // ms, 두더지가 떠 있는 최소 시간
const MAX_UP_TIME = 1000; // ms, 두더지가 떠 있는 최대 시간
const SPAWN_INTERVAL_START = 1400; // ms, 게임 시작 시 두더지 등장 주기(느림)
const SPAWN_INTERVAL_END = 400; // ms, 게임 막판 두더지 등장 주기(빠름)
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

  const totalScore = getBestScore(BEST_SCORE_KEY_1) + getBestScore(BEST_SCORE_KEY_2)
    + getBestScore(BEST_SCORE_KEY_3) + getBestScore(BEST_SCORE_KEY_4);
  document.getElementById('total-score').textContent = `총점 : ${totalScore}점`;
}

// ===== 로그인 / 순위표 =====
let loggedIn = false;
let currentNickname = null;
let currentPin = null;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (obj && obj.nickname && obj.pin) return obj;
  } catch (e) {}
  return null;
}

function saveSession(nickname, pin) {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify({ nickname, pin })); } catch (e) {}
}

function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
}

function loginErrorMessage(code) {
  switch (code) {
    case 'wrong_pin': return 'PIN이 올바르지 않아요.';
    case 'missing_fields': return '닉네임과 PIN을 모두 입력해주세요.';
    case 'nickname_too_long': return '닉네임은 10자 이내로 입력해주세요.';
    case 'backend_not_configured': return '아직 서버 연결 전이에요. 잠시만 기다려주세요.';
    default: return '로그인에 실패했어요. 잠시 후 다시 시도해주세요.';
  }
}

function showLoginError(msg) {
  const el = document.getElementById('login-error');
  el.textContent = msg;
  el.classList.remove('hidden');
}

function hideLoginError() {
  document.getElementById('login-error').classList.add('hidden');
}

function openLoginScreen() {
  hideLoginError();
  document.getElementById('nickname-input').value = '';
  document.getElementById('pin-input').value = '';
  document.getElementById('screen-login').classList.remove('hidden');
}

function closeLoginScreen() {
  document.getElementById('screen-login').classList.add('hidden');
}

function updateLoginStatusDisplay() {
  const statusEl = document.getElementById('login-status');
  const loginLinkBtn = document.getElementById('login-link-btn');
  const logoutBtn = document.getElementById('logout-btn');
  if (loggedIn) {
    statusEl.textContent = `👤 ${currentNickname}님으로 플레이 중`;
    statusEl.classList.remove('hidden');
    loginLinkBtn.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
  } else {
    statusEl.textContent = '';
    statusEl.classList.add('hidden');
    loginLinkBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
  }
}

function resolveLogin(nickname, pin) {
  loggedIn = true;
  currentNickname = nickname;
  currentPin = pin;
  updateLoginStatusDisplay();
  closeLoginScreen();
  submitTotalScoreIfLoggedIn();
}

function submitTotalScoreIfLoggedIn() {
  if (!loggedIn) return;
  const total = getBestScore(BEST_SCORE_KEY_1) + getBestScore(BEST_SCORE_KEY_2)
    + getBestScore(BEST_SCORE_KEY_3) + getBestScore(BEST_SCORE_KEY_4);
  window.Backend.submitScore(currentNickname, currentPin, total);
}

function loadNotice() {
  const board = document.getElementById('notice-board');
  window.Backend.getNotice().then((res) => {
    if (res.ok && res.notice) {
      board.textContent = `📢 ${res.notice}`;
      board.classList.remove('hidden');
    } else {
      board.classList.add('hidden');
    }
  });
}

function openLeaderboard() {
  const listEl = document.getElementById('leaderboard-list');
  listEl.innerHTML = '<li class="leaderboard-empty">불러오는 중...</li>';
  document.getElementById('screen-leaderboard').classList.remove('hidden');
  window.Backend.getLeaderboard().then((res) => {
    if (!res.ok) {
      listEl.innerHTML = res.error === 'backend_not_configured'
        ? '<li class="leaderboard-empty">순위표 서버 연결 전이에요.</li>'
        : '<li class="leaderboard-empty">순위표를 불러올 수 없어요.</li>';
      return;
    }
    if (!res.leaderboard || res.leaderboard.length === 0) {
      listEl.innerHTML = '<li class="leaderboard-empty">아직 기록이 없어요.</li>';
      return;
    }
    const medals = ['🥇', '🥈', '🥉'];
    listEl.innerHTML = res.leaderboard.map((row, i) => {
      const rankLabel = medals[i] || `${i + 1}.`;
      return `<li><span><span class="leaderboard-rank">${rankLabel}</span>${escapeHtml(row.nickname)}</span><span>${row.score}점</span></li>`;
    }).join('');
  });
}

function attemptSessionRestore() {
  const session = loadSession();
  if (!session) return;
  window.Backend.login(session.nickname, session.pin).then((res) => {
    if (res.ok) {
      resolveLogin(session.nickname, session.pin);
    } else {
      clearSession();
    }
  });
}

document.getElementById('login-link-btn').addEventListener('click', () => {
  openLoginScreen();
});

document.getElementById('login-close-btn').addEventListener('click', () => {
  closeLoginScreen();
});

document.getElementById('logout-btn').addEventListener('click', () => {
  clearSession();
  loggedIn = false;
  currentNickname = null;
  currentPin = null;
  updateLoginStatusDisplay();
});

document.getElementById('login-btn').addEventListener('click', () => {
  const nickname = document.getElementById('nickname-input').value.trim();
  const pin = document.getElementById('pin-input').value.trim();
  hideLoginError();
  if (!nickname || !pin) { showLoginError('닉네임과 PIN을 모두 입력해주세요.'); return; }
  window.Backend.login(nickname, pin).then((res) => {
    if (res.ok) {
      saveSession(nickname, pin);
      resolveLogin(nickname, pin);
    } else {
      showLoginError(loginErrorMessage(res.error));
    }
  });
});

document.getElementById('leaderboard-btn').addEventListener('click', () => {
  openLeaderboard();
});

document.getElementById('leaderboard-close-btn').addEventListener('click', () => {
  document.getElementById('screen-leaderboard').classList.add('hidden');
});

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

const URGENT_TIME_THRESHOLD = 5; // 초, 이 이하로 남으면 카운트다운 강조

function applyUrgentTimer(timeEl, timeLeft) {
  const hudItem = timeEl.closest('.hud-item');
  if (!hudItem) return;
  if (timeLeft <= URGENT_TIME_THRESHOLD && timeLeft > 0) {
    hudItem.classList.add('urgent');
    GameAudio.playTick();
  } else {
    hudItem.classList.remove('urgent');
  }
}

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
  applyUrgentTimer(moleTimeEl, timeLeft);
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

  scheduleNextMole();
  countdownTimer = setInterval(() => {
    timeLeft -= 1;
    moleTimeEl.textContent = String(timeLeft);
    applyUrgentTimer(moleTimeEl, timeLeft);
    if (timeLeft <= 0) {
      endMoleGame();
    }
  }, 1000);
}

function scheduleNextMole() {
  if (!isPlaying) return;
  spawnMole();
  const progress = Math.min((GAME_DURATION - timeLeft) / GAME_DURATION, 1);
  const interval = SPAWN_INTERVAL_START + (SPAWN_INTERVAL_END - SPAWN_INTERVAL_START) * progress;
  spawnTimer = setTimeout(scheduleNextMole, interval);
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
  clearTimeout(spawnTimer);
  clearInterval(countdownTimer);
  holeTimers.forEach((t) => t && clearTimeout(t));
  holeTimers = new Array(HOLE_COUNT).fill(null);
}

function endMoleGame() {
  stopMoleGame();
  GameAudio.playGameOver();
  const best = getBestScore(BEST_SCORE_KEY_1);
  const isNewBest = score > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_1, String(score));
    submitTotalScoreIfLoggedIn();
  }

  const alreadyUnlocked = getUnlockedStage() >= 2;
  let unlockHint = null;
  if (score >= MOLE_UNLOCK_SCORE) {
    if (!alreadyUnlocked) unlockHint = `🎉 ${MOLE_UNLOCK_SCORE}점 이상 달성! 다음 스테이지가 열렸어요`;
    unlockStage(2);
  } else if (!alreadyUnlocked) {
    unlockHint = `다음 스테이지를 열려면 ${MOLE_UNLOCK_SCORE}점 이상 필요해요 (이번 점수 ${score}점)`;
  }
  showResult(score, isNewBest ? score : best, unlockHint);
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
const FALL_SPEED_START = 55; // px/초, 게임 시작 시 낙하 속도(느림)
const FALL_SPEED_END = 150; // px/초, 게임 막판 낙하 속도(빠름)
const SPAWN_GAP_START = 1300; // ms, 게임 시작 시 등장 간격(뜸함)
const SPAWN_GAP_END = 550; // ms, 게임 막판 등장 간격(자주, 여러 개가 동시에 떨어짐)
const MAX_FALLING_ITEMS = 4; // 동시에 떨어질 수 있는 최대 개수
const CHESTNUT_CHANCE = 0.22; // 밤송이가 섞여 나올 확률
const FILL_MAX_SCORE = 36; // 이 점수에 도달하면 바구니가 가득 참

let dragTimeLeft = DRAG_GAME_DURATION;
let dragScore = 0;
let isDragPlaying = false;
let dragSpawnTimer = null;
let dragCountdownTimer = null;
let fallingItems = []; // 현재 떨어지고 있는 도토리/밤송이 엘리먼트 목록
let dragState = null;

document.getElementById('basket-svg').innerHTML = BASKET_SVG;

function updateBasketFill() {
  const percent = Math.min(dragScore / FILL_MAX_SCORE, 1) * 60;
  basketFillBar.style.height = `${percent}%`;
}

function openDragGame() {
  dragField.querySelectorAll('.acorn').forEach((el) => el.remove());
  fallingItems = [];
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
  applyUrgentTimer(dragTimeEl, dragTimeLeft);
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
  scheduleNextAcornSpawn();

  dragCountdownTimer = setInterval(() => {
    dragTimeLeft -= 1;
    dragTimeEl.textContent = String(dragTimeLeft);
    applyUrgentTimer(dragTimeEl, dragTimeLeft);
    if (dragTimeLeft <= 0) {
      endDragGame();
    }
  }, 1000);
}

function scheduleNextAcornSpawn() {
  if (!isDragPlaying) return;
  if (fallingItems.length < MAX_FALLING_ITEMS) {
    spawnFallingItem();
  }
  const progress = Math.min((DRAG_GAME_DURATION - dragTimeLeft) / DRAG_GAME_DURATION, 1);
  const gap = SPAWN_GAP_START + (SPAWN_GAP_END - SPAWN_GAP_START) * progress;
  dragSpawnTimer = setTimeout(scheduleNextAcornSpawn, gap);
}

function spawnFallingItem() {
  const isChestnut = Math.random() < CHESTNUT_CHANCE;
  const item = document.createElement('div');
  item.className = 'acorn';
  item.dataset.itemType = isChestnut ? 'chestnut' : 'acorn';
  item.innerHTML = isChestnut ? CHESTNUT_SVG : ACORN_SVG;

  const fieldW = dragField.clientWidth;
  const maxX = Math.max(0, fieldW - ACORN_SIZE);
  const x = Math.random() * maxX;
  item.style.left = `${x}px`;
  item.style.top = `${LEAVES_HEIGHT}px`;

  item.addEventListener('pointerdown', onAcornPointerDown);
  dragField.appendChild(item);
  fallingItems.push(item);
  startFalling(item);
}

function startFalling(item) {
  item.dataset.falling = '1';
  let lastTime = performance.now();

  function tick(now) {
    if (item.dataset.falling !== '1' || !isDragPlaying) return;
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    const maxTop = dragField.clientHeight - ACORN_SIZE;
    const progress = Math.min((DRAG_GAME_DURATION - dragTimeLeft) / DRAG_GAME_DURATION, 1);
    const fallSpeed = FALL_SPEED_START + (FALL_SPEED_END - FALL_SPEED_START) * progress;
    const nextTop = parseFloat(item.style.top) + fallSpeed * dt;

    if (nextTop >= maxTop) {
      removeFallingItem(item);
      return;
    }
    item.style.top = `${nextTop}px`;
    item._fallRaf = requestAnimationFrame(tick);
  }

  item._fallRaf = requestAnimationFrame(tick);
}

function stopFalling(item) {
  item.dataset.falling = '0';
  if (item._fallRaf) {
    cancelAnimationFrame(item._fallRaf);
    item._fallRaf = null;
  }
}

function removeFallingItem(item) {
  stopFalling(item);
  item.remove();
  fallingItems = fallingItems.filter((el) => el !== item);
}

function onAcornPointerDown(e) {
  if (!isDragPlaying) return;
  const item = e.currentTarget;
  stopFalling(item);
  item.setPointerCapture(e.pointerId);
  const rect = item.getBoundingClientRect();
  dragState = {
    el: item,
    pointerId: e.pointerId,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
  };
  item.classList.add('dragging');
  item.addEventListener('pointermove', onAcornPointerMove);
  item.addEventListener('pointerup', onAcornPointerUp);
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
  const item = dragState.el;
  item.classList.remove('dragging');
  item.removeEventListener('pointermove', onAcornPointerMove);
  item.removeEventListener('pointerup', onAcornPointerUp);

  const itemRect = item.getBoundingClientRect();
  const basketRect = basket.getBoundingClientRect();
  const cx = itemRect.left + itemRect.width / 2;
  const cy = itemRect.top + itemRect.height / 2;
  const overlaps = cx > basketRect.left && cx < basketRect.right && cy > basketRect.top && cy < basketRect.bottom;

  if (overlaps && isDragPlaying) {
    const isChestnut = item.dataset.itemType === 'chestnut';
    if (isChestnut) {
      dragScore = Math.max(0, dragScore - 1);
      GameAudio.playMiss();
      spawnDropEffect(true);
    } else {
      dragScore += 1;
      GameAudio.playHit();
      spawnDropEffect(false);
    }
    dragScoreEl.textContent = String(dragScore);
    updateBasketFill();
    removeFallingItem(item);
  } else if (isDragPlaying) {
    startFalling(item);
  }
  dragState = null;
}

function spawnDropEffect(isPenalty) {
  const burst = document.createElement('div');
  burst.className = 'basket-burst';
  burst.textContent = isPenalty ? '💢' : '✨';
  dragField.appendChild(burst);
  setTimeout(() => burst.remove(), 500);

  const pop = document.createElement('div');
  pop.className = isPenalty ? 'score-pop penalty' : 'score-pop';
  pop.textContent = isPenalty ? '-1' : '+1';
  pop.style.left = '50%';
  pop.style.top = '72%';
  dragField.appendChild(pop);
  setTimeout(() => pop.remove(), 650);
}

function stopDragGame() {
  isDragPlaying = false;
  clearInterval(dragCountdownTimer);
  clearTimeout(dragSpawnTimer);
  if (dragState) {
    dragState.el.removeEventListener('pointermove', onAcornPointerMove);
    dragState.el.removeEventListener('pointerup', onAcornPointerUp);
    dragState = null;
  }
  fallingItems.forEach((item) => stopFalling(item));
}

function endDragGame() {
  stopDragGame();
  GameAudio.playGameOver();
  const best = getBestScore(BEST_SCORE_KEY_2);
  const isNewBest = dragScore > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_2, String(dragScore));
    submitTotalScoreIfLoggedIn();
  }

  const alreadyUnlocked = getUnlockedStage() >= 3;
  let unlockHint = null;
  if (dragScore >= DRAG_UNLOCK_SCORE) {
    if (!alreadyUnlocked) unlockHint = `🎉 ${DRAG_UNLOCK_SCORE}점 이상 달성! 다음 스테이지가 열렸어요`;
    unlockStage(3);
  } else if (!alreadyUnlocked) {
    unlockHint = `다음 스테이지를 열려면 ${DRAG_UNLOCK_SCORE}점 이상 필요해요 (이번 점수 ${dragScore}점)`;
  }
  showResult(dragScore, isNewBest ? dragScore : best, unlockHint);
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
const MAZE_DURATION = 50; // 초

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
  {
    start: { row: 0, col: 0 },
    goal: { row: 0, col: 8 },
    grid: [
      [1, 1, 1, 0, 1, 1, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 1, 1, 0, 1, 1, 1],
    ],
  },
  {
    start: { row: 0, col: 0 },
    goal: { row: 0, col: 8 },
    grid: [
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 0, 0],
    ],
  },
];

let mazeCells = [];
let mazeTouchMarker = null;
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
        cell.classList.add('start-point');
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
  mazeTouchMarker = document.createElement('div');
  mazeTouchMarker.className = 'maze-touch-marker';
  mazeTouchMarker.innerHTML = BUNNY_CURSOR_SVG;
  mazeField.appendChild(mazeTouchMarker);
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
  applyUrgentTimer(mazeTimeEl, mazeTimeLeft);
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
    applyUrgentTimer(mazeTimeEl, mazeTimeLeft);
    if (mazeTimeLeft <= 0) {
      endMazeGame();
    }
  }, 1000);
}

function handleMazePointerEvent(e) {
  if (!isMazePlaying) return;

  if (e.pointerType === 'touch') {
    updateMazeTouchMarker(e.clientX, e.clientY);
  }

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
    const clearedLevel = mazeLevel + 1;
    const points = mazeLevel + 1; // 레벨이 높을수록 더 많은 점수 (1레벨=1점, 7레벨=7점)
    mazeScore += points;
    mazeScoreEl.textContent = String(mazeScore);
    GameAudio.playHit();
    spawnMazeGoalEffect();
    spawnMazeSuccessEffect(clearedLevel, points);
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
}

mazeField.addEventListener('pointerdown', handleMazePointerEvent);
mazeField.addEventListener('pointermove', handleMazePointerEvent);
mazeField.addEventListener('pointerup', hideMazeTouchMarker);
mazeField.addEventListener('pointercancel', hideMazeTouchMarker);
mazeField.addEventListener('pointerleave', hideMazeTouchMarker);

function updateMazeTouchMarker(clientX, clientY) {
  const rect = mazeField.getBoundingClientRect();
  mazeTouchMarker.style.left = `${clientX - rect.left}px`;
  mazeTouchMarker.style.top = `${clientY - rect.top}px`;
  mazeTouchMarker.style.display = 'block';
}

function hideMazeTouchMarker() {
  mazeTouchMarker.style.display = 'none';
}

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

function spawnMazeSuccessEffect(clearedLevel, points) {
  mazeField.classList.add('success');
  setTimeout(() => mazeField.classList.remove('success'), 500);

  const banner = document.createElement('div');
  banner.className = 'maze-clear-banner';
  banner.textContent = `🎉 레벨 ${clearedLevel} 클리어! +${points}점`;
  mazeField.parentElement.insertBefore(banner, mazeField.nextSibling);
  setTimeout(() => banner.remove(), 1300);
}

function stopMazeGame() {
  isMazePlaying = false;
  mazeActive = false;
  clearInterval(mazeCountdownTimer);
}

function endMazeGame() {
  stopMazeGame();
  GameAudio.playGameOver();
  const best = getBestScore(BEST_SCORE_KEY_3);
  const isNewBest = mazeScore > best;
  if (isNewBest) {
    localStorage.setItem(BEST_SCORE_KEY_3, String(mazeScore));
    submitTotalScoreIfLoggedIn();
  }

  const alreadyUnlocked = getUnlockedStage() >= 4;
  let unlockHint = null;
  if (mazeScore >= MAZE_UNLOCK_SCORE) {
    if (!alreadyUnlocked) unlockHint = `🎉 ${MAZE_UNLOCK_SCORE}점 이상 달성! 다음 스테이지가 열렸어요`;
    unlockStage(4);
  } else if (!alreadyUnlocked) {
    unlockHint = `다음 스테이지를 열려면 ${MAZE_UNLOCK_SCORE}점 이상 필요해요 (이번 점수 ${mazeScore}점)`;
  }
  showResult(mazeScore, isNewBest ? mazeScore : best, unlockHint);
}

// ===== 선물 열어보기 =====
const boxField = document.getElementById('box-field');
const boxTimeEl = document.getElementById('box-time');
const boxScoreEl = document.getElementById('box-score');
const boxStartOverlay = document.getElementById('box-start-overlay');
const boxStartBtn = document.getElementById('box-start-btn');
const boxQuitBtn = document.getElementById('box-quit-btn');

const collectionTrack = document.getElementById('collection-track');

const BOX_COUNT = 9;
const BOX_DURATION = 30; // 초
const BOX_UNTIE_TIMEOUT = 500; // ms, 리본을 푼 뒤 뚜껑을 열어야 하는 제한시간
const COLLECTION_BONUS = 10; // 5종류를 모두 모았을 때 추가 점수

let boxSlots = [];
let boxInners = [];
let boxTimeLeft = BOX_DURATION;
let boxScore = 0;
let isBoxPlaying = false;
let boxCountdownTimer = null;
let boxClickState = null; // { index, timer } - 리본을 푼 뒤 뚜껑 열기를 기다리는 상태
let collectedTypes = []; // 현재 모으고 있는 세트에서 발견한 장난감 종류(중복 없이)
let collectionCompletions = 0; // 5종류를 모두 모아 도감을 완성한 횟수
let collectionIcons = [];
let collectionCounterEl = null;

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

function buildCollectionTrack() {
  collectionTrack.innerHTML = '';
  collectionIcons = TOY_SVGS.map((toy) => {
    const icon = document.createElement('div');
    icon.className = 'collection-icon';
    icon.innerHTML = buildToySVG(toy);
    collectionTrack.appendChild(icon);
    return icon;
  });
  collectionCounterEl = document.createElement('div');
  collectionCounterEl.className = 'collection-counter';
  collectionTrack.appendChild(collectionCounterEl);
}

function openBoxGame() {
  buildBoxField();
  buildCollectionTrack();
  boxStartOverlay.classList.remove('hidden');
  resetBoxHud();
  showScreen('box');
}

function resetBoxHud() {
  boxTimeLeft = BOX_DURATION;
  boxScore = 0;
  collectedTypes = [];
  collectionCompletions = 0;
  boxTimeEl.textContent = String(boxTimeLeft);
  boxScoreEl.textContent = String(boxScore);
  applyUrgentTimer(boxTimeEl, boxTimeLeft);
  updateCollectionUI();
}

function updateCollectionUI() {
  collectionIcons.forEach((icon, idx) => {
    icon.classList.toggle('collected', collectedTypes.includes(idx));
  });
  if (collectionCounterEl) {
    collectionCounterEl.textContent = `완성 ${collectionCompletions}회`;
  }
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

  boxCountdownTimer = setInterval(() => {
    boxTimeLeft -= 1;
    boxTimeEl.textContent = String(boxTimeLeft);
    applyUrgentTimer(boxTimeEl, boxTimeLeft);
    if (boxTimeLeft <= 0) {
      endBoxGame();
    }
  }, 1000);
}

function onBoxClick(i) {
  if (!isBoxPlaying) return;

  if (!boxClickState || boxClickState.index !== i) {
    // 1단계: 리본을 풀어요 (어떤 상자든 자유롭게 시작 가능)
    if (boxClickState) {
      clearTimeout(boxClickState.timer);
      boxInners[boxClickState.index].innerHTML = GIFT_BOX_CLOSED_SVG;
    }
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

  const { typeIndex, svg } = getRandomToy();
  boxInners[i].innerHTML = svg;
  boxScore += 1;
  GameAudio.playHit();

  if (!collectedTypes.includes(typeIndex)) {
    collectedTypes.push(typeIndex);
  }
  updateCollectionUI();

  const slot = boxSlots[i];
  spawnBoxEffect(slot);
  slot.classList.add('opened');
  setTimeout(() => {
    boxInners[i].innerHTML = GIFT_BOX_CLOSED_SVG;
    slot.classList.remove('opened');
  }, 650);

  if (collectedTypes.length >= TOY_SVGS.length) {
    boxScore += COLLECTION_BONUS;
    collectionCompletions += 1;
    collectedTypes = []; // 즉시 초기화(늦게 초기화하면 그 사이 다른 상자를 열 때 보너스가 중복 발생함)
    GameAudio.playBonus();
    collectionTrack.classList.add('completed');
    announceCollectionBonus();
    setTimeout(() => {
      collectionTrack.classList.remove('completed');
    }, 900);
  }

  updateCollectionUI();

  boxScoreEl.textContent = String(boxScore);
}

function announceCollectionBonus() {
  const banner = document.createElement('div');
  banner.className = 'collection-bonus-banner';
  banner.textContent = `🎉 도감 완성! +${COLLECTION_BONUS}`;
  collectionTrack.appendChild(banner);
  setTimeout(() => banner.remove(), 1200);
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
    submitTotalScoreIfLoggedIn();
  }
  showResult(boxScore, isNewBest ? boxScore : best);
}

// ===== 결과 화면 =====
function showResult(finalScore, bestScore, unlockHint) {
  document.getElementById('result-score').textContent = `${finalScore}점`;
  document.getElementById('result-best').textContent = `최고점수 : ${bestScore}점`;
  const unlockEl = document.getElementById('result-unlock');
  if (unlockHint) {
    unlockEl.textContent = unlockHint;
    unlockEl.classList.remove('hidden');
  } else {
    unlockEl.classList.add('hidden');
  }
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
updateLoginStatusDisplay();
attemptSessionRestore();
loadNotice();
