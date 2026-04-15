const COMMON_MODULE_LABELS = {
  banner:           { icon: '🎯', name: '히어로 배너',           cat: '레이아웃' },
  nav_section:      { icon: '🧭', name: '섹션 이동 네비',        cat: '레이아웃' },
  footer:           { icon: '⬇️', name: '푸터',                 cat: '레이아웃' },
  community_notice: { icon: '📢', name: '공지사항',             cat: '커뮤니티' },
  community_faq:    { icon: '❓', name: 'FAQ',                  cat: '커뮤니티' },
  community_qna:    { icon: '💬', name: 'Q&A',                  cat: '커뮤니티' },
  community_review: { icon: '⭐', name: '후기',                 cat: '커뮤니티' },
  inquiry:          { icon: '📧', name: '1:1 문의',              cat: '지원' },
  blog:             { icon: '📝', name: '블로그',               cat: '지원' },
  terms:            { icon: '📜', name: '이용약관',             cat: '법적' },
  privacy:          { icon: '🔐', name: '개인정보처리방침',     cat: '법적' },
};

const WEBSITE_NAMES = {
  tesol: 'TESOL', ai_trans: 'AI 번역', reading: '통독문서', ai_ethics: 'AI 윤리',
  exhibit: '전시/행사', cbt: '시험', matching: '전문가매칭', level_test: '레벨테스트',
  hutechc: '휴텍씨', iita: 'IITA협회', semiconductor: '반도체/조선/방산',
};

const BLOCK_LABELS = {
  cat_multi:     { name: '카테고리 선택',   desc: '대→중→소 다중선택',  src: '파일2/3' },
  file_drop:     { name: '파일 업로드',     desc: '드래그드롭 + 목록',   src: '파일2/3' },
  ai_radio4:     { name: 'AI 모델 선택',    desc: '4모델 라디오 그리드', src: '파일2/3' },
  editor_bool:   { name: '편집 에디터',     desc: '사용/미사용 토글',    src: '파일3' },
  human_3sel:    { name: '휴먼 작업 요청',  desc: '유형/등급/긴급도',    src: '파일3' },
  opts_toggle:   { name: '추가 옵션',       desc: '토글 확장 옵션',      src: '파일3' },
  lang_pair:     { name: '언어쌍',          desc: '원문→번역 언어',       src: '번역' },
  quality_panel: { name: '품질 대시보드',   desc: 'sticky 요약 + 비용',   src: '파일3' },
  regulation:    { name: '프롬 규정',       desc: '카테고리별 규칙',     src: '파일3' },
  textarea_big:  { name: '텍스트 입력',     desc: '큰 입력 영역',        src: '파일2' },
};

const STATUS_LABELS = {
  draft:     '📝 초안',
  published: '✅ 발행됨',
  archived:  '🗄️ 보관',
};

const e = (s) => String(s == null ? '' : s);

function buildPrd(hp, templates) {
  const lines = [];
  const push = (s = '') => lines.push(s);

  const siteName = hp.linkedSite ? (WEBSITE_NAMES[hp.linkedSite] || hp.linkedSite) : '—';
  const statusLabel = STATUS_LABELS[hp.status || 'draft'] || hp.status || '초안';

  // ── 헤더 ──────────────────────────────
  push(`# ${e(hp.name || '(이름 없음)')} — PRD`);
  push();
  push(`> **슬러그**: \`${e(hp.slug || '(미지정)')}\`  `);
  push(`> **연결 사이트**: ${siteName}  `);
  push(`> **상태**: ${statusLabel}  `);
  push(`> **생성일**: ${(hp._created || '').slice(0, 10) || '—'}  `);
  push(`> **마지막 발행**: ${(hp.deploy && hp.deploy.lastPublished) || '미발행'}`);
  push();

  // ── 목차 ──────────────────────────────
  push(`## 📑 목차`);
  push();
  push(`1. [개요](#1-개요)`);
  push(`2. [랜딩 페이지](#2-랜딩-페이지)`);
  push(`3. [공통 모듈](#3-공통-모듈)`);
  push(`4. [신청서 구성](#4-신청서-구성)`);
  push(`5. [선택 블록](#5-선택-블록)`);
  push(`6. [라우팅 & API](#6-라우팅--api)`);
  push(`7. [배포 정보](#7-배포-정보)`);
  push(`8. [빌더 설정 원본](#8-빌더-설정-원본)`);
  push();
  push(`---`);
  push();

  // ── 1. 개요 ───────────────────────────
  push(`## 1. 개요`);
  push();
  push(`- **이름**: ${e(hp.name)}`);
  push(`- **슬러그**: \`${e(hp.slug || '(미지정)')}\``);
  push(`- **연결 사이트**: ${siteName}`);
  push(`- **상태**: ${statusLabel}`);
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

  // ── 2. 랜딩 페이지 ────────────────────
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
      push(`- **검증 상태**: ✅ 성공 (${e(l.lastSync) || '최근'})`);
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
      push(`- **검증 상태**: ❌ 실패 *(유효하지 않은 URL 또는 접근 불가)*`);
    } else {
      push(`- **검증 상태**: ⏳ 미확인 *(빌더에서 [연결 테스트] 클릭)*`);
    }
  }
  push();
  push(`---`);
  push();

  // ── 3. 공통 모듈 ──────────────────────
  const cs = hp.commonState || {};
  const modOrder = Object.keys(COMMON_MODULE_LABELS);
  const enabledMods = modOrder.filter(k => cs[k] && cs[k].enabled);
  push(`## 3. 공통 모듈`);
  push();
  push(`활성 모듈: **${enabledMods.length}개** / 전체 ${modOrder.length}개`);
  push();

  if (!enabledMods.length) {
    push(`> *활성화된 공통 모듈이 없습니다.*`);
  } else {
    enabledMods.forEach((modId, i) => {
      const meta = COMMON_MODULE_LABELS[modId];
      const d = (cs[modId] && cs[modId].data) || {};
      push(`### 3.${i + 1} ${meta.icon} ${meta.name} \`${modId}\``);
      push();
      renderCommonModuleBody(push, modId, d);
      push();
    });
  }
  push(`---`);
  push();

  // ── 4. 신청서 구성 ────────────────────
  push(`## 4. 신청서 구성`);
  push();
  const applies = hp.applyTemplates || [];
  if (!applies.length) {
    push(`> *선택된 신청서 템플릿이 없습니다.*`);
  } else {
    push(`선택된 템플릿: **${applies.length}개**`);
    push();
    applies.forEach((at, i) => {
      const t = templates.find(tp => tp.id === at.templateId);
      if (!t) {
        push(`### 4.${i + 1} ⚠️ 템플릿 #${at.templateId} — 원본 없음`);
        push();
        push(`*이 템플릿은 삭제되었거나 접근할 수 없습니다.*`);
        push();
        return;
      }
      const tSite = WEBSITE_NAMES[t._site] || t._site || '—';
      push(`### 4.${i + 1} ${e(t.name || '(이름 없음)')} \`#${t.id}\``);
      push();
      push(`- **사이트**: ${tSite} (\`${e(t._site || '—')}\`)`);
      push(`- **formId**: \`${e(t._formId || '—')}\``);
      push(`- **선택 단계**: ${(at.phases || []).join(', ') || '*없음*'}`);
      push();

      ['part1', 'part2'].forEach(ph => {
        const selected = (at.phases || []).indexOf(ph) >= 0;
        const mods = (t.phases && t.phases[ph]) || [];
        if (!mods.length && !selected) return;
        push(`**${ph === 'part1' ? '1부' : '2부'}** ${selected ? '✅ 포함' : '⬜ 제외'} — ${mods.length}개 모듈`);
        push();
        if (mods.length) {
          mods.forEach(m => push(`- \`${e(m)}\``));
          push();
        }
      });
    });
  }
  push(`---`);
  push();

  // ── 5. 선택 블록 ──────────────────────
  push(`## 5. 선택 블록`);
  push();
  const blocks = hp.blocks || [];
  if (!blocks.length) {
    push(`> *추가된 블록이 없습니다.*`);
  } else {
    push(`적용된 블록: **${blocks.length}개** (표시 순서대로)`);
    push();
    blocks.forEach((b, i) => {
      const meta = BLOCK_LABELS[b.type] || { name: b.name || b.type, desc: '', src: '' };
      push(`### 5.${i + 1} ${e(meta.name)} \`${b.type}\``);
      push();
      if (meta.desc) push(`${e(meta.desc)}${meta.src ? ` · 출처: \`${e(meta.src)}\`` : ''}`);
      push();
      renderBlockBody(push, b.type, b.config || {});
      push();
    });
  }
  push(`---`);
  push();

  // ── 6. 라우팅 & API ───────────────────
  push(`## 6. 라우팅 & API`);
  push();
  push(`이 홈페이지 설정이 접수·표시하는 엔드포인트입니다.`);
  push();
  push(`| 요소 | 상세 | 메서드 | 엔드포인트 |`);
  push(`|------|------|--------|-----------|`);
  let hasRouting = false;
  applies.forEach(at => {
    const t = templates.find(tp => tp.id === at.templateId);
    if (!t) return;
    (at.phases || []).forEach(ph => {
      push(`| 신청서: ${e(t.name)} | ${ph} | POST | \`/api/applications\` |`);
      hasRouting = true;
    });
  });
  if (cs.community_notice && cs.community_notice.enabled) {
    const n = (cs.community_notice.data && cs.community_notice.data.items || []).length;
    push(`| 공지사항 | ${n}개 항목 (표시) | — | 인라인 렌더 |`);
    hasRouting = true;
  }
  if (cs.community_faq && cs.community_faq.enabled) {
    const n = (cs.community_faq.data && cs.community_faq.data.items || []).length;
    push(`| FAQ | ${n}개 항목 (표시) | — | 인라인 렌더 |`);
    hasRouting = true;
  }
  if (cs.community_qna && cs.community_qna.enabled) {
    push(`| Q&A | 질문 제출 | POST | \`/api/story_posts\` (category: qna) |`);
    hasRouting = true;
  }
  if (cs.community_review && cs.community_review.enabled) {
    push(`| 후기 | 후기 제출 | POST | \`/api/story_posts\` (category: review) |`);
    hasRouting = true;
  }
  if (cs.inquiry && cs.inquiry.enabled) {
    const nf = (cs.inquiry.data && cs.inquiry.data.fields || []).length;
    push(`| 1:1 문의 | ${nf}개 필드 | POST | \`/api/applications\` (_type: inquiry) |`);
    hasRouting = true;
  }
  if (!hasRouting) {
    push(`| — | *라우팅 대상이 없습니다* | — | — |`);
  }
  push();
  push(`> 외부 시스템에서 이 PRD를 가져오려면: \`GET /api/hp-prd/${e(hp.slug || '{slug}')}\``);
  push();
  push(`---`);
  push();

  // ── 7. 배포 정보 ──────────────────────
  push(`## 7. 배포 정보`);
  push();
  push(`- **슬러그**: \`${e(hp.slug || '(미지정)')}\``);
  push(`- **상태**: ${statusLabel}`);
  if (hp.slug) {
    push(`- **PRD 뷰어**: [/hp/${e(hp.slug)}](/hp/${e(hp.slug)})`);
    push(`- **Raw Markdown**: [/hp/${e(hp.slug)}.md](/hp/${e(hp.slug)}.md)`);
    push(`- **JSON API**: [/api/hp-prd/${e(hp.slug)}](/api/hp-prd/${e(hp.slug)})`);
  } else {
    push(`- **PRD 뷰어**: *(슬러그 미지정 — 빌더 Step 5에서 설정)*`);
  }
  if (hp.deploy && hp.deploy.lastPublished) {
    push(`- **마지막 발행**: ${e(hp.deploy.lastPublished)}`);
  }
  push();
  push(`---`);
  push();

  // ── 8. 빌더 설정 원본 ─────────────────
  push(`## 8. 빌더 설정 원본`);
  push();
  push(`<details>`);
  push(`<summary>📦 JSON 전체 보기 (클릭)</summary>`);
  push();
  push('```json');
  const cleaned = Object.assign({}, hp);
  delete cleaned._created;
  push(JSON.stringify(cleaned, null, 2));
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

function renderCommonModuleBody(push, modId, d) {
  switch (modId) {
    case 'banner':
      push(`- **제목**: ${d.title ? `"${e(d.title)}"` : '*(미설정)*'}`);
      push(`- **부제목**: ${d.subtitle ? `"${e(d.subtitle)}"` : '*(미설정)*'}`);
      push(`- **CTA**: ${d.ctaLabel ? `[${e(d.ctaLabel)}](${e(d.ctaUrl || '#')})` : '*(미설정)*'}`);
      if (d.image) push(`- **이미지**: [${e(d.image)}](${e(d.image)})`);
      return;
    case 'nav_section': {
      const secs = d.sections || [];
      if (!secs.length) {
        push(`*(섹션 미정의 — 홈페이지 구성에 따라 자동 생성됩니다)*`);
        return;
      }
      secs.forEach((s, i) => push(`${i + 1}. \`#${e(s.id)}\` — ${e(s.label)}`));
      return;
    }
    case 'footer':
      push(`- **회사명**: ${e(d.company) || '*(미설정)*'}`);
      push(`- **주소**: ${e(d.address) || '*(미설정)*'}`);
      push(`- **연락처**: ${e(d.contact) || '*(미설정)*'}`);
      push(`- **저작권**: ${e(d.copyright) || '*(미설정)*'}`);
      return;
    case 'community_notice': {
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
    case 'community_faq': {
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
    case 'community_qna':
      push(`- **게시 정책**: ${d.policy === 'manual' ? '🔒 관리자 승인' : '🌐 자동 공개'}`);
      push(`- **분류**: ${(d.categories || []).map(c => '`' + e(c) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'community_review':
      push(`- **표시 수**: 최근 ${d.limit || 10}개`);
      push(`- **정렬**: \`${e(d.sort || 'latest')}\``);
      return;
    case 'inquiry': {
      const labels = { name: '이름', email: '이메일', phone: '전화', company: '회사',
        title: '제목', content: '내용', file: '파일첨부', budget: '예산', deadline: '희망일' };
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
        push(`  > ${e(t.slice(0, 200)).replace(/\n/g, ' ')}${t.length > 200 ? '…' : ''}`);
      } else {
        push(`- **본문**: *(미작성)*`);
      }
      return;
    }
  }
}

function renderBlockBody(push, type, cfg) {
  switch (type) {
    case 'cat_multi':
      push(`- **축 수**: ${cfg.axes || 3}단 ${(cfg.axes === 2) ? '(대→중)' : '(대→중→소)'}`);
      push(`- **다중 선택**: ${cfg.multi ? '허용' : '단일'}`);
      push(`- **선택된 카테고리**: ${(cfg.selected || []).length}개`);
      if ((cfg.selected || []).length) {
        push();
        (cfg.selected || []).forEach(c => push(`- \`${e(c)}\``));
      }
      return;
    case 'file_drop':
      push(`- **허용 확장자**: ${(cfg.accept || []).map(a => '`.' + e(a) + '`').join(', ') || '*제한 없음*'}`);
      push(`- **최대 용량**: ${cfg.maxMb || 50} MB`);
      push(`- **다중 업로드**: ${cfg.multi ? '허용' : '단일'}`);
      return;
    case 'ai_radio4':
      push(`- **모델 목록**: ${(cfg.models || []).length}개`);
      push();
      (cfg.models || []).forEach((m, i) => {
        const isDefault = cfg.defaultIdx === i;
        push(`- ${isDefault ? '⭐ ' : ''}\`${e(m)}\`${isDefault ? ' *(기본값)*' : ''}`);
      });
      return;
    case 'editor_bool':
      push(`- **기본 모드**: ${cfg.defaultMode === 'nouse' ? '에디터 미사용' : '에디터 사용'}`);
      return;
    case 'human_3sel':
      push(`- **작업 유형**: ${(cfg.types || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      push(`- **전문가 등급**: ${(cfg.grades || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      push(`- **긴급도**:`);
      push();
      (cfg.urgencies || []).forEach(u => push(`- ${e(u.label)} (+${u.surcharge || 0}%)`));
      return;
    case 'opts_toggle':
      push(`- **옵션**: ${(cfg.options || []).length}개`);
      push();
      (cfg.options || []).forEach(o => push(`- \`${e(o.id)}\` — ${e(o.label)} ${o.enabled ? '✅' : '⬜'}`));
      return;
    case 'lang_pair':
      push(`- **원문 언어**: ${(cfg.sources || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      push(`- **번역 언어**: ${(cfg.targets || []).map(x => '`' + e(x) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'quality_panel':
      push(`- **표시 메트릭**: ${(cfg.metrics || []).map(m => '`' + e(m) + '`').join(', ') || '*(없음)*'}`);
      return;
    case 'regulation':
      push(`- **규정 세트**: \`${e(cfg.ruleSet || 'default')}\``);
      return;
    case 'textarea_big':
      push(`- **Placeholder**: "${e(cfg.placeholder || '')}"`);
      push(`- **최소 높이**: ${cfg.minH || 260}px`);
      return;
    default:
      push('```json');
      push(JSON.stringify(cfg, null, 2));
      push('```');
  }
}

module.exports = { buildPrd };
