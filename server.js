const express = require("express");
const cors = require("cors");
const path = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { TABLES, getAll, getById, insert, update, remove } = require("./db");

// ============================================================
//  서버 시작 시 1회 마이그레이션 — 레거시 스키마 → 신규 스키마
// ============================================================
function migrateLegacySchema() {
  let count = { tplMigrated: 0, modMigrated: 0 };
  try {
    // 1. form_templates: modules[] → phases:{part1:[], part2:[]}
    const tplRows = getAll("form_templates");
    for (const row of tplRows) {
      let d;
      try { d = JSON.parse(row.data); } catch { continue; }
      const hasPhases = d.phases && (Array.isArray(d.phases.part1) || Array.isArray(d.phases.part2));
      const hasLegacy = Array.isArray(d.modules);
      if (!hasPhases && hasLegacy) {
        d.phases = { part1: d.modules.slice(), part2: [] };
        delete d.modules;
        update("form_templates", row.id, d);
        count.tplMigrated++;
      } else if (hasPhases && hasLegacy && d.phases.part1.length === 0 && d.phases.part2.length === 0) {
        d.phases = { part1: d.modules.slice(), part2: [] };
        delete d.modules;
        update("form_templates", row.id, d);
        count.tplMigrated++;
      }
    }
    // 2. form_modules: category → roleGroup/role 자동 채우기
    const modRows = getAll("form_modules");
    for (const row of modRows) {
      let d;
      try { d = JSON.parse(row.data); } catch { continue; }
      if (d.roleGroup && d.role) continue;
      const cat = d.category || "common";
      let rg = "common", r = "common";
      if (cat === "common") { rg = "common"; r = "common"; }
      else if (cat === "student") { rg = "user"; r = "student"; }
      else if (cat === "instructor") { rg = "expert"; r = "instructor"; }
      else if (cat === "expert") { rg = "expert"; r = "specialist"; }
      else if (cat === "internal") { rg = "admin"; r = "admin"; }
      else if (cat === "specialty") {
        const id = d.moduleId || "";
        if (id.includes("teacher") || id.includes("instructor")) { rg = "expert"; r = "instructor"; }
        else if (id.includes("translation") || id.includes("translator")) { rg = "expert"; r = "translator"; }
        else if (id.includes("expert")) { rg = "expert"; r = "specialist"; }
        else if (id.includes("course") || id.includes("student")) { rg = "user"; r = "student"; }
        else if (id.includes("quote") || id.includes("client")) { rg = "user"; r = "client"; }
        else { rg = "expert"; r = "specialist"; }
      }
      d.roleGroup = rg;
      d.role = r;
      update("form_modules", row.id, d);
      count.modMigrated++;
    }
  } catch (e) {
    console.error("[migrateLegacySchema] error:", e.message);
  }
  if (count.tplMigrated > 0 || count.modMigrated > 0) {
    console.log(`[migrate] templates=${count.tplMigrated} modules=${count.modMigrated} 마이그레이션 완료`);
  }
}
migrateLegacySchema();

const S3_BUCKET = process.env.S3_BUCKET || "work-studio-uploads";
const S3_REGION = process.env.S3_REGION || "ap-northeast-2";
const s3 = new S3Client({ region: S3_REGION });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// --- 레거시 신청서 경로 → 범용 apply.html 리다이렉트 (static 보다 먼저) ---
const LEGACY_REDIRECTS = {
  "/tesol-apply":       "/apply.html?site=tesol&form=expert_part1",
  "/tesol-apply.html":  "/apply.html?site=tesol&form=expert_part1",
  "/expert-apply":      "/apply.html?site=hutechc&form=expert_part1",
  "/expert-apply.html": "/apply.html?site=hutechc&form=expert_part1",
  "/instructor-apply":       "/apply.html?site=hutechc&form=instructor_part1",
  "/instructor-apply.html":  "/apply.html?site=hutechc&form=instructor_part1",
  "/translator-apply":       "/apply.html?site=ai_trans&form=expert_part1",
  "/translator-apply.html":  "/apply.html?site=ai_trans&form=expert_part1",
};
for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
  app.get(from, (req, res) => res.redirect(302, to));
}

app.use(express.static(path.join(__dirname, "public")));

// --- 테이블 목록 API (admin용) ---
app.get("/api/tables", (req, res) => {
  res.json(TABLES);
});

// --- 분류표 데이터 API (단일 소스) — CRUD 라우트보다 먼저 등록 ---
const dataDefsPath = path.join(__dirname, "modules", "data-definitions");
app.get("/api/definitions/:name", (req, res) => {
  const filePath = path.join(dataDefsPath, req.params.name + ".json");
  res.sendFile(filePath, (err) => { if (err) res.status(404).json({ error: "Not found" }); });
});
app.get("/api/definitions", (req, res) => {
  const fs = require("fs");
  const files = fs.readdirSync(dataDefsPath).filter(f => f.endsWith(".json")).map(f => f.replace(".json", ""));
  res.json(files);
});

// --- 범용 CRUD: /api/:table ---
app.get("/api/:table", (req, res) => {
  const { table } = req.params;
  if (!TABLES.includes(table)) return res.status(404).json({ error: "Unknown table" });
  res.json(getAll(table));
});

app.get("/api/:table/:id", (req, res) => {
  const { table, id } = req.params;
  if (!TABLES.includes(table)) return res.status(404).json({ error: "Unknown table" });
  const row = getById(table, id);
  if (!row) return res.status(404).json({ error: "Not found" });
  res.json(row);
});

app.post("/api/:table", (req, res) => {
  const { table } = req.params;
  if (!TABLES.includes(table)) return res.status(404).json({ error: "Unknown table" });
  const result = insert(table, req.body);
  res.status(201).json({ success: true, ...result });
});

app.put("/api/:table/:id", (req, res) => {
  const { table, id } = req.params;
  if (!TABLES.includes(table)) return res.status(404).json({ error: "Unknown table" });
  const result = update(table, id, req.body);
  res.json({ success: true, ...result });
});

app.delete("/api/:table/:id", (req, res) => {
  const { table, id } = req.params;
  if (!TABLES.includes(table)) return res.status(404).json({ error: "Unknown table" });
  const result = remove(table, id);
  res.json({ success: true, ...result });
});

// --- S3 Presigned URL for file uploads ---
app.post("/api/upload/presign", async (req, res) => {
  try {
    const { filename, contentType, folder } = req.body;
    if (!filename || !contentType) {
      return res.status(400).json({ error: "filename and contentType required" });
    }
    const key = `${folder || "uploads"}/${Date.now()}_${filename}`;
    const command = new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
      ContentType: contentType,
    });
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 600 });
    const fileUrl = `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com/${key}`;
    res.json({ uploadUrl, fileUrl, key });
  } catch (err) {
    res.status(500).json({ error: "Presigned URL 생성 실패", detail: err.message });
  }
});

// --- 신청서 설정 API (외부 사이트 → work_studio) ---
app.get("/api/form-config/:siteId/:formId", (req, res) => {
  const { siteId, formId } = req.params;
  const phaseFilter = req.query.phase; // "part1" | "part2" | undefined (all)
  // Find template
  const templates = getAll("form_templates");
  const tpl = templates.find(r => {
    try { const d = JSON.parse(r.data); return d._site === siteId && d._formId === formId; } catch { return false; }
  });
  if (!tpl) return res.status(404).json({ error: "Form template not found" });
  const tplData = JSON.parse(tpl.data);

  // 레거시 modules → phases 마이그레이션 (읽기 전용)
  let phases = tplData.phases;
  if (!phases || (!Array.isArray(phases.part1) && !Array.isArray(phases.part2))) {
    phases = { part1: Array.isArray(tplData.modules) ? tplData.modules.slice() : [], part2: [] };
  }

  // Load modules
  const modules = getAll("form_modules").map(r => ({ id: r.id, ...JSON.parse(r.data) }));
  function migrateMod(m) {
    if (m.roleGroup && m.role) return m;
    const cat = m.category || "common";
    if (cat === "common") { m.roleGroup = "common"; m.role = "common"; }
    else if (cat === "student") { m.roleGroup = "user"; m.role = "student"; }
    else if (cat === "instructor") { m.roleGroup = "expert"; m.role = "instructor"; }
    else if (cat === "expert") { m.roleGroup = "expert"; m.role = "specialist"; }
    else if (cat === "internal") { m.roleGroup = "admin"; m.role = "admin"; }
    else { m.roleGroup = "common"; m.role = "common"; }
    return m;
  }

  // Assemble form: resolve module references per phase
  function assemblePhase(phaseKey) {
    const out = [];
    for (const modId of (phases[phaseKey] || [])) {
      const mod = modules.find(m => m.moduleId === modId);
      if (mod) {
        migrateMod(mod);
        out.push({
          moduleId: mod.moduleId, name: mod.name,
          roleGroup: mod.roleGroup, role: mod.role,
          category: mod.category,
          fields: mod.fields,
          evaluable: mod.evaluable || false,
          phase: phaseKey
        });
      }
    }
    return out;
  }

  let assembledSections;
  if (phaseFilter === "part1" || phaseFilter === "part2") {
    assembledSections = assemblePhase(phaseFilter);
  } else {
    assembledSections = [...assemblePhase("part1"), ...assemblePhase("part2")];
  }

  // Add any extra inline fields (part1 전용)
  if ((!phaseFilter || phaseFilter === "part1") && tplData.extraFields && tplData.extraFields.length) {
    assembledSections.push({ moduleId: "_extra", name: "추가 항목", roleGroup: "common", role: "common", category: "extra", fields: tplData.extraFields, phase: "part1" });
  }

  // Resolve site label (icon/color/name) from sites.json
  let siteInfo = null;
  try {
    const sitesJson = require(path.join(dataDefsPath, "sites.json"));
    siteInfo = (sitesJson.websites || []).find(s => s.id === tplData._site) || null;
  } catch (e) {}

  res.json({
    site: tplData._site,
    formId: tplData._formId,
    role: tplData._role,
    phase: phaseFilter || null,
    phases: { part1: phases.part1 || [], part2: phases.part2 || [] },
    displayName: tplData.displayName || tplData.name || tplData._formId,
    shortName:   tplData.shortName   || tplData.displayName || tplData._formId,
    steps: tplData.steps || null,
    sections: assembledSections,
    siteInfo,
    submitUrl: `/api/applications`,
    version: tplData.version || 1
  });
});

// --- 모듈 목록 API ---
app.get("/api/form-modules-list", (req, res) => {
  const modules = getAll("form_modules").map(r => ({ id: r.id, ...JSON.parse(r.data) }));
  res.json(modules);
});

// --- 레벨테스트 페이지 (v모름: 기존, 예외 — 모듈화 제외) ---
app.get("/level-test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "level-test.html"));
});

// --- 레벨테스트 페이지 (v준걸: React SPA) ---
app.use("/level-test-jungeol", express.static(path.join(__dirname, "public", "level-test-jungeol")));
app.get("/level-test-jungeol/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "level-test-jungeol", "index.html"));
});

// --- 커리큘럼 SPA fallback ---
app.get("/curriculum/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "curriculum", "index.html"));
});

// --- SPA fallback ---
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

const server = app.listen(PORT, () => {
  console.log(`Work Studio running at http://localhost:${PORT}`);
});

// --- Graceful shutdown (SQLite WAL 손상 방지) ---
const db = require("./db").db;
function shutdown(signal) {
  console.log(`[${signal}] Graceful shutdown...`);
  server.close(() => {
    try { db.pragma("wal_checkpoint(TRUNCATE)"); } catch {}
    try { db.close(); } catch {}
    console.log("DB closed safely.");
    process.exit(0);
  });
  setTimeout(() => {
    console.warn("Force shutdown after timeout");
    try { db.close(); } catch {}
    process.exit(1);
  }, 4500);
}
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
