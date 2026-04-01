const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "work_studio.db"));
db.pragma("journal_mode = WAL");

// 테이블 자동 생성: 모든 데이터는 JSON blob으로 저장 (스키마 변경 불필요)
const TABLES = [
  "aiethics_applications",     // 윤리 - 전문가 모집
  "classic_inquiries",         // 고전번역 - 문의
  "classic_specialist_apps",   // 고전번역 - 전문가 신청
  "translation_contacts",      // 번역 - 문의하기
  "translation_quotes",        // 번역 - 견적 의뢰
  "translation_translators",   // 번역 - 번역사 신청
  "translation_integrated",    // 번역 - 통합 신청
  "translation_experts",       // 번역 - 전문가 지원
  "translation_orders",        // 번역 - 번역 신청
  "level_test_submissions",    // 레벨테스트 답안
  "story_posts",               // 대표님 블로그
  "applications",              // 통합 신청 (사용자/전문가/B2B)
];

for (const table of TABLES) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS ${table} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT NOT NULL,
      created_at DATETIME DEFAULT (datetime('now', 'localtime'))
    )
  `);
}

// --- Generic CRUD ---

function getAll(table) {
  return db.prepare(`SELECT * FROM ${table} ORDER BY id DESC`).all();
}

function getById(table, id) {
  return db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(id);
}

function insert(table, data) {
  const result = db
    .prepare(`INSERT INTO ${table} (data) VALUES (?)`)
    .run(JSON.stringify(data));
  return { id: result.lastInsertRowid };
}

function update(table, id, data) {
  db.prepare(`UPDATE ${table} SET data = ? WHERE id = ?`).run(
    JSON.stringify(data),
    id
  );
  return { id };
}

function remove(table, id) {
  db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(id);
  return { id };
}

module.exports = { db, TABLES, getAll, getById, insert, update, remove };
