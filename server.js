const express = require("express");
const cors = require("cors");
const path = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { TABLES, getAll, getById, insert, update, remove } = require("./db");

const S3_BUCKET = process.env.S3_BUCKET || "work-studio-uploads";
const S3_REGION = process.env.S3_REGION || "ap-northeast-2";
const s3 = new S3Client({ region: S3_REGION });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
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
  // Find template
  const templates = getAll("form_templates");
  const tpl = templates.find(r => {
    try { const d = JSON.parse(r.data); return d._site === siteId && d._formId === formId; } catch { return false; }
  });
  if (!tpl) return res.status(404).json({ error: "Form template not found" });
  const tplData = JSON.parse(tpl.data);

  // Load modules
  const modules = getAll("form_modules").map(r => ({ id: r.id, ...JSON.parse(r.data) }));

  // Assemble form: resolve module references
  const assembledSections = [];
  for (const modId of (tplData.modules || [])) {
    const mod = modules.find(m => m.moduleId === modId);
    if (mod) assembledSections.push({ moduleId: mod.moduleId, name: mod.name, category: mod.category, fields: mod.fields });
  }
  // Add any extra inline fields
  if (tplData.extraFields && tplData.extraFields.length) {
    assembledSections.push({ moduleId: "_extra", name: "추가 항목", category: "extra", fields: tplData.extraFields });
  }

  res.json({
    site: tplData._site,
    formId: tplData._formId,
    name: tplData.name,
    sections: assembledSections,
    submitUrl: `/api/applications`,
  });
});

// --- 모듈 목록 API ---
app.get("/api/form-modules-list", (req, res) => {
  const modules = getAll("form_modules").map(r => ({ id: r.id, ...JSON.parse(r.data) }));
  res.json(modules);
});

// --- TESOL 신청 페이지 ---
app.get("/tesol-apply", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "tesol-apply.html"));
});

// --- 레벨테스트 페이지 (v모름: 기존) ---
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

app.listen(PORT, () => {
  console.log(`Work Studio running at http://localhost:${PORT}`);
});
