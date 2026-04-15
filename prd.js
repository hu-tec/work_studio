const TYPE_GROUP_LABELS = {
  layout:    '🎨 레이아웃',
  community: '💬 커뮤니티',
  form:      '📋 지원/접수',
  legal:     '📜 법적',
  block:     '🧩 블록',
};

const TYPE_ICONS = {
  banner: '🎯', nav: '🧭', footer: '⬇️',
  notice: '📢', faq: '❓', qna: '💬', review: '⭐', blog: '📝',
  inquiry: '📧', apply_ref: '📝',
  terms: '📜', privacy: '🔐',
  block_cat_multi:  '🗂️', block_file_drop:  '📎', block_ai_radio4: '🤖',
  block_editor:     '✏️', block_human:      '👷', block_opts:      '⚙️',
  block_lang_pair:  '🈂️', block_quality:    '📊', block_regulation:'📋',
  block_textarea:   '📝',
};

const WEBSITE_NAMES = {
  tesol: 'TESOL', ai_trans: 'AI 번역', reading: '통독문서', ai_ethics: 'AI 윤리',
  exhibit: '전시/행사', cbt: '시험', matching: '전문가매칭', level_test: '레벨테스트',
  hutechc: '휴텍씨', iita: 'IITA협회', semiconductor: '반도체/조선/방산',
};

const STATUS_LABELS = {
  draft: '📝 초안', published: '✅ 발행됨', archived: '🗄️ 보관',
};

const e = (s) => String(s == null ? '' : s);

function buildPrd(hp, modulesById, templatesById) {
  modulesById  = modulesById  || {};
  templatesById = templatesById || {};

  const lines = [];
  const push = (s = '') => lines.push(s);

  const siteName = hp.linkedSite ? (WEBSITE_NAMES[hp.linkedSite] || hp.linkedSite) : '—';
  const status = STATUS_LABELS[hp.status || 'draft'] || (hp.status || '초안');

  // ── 헤더 ─────────────────────────────────────
  push(`# ${e(hp.name || '(이름 없음)')} — PRD`);
  push();
  push(`> **슬러그**: \`${e(hp.slug || '(미지정)')}\`  `);
  push(`> **연결 사이트**: ${siteName}  `);
  push(`> **상태**: ${status}  `);
  push(`> **생성일**: ${(hp._created || '').slice(0, 10) || '—'}  `);
  push(`> **마지막 발행**: ${(hp.deploy && hp.deploy.lastPublished) || '미발행'}`);
  push();

  // ── 목차 ─────────────────────────────────────
  push(`## 📑 목차`);
  push();
  push(`1. [개요](#1-개요)`);
  push(`2. [랜딩 페이지](#2-랜딩-페이지)`);
  push(`3. [섹션 구성](#3-섹션-구성)`);
  push(`4. [라우팅 & API](#4-라우팅--api)`);
  push(`5. [배포 정보](#5-배포-정보)`);
  push(`6. [원본 JSON](#6-원본-json)`);
  push();
  push(`---`);
  push();

  // ── 1. 개요 ──────────────────────────────────
  push(`## 1. 개요`);
  push();
  push(`- **이름**: ${e(hp.name)}`);
  push(`- **슬러그**: \`${e(hp.slug || '(미지정)')}\``);
  push(`- **연결 사이트**: ${siteName}`);
  push(`- **상태**: ${status}`);
  if (hp._notes && hp._notes.trim()) {
    push(`- **목적/비고**:`);
    e(hp._notes).split('\n').forEach(l => push(`  > ${l}`));
  } else {
    push(`- **목적/비고**: *(미작성)*`);
  }
  if (hp._notesFiles && hp._notesFiles.length) {
    push(`- **첨부 파일**: ${hp._notesFiles.map(f => '📎 ' + e(f.name)).join(', ')}`);
  }
  push();
  push(`---`);
  push();

  // ── 2. 랜딩 페이지 ────────────────────────────
  push(`## 2. 랜딩 페이지`);
  push();
  const l = hp.landing || {};
  if (!l.repoUrl) {
    push(`> *랜딩 페이지가 연결되지 않았습니다.*`);
  } else {
    push(`- **Repository**: [${e(l.repoUrl)}](${e(l.repoUrl)})`);
    push(`- **브랜치**: \`${e(l.branch || 'main')}\``);
    push(`- **배포 경로**: \`${e(l.deployPath || '/')}\``);
    if (l.verified && typeof l.verified === 'object') {
      const v = l.verified;
      push(`- **검증**: ✅ 성공 (${e(l.lastSync) || '최근'})`);
      push(`- **풀네임**: \`${e(v.fullName)}\``);
      if (v.description) push(`- **설명**: ${e(v.description)}`);
      push(`- **기본 브랜치**: \`${e(v.defaultBranch)}\``);
      push(`- **최근 푸시**: ${e((v.pushedAt || '').slice(0, 10))}`);
      push(`- **GitHub Pages**: ${v.hasPages ? '🌐 활성' : '❌ 비활성'}`);
      push(`- **⭐ 스타**: ${v.stars || 0} · 🍴 포크: ${v.forks || 0}`);
      if (v.hasPages && v.owner && v.repo) {
        const pagesUrl = `https://${v.owner}.github.io/${v.repo}${l.deployPath || '/'}`;
        push(`- **Pages URL**: [${pagesUrl}](${pagesUrl})`);
      }
    } else if (l.verified === false) {
      push(`- **검증**: ❌ 실패 *(유효하지 않은 URL 또는 접근 불가)*`);
    } else {
      push(`- **검증**: ⏳ 미확인 *(빌더에서 [연결 테스트] 클릭)*`);
    }
  }
  push();
  push(`---`);
  push();

  // ── 3. 섹션 구성 ──────────────────────────────
  const sectionIds = hp.sections || [];
  const sections = sectionIds.map(mid => modulesById[mid]).filter(Boolean);
  const missing = sectionIds.filter(mid => !modulesById[mid]);

  push(`## 3. 섹션 구성`);
  push();
  push(`총 **${sections.length}개** 섹션 (표시 순서대로)${missing.length ? ` · ⚠️ 누락 ${missing.length}개` : ''}`);
  push();

  if (!sections.length && !missing.length) {
    push(`> *섹션이 없습니다. 빌더에서 모듈을 추가하세요.*`);
  } else {
    sections.forEach((m, i) => {
      const icon = TYPE_ICONS[m.type] || '•';
      push(`### 3.${i + 1} ${icon} ${e(m.name)} \`${e(m.type)}\``);
      push();
      push(`- **모듈 ID**: \`${e(m.moduleId)}\``);
      push(`- **카테고리**: ${TYPE_GROUP_LABELS[m.category] || e(m.category || '—')}`);
      renderModuleBody(push, m, templatesById);
      push();
    });
    if (missing.length) {
      push(`### ⚠️ 누락된 모듈`);
      push();
      missing.forEach(mid => push(`- \`${e(mid)}\` — DB에서 삭제되었거나 참조가 깨졌습니다`));
      push();
    }
  }
  push(`---`);
  push();

  // ── 4. 라우팅 & API ──────────────────────────
  push(`## 4. 라우팅 & API`);
  push();
  push(`이 홈페이지 섹션들이 사용하는 엔드포인트입니다.`);
  push();
  push(`| # | 섹션 | 타입 | 메서드 | 엔드포인트 |`);
  push(`|---|------|------|--------|-----------|`);
  let anyRouting = false;
  sections.forEach((m, i) => {
    const row = routingForModule(m, templatesById);
    if (!row) return;
    push(`| ${i + 1} | ${e(m.name)} | \`${e(m.type)}\` | ${row.method} | \`${row.endpoint}\` |`);
    anyRouting = true;
  });
  if (!anyRouting) {
    push(`| — | *라우팅 대상이 없습니다* | — | — | — |`);
  }
  push();
  push(`> 외부 시스템에서 이 PRD를 가져오려면: \`GET /api/hp-prd/${e(hp.slug || '{slug}')}\``);
  push();
  push(`---`);
  push();

  // ── 5. 배포 정보 ──────────────────────────────
  push(`## 5. 배포 정보`);
  push();
  push(`- **슬러그**: \`${e(hp.slug || '(미지정)')}\``);
  push(`- **상태**: ${status}`);
  if (hp.slug) {
    push(`- **PRD 뷰어**: [/hp/${e(hp.slug)}](/hp/${e(hp.slug)})`);
    push(`- **Raw Markdown**: [/hp/${e(hp.slug)}.md](/hp/${e(hp.slug)}.md)`);
    push(`- **JSON API**: [/api/hp-prd/${e(hp.slug)}](/api/hp-prd/${e(hp.slug)})`);
  } else {
    push(`- **PRD 뷰어**: *(슬러그 미지정 — 빌더에서 설정)*`);
  }
  if (hp.deploy && hp.deploy.lastPublished) {
    push(`- **마지막 발행**: ${e(hp.deploy.lastPublished)}`);
  }
  push();
  push(`---`);
  push();

  // ── 6. 원본 JSON ──────────────────────────────
  push(`## 6. 원본 JSON`);
  push();
  push(`<details>`);
  push(`<summary>📦 JSON 전체 보기 (클릭)</summary>`);
  push();
  push('```json');
  const clean = Object.assign({}, hp);
  delete clean._created;
  clean._resolvedSections = sections.map(m => ({
    moduleId: m.moduleId, name: m.name, type: m.type, category: m.category, data: m.data,
  }));
  push(JSON.stringify(clean, null, 2));
  push('```');
  push();
  push(`</details>`);
  push();
  push(`---`);
  push();
  push(`> 📝 이 PRD는 Work Studio 홈페이지 빌더에서 자동 생성되었습니다.  `);
  push(`> 수정: [빌더 열기](/homepage-builder.html) · 원본 테이블: \`homepages\` (id: ${hp.id || '—'})`);

  return lines.join('\n');
}

function routingForModule(m, templatesById) {
  switch (m.type) {
    case 'inquiry':   return { method: 'POST', endpoint: '/api/applications (_type: inquiry)' };
    case 'qna':       return { method: 'POST', endpoint: '/api/story_posts (category: qna)' };
    case 'review':    return { method: 'POST', endpoint: '/api/story_posts (category: review)' };
    case 'blog':      return { method: 'GET',  endpoint: '/api/story_posts?category=blog' };
    case 'notice':    return { method: '—',    endpoint: '인라인 렌더 (콘텐츠 표시)' };
    case 'faq':       return { method: '—',    endpoint: '인라인 렌더 (콘텐츠 표시)' };
    case 'apply_ref': {
      const tid = m.data && m.data.templateId;
      const tpl = tid ? templatesById[tid] : null;
      return { method: 'POST', endpoint: `/api/applications (template #${tid || '?'}${tpl ? ' · ' + tpl.name : ''})` };
    }
    default: return null;
  }
}

function renderModuleBody(push, m, templatesById) {
  const d = m.data || {};
  switch (m.type) {
    case 'banner':
      push(`- **제목**: ${d.title ? `"${e(d.title)}"` : '*(미설정)*'}`);
      push(`- **부제목**: ${d.subtitle ? `"${e(d.subtitle)}"` : '*(미설정)*'}`);
      push(`- **CTA**: ${d.ctaLabel ? `[${e(d.ctaLabel)}](${e(d.ctaUrl || '#')})` : '*(미설정)*'}`);
      if (d.image) push(`- **이미지**: [${e(d.image)}](${e(d.image)})`);
      return;
    case 'nav': {
      const secs = d.sections || [];
      if (!secs.length) { push(`- **섹션**: *(없음)*`); return; }
      push(`- **섹션 (${secs.length}개)**:`);
      secs.forEach((s, i) => push(`  ${i + 1}. \`#${e(s.id)}\` — ${e(s.label)}`));
      return;
    }
    case 'footer':
      push(`- **회사명**: ${e(d.company) || '*(미설정)*'}`);
      push(`- **주소**: ${e(d.address) || '*(미설정)*'}`);
      push(`- **연락처**: ${e(d.contact) || '*(미설정)*'}`);
      push(`- **저작권**: ${e(d.copyright) || '*(미설정)*'}`);
      return;
    case 'notice': {
      const items = d.items || [];
      push(`- **항목 수**: ${items.length}`);
      if (!items.length) return;
      push();
      items.forEach((it, i) => {
        push(`${i + 1}. **[${e(it.date || '날짜 없음')}]** ${e(it.title || '(제목 없음)')}`);
        if (it.content) push(`   > ${e(it.content).replace(/\n/g, ' ')}`);
      });
      return;
    }
    case 'faq': {
      const items = d.items || [];
      push(`- **항목 수**: ${items.length}`);
      if (!items.length) return;
      push();
      items.forEach((it, i) => {
        push(`${i + 1}. **Q.** ${e(it.q || '(질문 없음)')}`);
        if (it.a) push(`   **A.** ${e(it.a).replace(/\n/g, ' ')}`);
      });
      return;
    }
    case 'qna':
      push(`- **게시 정책**: ${d.policy === 'manual' ? '🔒 관리자 승인' : '🌐 자동 공개'}`);
      push(`- **분류**: ${(d.categories || []).map(c => '`' + e(c) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'review':
      push(`- **표시 수**: 최근 ${d.limit || 10}개`);
      push(`- **정렬**: \`${e(d.sort || 'latest')}\``);
      return;
    case 'inquiry': {
      const labels = { name:'이름', email:'이메일', phone:'전화', company:'회사', title:'제목', content:'내용', file:'파일첨부', budget:'예산', deadline:'희망일' };
      const fs = d.fields || [];
      push(`- **포함 필드**: ${fs.length}개`);
      push();
      fs.forEach(f => push(`- \`${e(f)}\` — ${labels[f] || f}`));
      return;
    }
    case 'blog':
      push(`- **카테고리**: ${(d.categories || []).map(c => '`' + e(c) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'terms':
    case 'privacy': {
      const t = d.text || '';
      push(`- **본문 길이**: ${t.length.toLocaleString()}자`);
      if (t.length) {
        push(`- **본문 스니펫**:`);
        push();
        push(`  > ${e(t.slice(0, 300)).replace(/\n/g, ' ')}${t.length > 300 ? '…' : ''}`);
      } else {
        push(`- **본문**: *(미작성)*`);
      }
      return;
    }
    case 'apply_ref': {
      const tid = d.templateId;
      const tpl = tid ? templatesById[tid] : null;
      if (!tpl) {
        push(`- ⚠️ **참조 템플릿 없음** (ID: ${e(tid || '—')})`);
        return;
      }
      const tSite = WEBSITE_NAMES[tpl._site] || tpl._site || '—';
      push(`- **템플릿**: ${e(tpl.name)} (\`#${tpl.id}\`)`);
      push(`- **사이트**: ${tSite} (\`${e(tpl._site || '—')}\`)`);
      push(`- **formId**: \`${e(tpl._formId || '—')}\``);
      push(`- **선택 단계**: ${(d.phases || []).join(', ') || '*없음*'}`);
      push();
      (d.phases || []).forEach(ph => {
        const mods = (tpl.phases && tpl.phases[ph]) || [];
        push(`**${ph === 'part1' ? '1부' : '2부'}** (${mods.length}개 모듈)`);
        push();
        if (mods.length) {
          mods.forEach(mm => push(`- \`${e(mm)}\``));
          push();
        }
      });
      return;
    }
    case 'block_cat_multi':
      push(`- **축 수**: ${d.axes || 3}단 ${d.axes === 2 ? '(대→중)' : '(대→중→소)'}`);
      push(`- **다중 선택**: ${d.multi ? '허용' : '단일'}`);
      push(`- **선택된 카테고리**: ${(d.selected || []).length}개`);
      if ((d.selected || []).length) {
        push();
        (d.selected || []).forEach(c => push(`- \`${e(c)}\``));
      }
      return;
    case 'block_file_drop':
      push(`- **허용 확장자**: ${(d.accept || []).map(a => '`.' + e(a) + '`').join(', ') || '*제한 없음*'}`);
      push(`- **최대 용량**: ${d.maxMb || 50} MB`);
      push(`- **다중 업로드**: ${d.multi ? '허용' : '단일'}`);
      return;
    case 'block_ai_radio4':
      push(`- **모델 목록**: ${(d.models || []).length}개`);
      push();
      (d.models || []).forEach((mm, i) => {
        const isDefault = d.defaultIdx === i;
        push(`- ${isDefault ? '⭐ ' : ''}\`${e(mm)}\`${isDefault ? ' *(기본값)*' : ''}`);
      });
      return;
    case 'block_editor':
      push(`- **기본 모드**: ${d.defaultMode === 'nouse' ? '에디터 미사용' : '에디터 사용'}`);
      return;
    case 'block_human':
      push(`- **작업 유형**: ${(d.types || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      push(`- **전문가 등급**: ${(d.grades || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      if ((d.urgencies || []).length) {
        push(`- **긴급도**:`);
        push();
        d.urgencies.forEach(u => push(`- ${e(u.label)} (+${u.surcharge || 0}%)`));
      }
      return;
    case 'block_opts':
      push(`- **옵션**: ${(d.options || []).length}개`);
      push();
      (d.options || []).forEach(o => push(`- \`${e(o.id)}\` — ${e(o.label)} ${o.enabled ? '✅' : '⬜'}`));
      return;
    case 'block_lang_pair':
      push(`- **원문 언어**: ${(d.sources || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      push(`- **번역 언어**: ${(d.targets || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'block_quality':
      push(`- **표시 메트릭**: ${(d.metrics || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'block_regulation':
      push(`- **규정 세트**: \`${e(d.ruleSet || 'default')}\``);
      return;
    case 'block_textarea':
      if (d.placeholder) push(`- **Placeholder**: "${e(d.placeholder)}"`);
      push(`- **최소 높이**: ${d.minH || 260}px`);
      return;
  }
}

module.exports = { buildPrd };
