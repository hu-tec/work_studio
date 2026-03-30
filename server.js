const express = require("express");
const cors = require("cors");
const path = require("path");
const { TABLES, getAll, getById, insert, update, remove } = require("./db");

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

// --- SPA fallback ---
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log(`Work Studio running at http://localhost:${PORT}`);
});
