/**
 * 마우스로 대모험 - 로그인 / 순위표 백엔드
 *
 * 이 파일은 구글 시트에 연결된 Apps Script 프로젝트에 붙여넣어 사용합니다.
 * 시트 구성 (탭 이름 정확히 일치해야 함):
 *   - "Users"  : A열=닉네임, B열=PIN해시   (1행은 헤더, 2행부터 데이터)
 *   - "Scores" : A열=닉네임, B열=총점, C열=갱신시각
 *   - "Config" : B1 셀에 공지사항 텍스트 (비워두면 공지 없음)
 *
 * 닉네임이 처음 등장하면 자동으로 계정이 생성됩니다(관리자 승인 불필요).
 */

var USERS_SHEET = 'Users';
var SCORES_SHEET = 'Scores';
var CONFIG_SHEET = 'Config';

function doPost(e) {
  var result;
  try {
    var body = JSON.parse(e.postData.contents);
    var action = body.action;
    if (action === 'login') {
      result = handleLogin(body.nickname, body.pin);
    } else if (action === 'submitScore') {
      result = handleSubmitScore(body.nickname, body.pin, body.score);
    } else if (action === 'getLeaderboard') {
      result = handleGetLeaderboard();
    } else if (action === 'getNotice') {
      result = handleGetNotice();
    } else {
      result = { ok: false, error: 'unknown_action' };
    }
  } catch (err) {
    result = { ok: false, error: String(err) };
  }
  return jsonOutput(result);
}

function doGet(e) {
  return jsonOutput({ ok: true, msg: 'Mouse Forest API is running' });
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet_(name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sheet) throw new Error('missing_sheet_' + name);
  return sheet;
}

function hashPin_(nickname, pin) {
  var raw = nickname + ':' + pin + ':mouse-forest-salt-v1';
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw, Utilities.Charset.UTF_8);
  return bytes.map(function (b) {
    var v = (b < 0 ? b + 256 : b).toString(16);
    return v.length === 1 ? '0' + v : v;
  }).join('');
}

function findUserRow_(nickname) {
  var sheet = getSheet_(USERS_SHEET);
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === nickname) return i + 1; // 1-indexed 실제 시트 행 번호
  }
  return -1;
}

function handleLogin(nickname, pin) {
  nickname = String(nickname || '').trim();
  pin = String(pin || '').trim();
  if (!nickname || !pin) return { ok: false, error: 'missing_fields' };
  if (nickname.length > 10) return { ok: false, error: 'nickname_too_long' };

  var row = findUserRow_(nickname);
  if (row === -1) {
    // 처음 보는 닉네임 -> 자동 등록
    getSheet_(USERS_SHEET).appendRow([nickname, hashPin_(nickname, pin)]);
    return { ok: true, nickname: nickname, created: true };
  }
  var storedHash = getSheet_(USERS_SHEET).getRange(row, 2).getValue();
  if (hashPin_(nickname, pin) === storedHash) return { ok: true, nickname: nickname, created: false };
  return { ok: false, error: 'wrong_pin' };
}

function handleSubmitScore(nickname, pin, score) {
  var login = handleLogin(nickname, pin);
  if (!login.ok) return login;
  score = Number(score) || 0;

  var sheet = getSheet_(SCORES_SHEET);
  var data = sheet.getDataRange().getValues();
  var row = -1;
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === nickname) { row = i + 1; break; }
  }
  if (row === -1) {
    sheet.appendRow([nickname, score, new Date()]);
    return { ok: true, updated: true };
  }
  var prevScore = Number(sheet.getRange(row, 2).getValue()) || 0;
  if (score > prevScore) {
    sheet.getRange(row, 2, 1, 2).setValues([[score, new Date()]]);
    return { ok: true, updated: true };
  }
  return { ok: true, updated: false };
}

function handleGetLeaderboard() {
  var sheet = getSheet_(SCORES_SHEET);
  var data = sheet.getDataRange().getValues();
  var rows = data.slice(1).filter(function (r) { return r[0]; });
  rows.sort(function (a, b) { return Number(b[1]) - Number(a[1]); });
  var top = rows.slice(0, 10).map(function (r) {
    return { nickname: r[0], score: Number(r[1]) };
  });
  return { ok: true, leaderboard: top };
}

function handleGetNotice() {
  var sheet = getSheet_(CONFIG_SHEET);
  var notice = sheet.getRange('B1').getValue();
  return { ok: true, notice: String(notice || '') };
}
