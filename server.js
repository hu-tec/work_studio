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

// --- DB 관리 페이지 ---
app.get("/db", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "db", "index.html"));
});
app.get("/db/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "db", "index.html"));
});

// --- SPA fallback ---
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log(`Work Studio running at http://localhost:${PORT}`);
});
