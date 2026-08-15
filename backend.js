// 구글 시트(Apps Script 웹앱) 백엔드와 통신 — 로그인 / 점수 제출 / 순위표 / 공지사항
window.Backend = (function () {
  var API_URL = 'https://script.google.com/macros/s/AKfycbyc3QqzCsakIpPzonk-QECCXeyz3Re4AnrVs_ragXaOmbq3kX5HE7wJfYM218KIOZRZmQ/exec';

  function call(payload) {
    if (!API_URL || API_URL.indexOf('REPLACE_WITH') === 0) {
      return Promise.resolve({ ok: false, error: 'backend_not_configured' });
    }
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json();
    }).catch(function () {
      return { ok: false, error: 'network_error' };
    });
  }

  return {
    isConfigured: function () {
      return !!API_URL && API_URL.indexOf('REPLACE_WITH') !== 0;
    },
    login: function (nickname, pin) {
      return call({ action: 'login', nickname: nickname, pin: pin });
    },
    submitScore: function (nickname, pin, score) {
      return call({ action: 'submitScore', nickname: nickname, pin: pin, score: score });
    },
    getLeaderboard: function () {
      return call({ action: 'getLeaderboard' });
    },
    getNotice: function () {
      return call({ action: 'getNotice' });
    }
  };
})();
