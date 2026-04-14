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
    // phaseFilter가 있으면 그 값, 없으면 legacy 템플릿의 _phase, 둘 다 없으면 null
    phase: phaseFilter || tplData._phase || null,
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

// --- 홈페이지 생성 — 설정 JSON (외부 embed/form-engine용) ---
app.get("/api/hp-config/:slug", (req, res) => {
  const { slug } = req.params;
  const rows = getAll("homepages");
  const hp = rows.map(r => { try { return Object.assign({}, JSON.parse(r.data), { id: r.id, _created: r.created_at }); } catch { return null; } }).find(h => h && h.slug === slug);
  if (!hp) return res.status(404).json({ error: "Not found" });
  const templates = getAll("form_templates");
  const resolvedTemplates = (hp.applyTemplates || []).map(at => {
    const row = templates.find(r => r.id === at.templateId);
    if (!row) return null;
    try { return Object.assign({}, JSON.parse(row.data), { id: row.id, _selectedPhases: at.phases || ['part1', 'part2'] }); }
    catch { return null; }
  }).filter(Boolean);
  res.json({
    homepage: hp,
    resolvedTemplates,
    renderUrl: `/hp/${slug}`,
    configUrl: `/api/hp-config/${slug}`,
  });
});

// --- 홈페이지 생성 — 서버 렌더링 프리뷰 ---
app.get("/hp/:slug", (req, res) => {
  const { slug } = req.params;
  const rows = getAll("homepages");
  const hp = rows.map(r => { try { return Object.assign({}, JSON.parse(r.data), { id: r.id }); } catch { return null; } }).find(h => h && h.slug === slug);
  if (!hp) return res.status(404).send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>404</title></head><body style="font-family:sans-serif;text-align:center;padding:60px"><h1>404</h1><p>홈페이지 슬러그 <code>${slug}</code>을(를) 찾을 수 없습니다.</p><a href="/homepage-builder.html">← 빌더로 돌아가기</a></body></html>`);

  const templates = getAll("form_templates");
  const resolvedTemplates = (hp.applyTemplates || []).map(at => {
    const row = templates.find(r => r.id === at.templateId);
    if (!row) return null;
    try { return Object.assign({}, JSON.parse(row.data), { id: row.id, _selectedPhases: at.phases || ['part1', 'part2'] }); }
    catch { return null; }
  }).filter(Boolean);

  const cs = hp.commonState || {};
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  const enabled = (k) => cs[k] && cs[k].enabled !== false;
  const data = (k) => (cs[k] && cs[k].data) || {};

  // Section-nav items from sections
  const sections = [];
  if (enabled('banner')) sections.push({ id: 'banner', label: '홈' });
  resolvedTemplates.forEach((t, i) => sections.push({ id: 'apply-' + i, label: esc(t.name || 'Apply ' + (i+1)) }));
  if ((hp.blocks || []).length) sections.push({ id: 'blocks', label: '선택 모듈' });
  if (enabled('community_notice')) sections.push({ id: 'notice', label: '공지' });
  if (enabled('community_faq')) sections.push({ id: 'faq', label: 'FAQ' });
  if (enabled('community_qna')) sections.push({ id: 'qna', label: 'Q&A' });
  if (enabled('community_review')) sections.push({ id: 'review', label: '후기' });
  if (enabled('inquiry')) sections.push({ id: 'inquiry', label: '문의' });

  let html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${esc(hp.name || slug)}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Pretendard',-apple-system,sans-serif;color:#0f172a;line-height:1.5;background:#fff}
a{color:inherit;text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}
nav.top{position:sticky;top:0;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-bottom:1px solid #e2e8f0;z-index:50}
nav.top .nav-inner{display:flex;align-items:center;gap:20px;height:56px}
nav.top .brand{font-weight:800;font-size:16px;color:#1a365d}
nav.top .nav-links{display:flex;gap:20px;font-size:13px;color:#475569;flex-wrap:wrap}
nav.top .nav-links a:hover{color:#1a365d}
nav.top .build-badge{margin-left:auto;font-size:10px;color:#94a3b8}
.banner{background:linear-gradient(135deg,#1a365d,#2d4a7c);color:#fff;text-align:center;padding:60px 20px}
.banner h1{font-size:32px;margin-bottom:10px}
.banner p{font-size:16px;opacity:.9;max-width:600px;margin:0 auto 20px}
.banner .cta{display:inline-block;background:#fff;color:#1a365d;padding:12px 28px;border-radius:8px;font-weight:600}
section{padding:40px 0;border-bottom:1px solid #f1f5f9}
section h2{font-size:22px;margin-bottom:16px;color:#0f172a;font-weight:700}
.apply-block{background:#f8fafc;padding:20px;border-radius:8px;border:1px solid #e2e8f0}
.apply-block .site-badge{display:inline-block;background:#1a365d;color:#fff;padding:2px 10px;border-radius:999px;font-size:11px;margin-right:6px}
.apply-block .phase-block{margin-top:10px;padding:10px;background:#fff;border:1px solid #e2e8f0;border-radius:6px}
.apply-block .phase-hd{font-weight:700;color:#1a365d;font-size:13px;margin-bottom:6px}
.apply-block .mod-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;font-size:12px;color:#475569}
.apply-block .mod-list div{padding:4px 8px;background:#f1f5f9;border-radius:4px}
.apply-block .submit-btn{display:inline-block;margin-top:10px;background:#1a365d;color:#fff;padding:10px 20px;border-radius:6px;font-weight:600;font-size:13px;cursor:pointer;border:none}
.notice-list,.faq-list,.review-list{display:flex;flex-direction:column;gap:8px}
.notice-item,.faq-item,.review-item{padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px}
.notice-item .date{font-size:11px;color:#94a3b8}
.notice-item .title{font-weight:600;font-size:14px}
.notice-item .content{color:#64748b;font-size:12px;margin-top:4px}
.faq-item .q{font-weight:700;color:#1a365d;font-size:14px}
.faq-item .a{color:#64748b;font-size:13px;margin-top:4px}
.inquiry-form{display:flex;flex-direction:column;gap:8px;max-width:480px}
.inquiry-form input,.inquiry-form textarea{padding:8px 10px;border:1px solid #e2e8f0;border-radius:6px;font-size:13px;font-family:inherit}
.inquiry-form button{padding:10px;background:#1a365d;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer}
.blocks-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px}
.block-card{padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px}
.block-card h3{font-size:14px;margin-bottom:4px;color:#1a365d}
.block-card .desc{font-size:11px;color:#64748b;margin-bottom:8px}
.block-card .cfg{font-size:10px;color:#94a3b8;font-family:monospace;padding:4px 6px;background:#fff;border-radius:3px}
footer{background:#0f172a;color:#94a3b8;padding:30px 0;text-align:center;font-size:12px}
footer .brand{color:#fff;font-weight:700;margin-bottom:6px}
.landing-iframe{width:100%;height:520px;border:1px solid #e2e8f0;border-radius:8px}
.status-pill{display:inline-block;background:#d1fae5;color:#059669;padding:2px 10px;border-radius:999px;font-size:10px;font-weight:700;margin-left:6px}
.status-draft{background:#fef3c7;color:#d97706}
.routing-note{font-size:10px;color:#94a3b8;margin-top:6px;font-family:monospace}
</style>
</head>
<body>
<nav class="top"><div class="wrap nav-inner">
  <div class="brand">${esc(hp.name || slug)}<span class="status-pill ${hp.status==='draft'?'status-draft':''}">${esc(hp.status || 'draft')}</span></div>
  <div class="nav-links">${sections.map(s => `<a href="#${s.id}">${s.label}</a>`).join('')}</div>
  <div class="build-badge">slug: ${esc(slug)} · 빌더: <a href="/homepage-builder.html">편집</a></div>
</div></nav>`;

  // Banner
  if (enabled('banner')) {
    const b = data('banner');
    html += `<section class="banner" id="banner">
      <h1>${esc(b.title || hp.name || '제목 미설정')}</h1>
      <p>${esc(b.subtitle || '부제목을 입력하세요')}</p>
      ${b.ctaLabel ? `<a href="${esc(b.ctaUrl || '#')}" class="cta">${esc(b.ctaLabel)}</a>` : ''}
    </section>`;
  }

  // Landing iframe if configured
  if (hp.landing && hp.landing.repoUrl && hp.landing.verified) {
    const v = hp.landing.verified;
    const ghPages = `https://${esc(v.owner)}.github.io/${esc(v.repo)}${hp.landing.deployPath || '/'}`;
    html += `<section class="wrap" id="landing"><h2>🎨 랜딩 페이지 (${esc(v.owner)}/${esc(v.repo)})</h2>
      <iframe class="landing-iframe" src="${ghPages}" loading="lazy" title="landing"></iframe>
      <div class="routing-note">원본: ${esc(hp.landing.repoUrl)} / 브랜치 ${esc(hp.landing.branch || 'main')}</div>
    </section>`;
  }

  // Apply forms
  resolvedTemplates.forEach((t, i) => {
    const phases = t._selectedPhases || ['part1','part2'];
    html += `<section class="wrap" id="apply-${i}"><h2>📝 ${esc(t.name || 'Apply ' + (i+1))}</h2>
      <div class="apply-block">
        <span class="site-badge">${esc(t._site || 'site')}</span>
        <span style="font-size:11px;color:#64748b">${esc(t._formId || '')}</span>`;
    phases.forEach(ph => {
      const mods = (t.phases && t.phases[ph]) || [];
      if (!mods.length) return;
      html += `<div class="phase-block"><div class="phase-hd">${ph === 'part1' ? '1부' : '2부'} (${mods.length}개 모듈)</div>
        <div class="mod-list">${mods.map(m => `<div>${esc(m)}</div>`).join('')}</div></div>`;
    });
    const formAction = `/apply.html?site=${encodeURIComponent(t._site || '')}&form=${encodeURIComponent(t._formId || '')}`;
    html += `<a href="${formAction}" class="submit-btn">▶ 신청 폼 열기</a>
      <div class="routing-note">제출 → /api/applications (템플릿 #${t.id})</div>
      </div></section>`;
  });

  // Optional blocks
  if ((hp.blocks || []).length) {
    html += `<section class="wrap" id="blocks"><h2>📦 선택 모듈 (${hp.blocks.length}개)</h2><div class="blocks-list">`;
    hp.blocks.forEach((b, i) => {
      html += `<div class="block-card"><h3>${i+1}. ${esc(b.name || b.type)}</h3>
        <div class="desc">${esc(b.desc || b.type)}</div>
        <div class="cfg">${esc(JSON.stringify(b.config || {}))}</div></div>`;
    });
    html += `</div></section>`;
  }

  // Notice
  if (enabled('community_notice')) {
    const items = data('community_notice').items || [];
    html += `<section class="wrap" id="notice"><h2>📢 공지사항 (${items.length})</h2><div class="notice-list">`;
    if (!items.length) html += `<div class="notice-item"><div class="content">등록된 공지가 없습니다.</div></div>`;
    items.forEach(it => {
      html += `<div class="notice-item"><div class="date">${esc(it.date || '')}</div><div class="title">${esc(it.title || '')}</div><div class="content">${esc(it.content || '')}</div></div>`;
    });
    html += `</div></section>`;
  }

  // FAQ
  if (enabled('community_faq')) {
    const items = data('community_faq').items || [];
    html += `<section class="wrap" id="faq"><h2>❓ FAQ (${items.length})</h2><div class="faq-list">`;
    if (!items.length) html += `<div class="faq-item"><div class="q">자주 묻는 질문이 없습니다.</div></div>`;
    items.forEach(it => {
      html += `<div class="faq-item"><div class="q">Q. ${esc(it.q || '')}</div><div class="a">A. ${esc(it.a || '')}</div></div>`;
    });
    html += `</div></section>`;
  }

  // QNA
  if (enabled('community_qna')) {
    const d = data('community_qna');
    html += `<section class="wrap" id="qna"><h2>💬 Q&amp;A</h2>
      <div class="routing-note">정책: ${esc(d.policy || 'auto')} · 분류: ${esc((d.categories || []).join(', ') || '기본')}</div>
      <div class="routing-note">제출 → /api/story_posts (카테고리: qna)</div>
    </section>`;
  }

  // Review
  if (enabled('community_review')) {
    html += `<section class="wrap" id="review"><h2>⭐ 후기</h2>
      <div class="routing-note">제출 → /api/story_posts (카테고리: review)</div>
    </section>`;
  }

  // Inquiry
  if (enabled('inquiry')) {
    const d = data('inquiry');
    const fields = d.fields || ['name','email','phone','title','content'];
    html += `<section class="wrap" id="inquiry"><h2>📧 1:1 문의</h2>
      <form class="inquiry-form" method="POST" action="/api/applications">`;
    const fldLabel = { name:'이름', email:'이메일', phone:'전화', title:'제목', content:'내용', file:'파일' };
    fields.forEach(f => {
      if (f === 'content') html += `<textarea name="${f}" placeholder="${fldLabel[f]||f}" rows="4" required></textarea>`;
      else if (f === 'file') html += `<input type="file" name="${f}">`;
      else html += `<input type="${f==='email'?'email':f==='phone'?'tel':'text'}" name="${f}" placeholder="${fldLabel[f]||f}" required>`;
    });
    html += `<button type="submit">문의 제출</button></form>
      <div class="routing-note">제출 → /api/applications (_type: inquiry)</div>
    </section>`;
  }

  // Footer
  if (enabled('footer')) {
    const f = data('footer');
    html += `<footer>
      <div class="wrap">
        <div class="brand">${esc(f.company || hp.name || 'HuTechC')}</div>
        <div>${esc(f.address || '')}</div>
        <div>${esc(f.contact || '')}</div>
        <div style="margin-top:10px">${esc(f.copyright || '© ' + new Date().getFullYear() + ' ' + (f.company || 'HuTechC'))}</div>
      </div>
    </footer>`;
  } else {
    html += `<footer><div class="wrap"><div>Generated by Work Studio Homepage Builder · <a href="/homepage-builder.html" style="color:#94a3b8">편집</a></div></div></footer>`;
  }

  html += `</body></html>`;
  res.send(html);
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
