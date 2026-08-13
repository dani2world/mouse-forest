// Web Audio API 기반 배경음/효과음 합성 (외부 오디오 파일 없음)
window.GameAudio = (function () {
  var ctx = null;
  var muted = false;

  function ensureCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, startOffset, duration, type, peakGain) {
    if (muted) return;
    var c = ensureCtx();
    var osc = c.createOscillator();
    var gain = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    var t0 = c.currentTime + startOffset;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(peakGain || 0.2, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  // 낮은 음에서 훅 떨어지는 "퉁" 타격감 (두더지를 때린 느낌)
  function thump(startOffset, duration, peakGain) {
    if (muted) return;
    var c = ensureCtx();
    var osc = c.createOscillator();
    var gain = c.createGain();
    osc.type = 'sine';
    var t0 = c.currentTime + startOffset;
    osc.frequency.setValueAtTime(220, t0);
    osc.frequency.exponentialRampToValueAtTime(55, t0 + duration);
    gain.gain.setValueAtTime(peakGain || 0.3, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  // ---------- 배경음악 (귀엽고 통통 튀는 8비트풍 루프, "새둥지 타자 대작전"과 같은 방식) ----------
  var BGM_NOTES = [
    [659.25, 1], [783.99, 1], [880.00, 1], [1046.50, 1],
    [987.77, 1], [880.00, 1], [783.99, 1], [659.25, 1],
    [698.46, 1], [783.99, 1], [880.00, 1], [698.46, 1],
    [659.25, 2], [0, 1],
    [783.99, 1], [880.00, 1], [987.77, 1], [1174.66, 1],
    [1046.50, 1], [987.77, 1], [880.00, 1], [783.99, 1],
    [659.25, 1], [698.46, 1], [783.99, 1], [659.25, 1],
    [587.33, 2], [0, 2]
  ];
  var BGM_BPM = 140;
  var bgmPlaying = false;
  var bgmTimerId = null;
  var bgmStep = 0;

  function scheduleNextBgmNote() {
    if (!bgmPlaying) return;
    var unitMs = (60000 / BGM_BPM) / 2;
    var entry = BGM_NOTES[bgmStep % BGM_NOTES.length];
    var freq = entry[0];
    var units = entry[1];
    var durSec = (unitMs * units) / 1000;
    if (freq > 0) tone(freq, 0, durSec * 0.85, 'triangle', 0.05);
    bgmStep++;
    bgmTimerId = setTimeout(scheduleNextBgmNote, unitMs * units);
  }

  return {
    unlock: function () { ensureCtx(); },
    setMuted: function (v) { muted = v; },
    isMuted: function () { return muted; },
    playHit: function () {
      thump(0, 0.12, 0.28);
      tone(880, 0.03, 0.1, 'sine', 0.2);
      tone(1318.51, 0.09, 0.15, 'sine', 0.22);
    },
    playMiss: function () {
      tone(180, 0, 0.16, 'sawtooth', 0.15);
    },
    playStart: function () {
      tone(523.25, 0, 0.1, 'triangle', 0.2);
      tone(783.99, 0.1, 0.16, 'triangle', 0.2);
    },
    playGameOver: function () {
      tone(659.25, 0, 0.15, 'sine', 0.18);
      tone(523.25, 0.15, 0.15, 'sine', 0.18);
      tone(392.00, 0.3, 0.3, 'sine', 0.18);
    },
    playClick: function () {
      tone(440, 0, 0.06, 'square', 0.08);
    },
    playBGM: function () {
      if (bgmPlaying) return;
      ensureCtx();
      bgmPlaying = true;
      bgmStep = 0;
      scheduleNextBgmNote();
    },
    stopBGM: function () {
      bgmPlaying = false;
      if (bgmTimerId) { clearTimeout(bgmTimerId); bgmTimerId = null; }
    }
  };
})();
