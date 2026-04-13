#!/usr/bin/env node
/**
 * seed-forms.js — 신청서 모듈·템플릿 시드 (idempotent)
 *
 * 실행: node scripts/seed-forms.js
 *
 * 기존 레코드는 moduleId(모듈) 또는 _site+_formId(템플릿)로 찾아 update.
 * 없으면 insert. 반복 실행 안전.
 */

const { db, getAll, insert, update } = require('../db');

// ============================================================
//  1. MODULES — 16개 (공통 2 + 역할×단계 12 + 내부 2)
// ============================================================

const MODULES = [
  // ─── 공통 (1부) ─────────────────────────────────
  {
    moduleId: 'M-COM-IDENT',
    name: '기본 인적사항',
    category: 'common',
    version: 1,
    fields: [
      { key: 'name',        label: '성명',     type: 'text',  required: true,  placeholder: '홍길동' },
      { key: 'nameEn',      label: '영문명',   type: 'text',  required: false, placeholder: 'Hong Gildong' },
      { key: 'birthDate',   label: '생년월일', type: 'date',  required: false },
      { key: 'gender',      label: '성별',     type: 'select',required: false, options: ['남', '여', '기타'] },
      { key: 'phone',       label: '연락처',   type: 'tel',   required: true,  placeholder: '010-1234-5678' },
      { key: 'email',       label: '이메일',   type: 'email', required: true,  placeholder: 'you@example.com' },
      { key: 'address',     label: '주소',     type: 'text',  required: false, placeholder: '서울시 강남구…' },
      { key: 'nationality', label: '국적',     type: 'select',required: false, options: ['내국인', '외국인', '재외국인'] }
    ]
  },
  {
    moduleId: 'M-COM-TAX',
    name: '분류 5축 (관심/가능 영역)',
    category: 'common',
    version: 1,
    fields: [
      { key: 'tax_subject',  label: '과목 (멀티)', type: 'multiselect', required: true,
        options: ['TESOL 영어교육', 'AI 프롬프트', 'AI 번역/통역', 'AI 윤리', 'ITT 정통 통번역'] },
      { key: 'tax_grade',    label: '급수 구분', type: 'select', required: true,
        options: ['교육', '일반(비즈니스)', '전문'] },
      { key: 'tax_function', label: '기능 (멀티)', type: 'multiselect', required: false,
        options: ['문서', '영상/SNS', '음성', 'IT/개발', '창의적 활동', '번역 방법론', '프롬프트', '확장 영역'] },
      { key: 'tax_industry', label: '산업 분야', type: 'text', required: false,
        placeholder: '예: 법률, 의료, 교육, 금융, IT, 제조' },
      { key: 'tax_domain',   label: '전문 영역', type: 'text', required: false,
        placeholder: '예: 민사소송, 심혈관, 대학입시' },
      { key: 'tax_layer',    label: '레이어 (멀티)', type: 'multiselect', required: false,
        options: ['번역', '윤리', '보안'] },
      { key: 'privacyConsent',   label: '개인정보 수집 및 이용에 동의합니다', type: 'checkbox', required: true },
      { key: 'marketingConsent', label: '마케팅 정보 수신에 동의합니다 (선택)', type: 'checkbox', required: false }
    ]
  },

  // ─── 학생 ────────────────────────────────────
  {
    moduleId: 'M-STU-Q',
    name: '학생 스킬 간단 체크',
    category: 'student',
    version: 1,
    fields: [
      { key: 'stu_goal',       label: '학습 목표', type: 'textarea', required: true,
        placeholder: '무엇을 배우고 싶으신가요?' },
      { key: 'stu_self_level', label: '현재 레벨 자가평가', type: 'select', required: true,
        options: ['초급', '중급', '상급', '매우 상급'] },
      { key: 'stu_exp',        label: '관련 학습 경험', type: 'select', required: false,
        options: ['없음', '1년 미만', '1~3년', '3년 이상'] },
      { key: 'stu_available',  label: '희망 수업 시간대', type: 'multiselect', required: false,
        options: ['평일 오전', '평일 오후', '평일 저녁', '주말 오전', '주말 오후', '주말 저녁'] }
    ]
  },
  {
    moduleId: 'M-STU-SKILL',
    name: '학생 스킬 상세',
    category: 'student',
    version: 1,
    fields: [
      { key: 'stu_history',  label: '학습 경험 상세', type: 'textarea', required: false,
        placeholder: '이전에 수강한 과정·독학 경험 등' },
      { key: 'stu_weakness', label: '약점/어려움', type: 'textarea', required: false },
      { key: 'stu_strength', label: '강점',         type: 'textarea', required: false },
      { key: 'stu_hours',    label: '주간 학습 가능 시간 (시간)', type: 'number', required: false }
    ]
  },
  {
    moduleId: 'M-STU-ADD',
    name: '학생 추가 정보',
    category: 'student',
    version: 1,
    fields: [
      { key: 'stu_school',     label: '학교/소속', type: 'text', required: false },
      { key: 'stu_major',      label: '전공/학과', type: 'text', required: false },
      { key: 'stu_english',    label: '영어 수준', type: 'select', required: false,
        options: ['기초', '중급', '상급', '원어민 수준'] },
      { key: 'stu_certs',      label: '보유 자격증', type: 'textarea', required: false },
      { key: 'stu_motivation', label: '지원 동기',   type: 'textarea', required: true }
    ]
  },
  {
    moduleId: 'M-STU-RES',
    name: '학생 첨부 서류',
    category: 'student',
    version: 1,
    fields: [
      { key: 'file_transcript', label: '성적표 (PDF)', type: 'file', required: false },
      { key: 'file_selfintro',  label: '자기소개서',   type: 'file', required: false }
    ]
  },

  // ─── 강사 ────────────────────────────────────
  {
    moduleId: 'M-INS-Q',
    name: '강사 스킬 간단 체크',
    category: 'instructor',
    version: 1,
    fields: [
      { key: 'ins_careerYears', label: '강의 경력 (년)', type: 'number', required: true },
      { key: 'ins_subjects',    label: '강의 가능 과목', type: 'multiselect', required: true,
        options: ['TESOL 영어교육', 'AI 프롬프트', 'AI 번역/통역', 'AI 윤리', 'ITT 정통 통번역'] },
      { key: 'ins_grades',      label: '강의 가능 급수', type: 'multiselect', required: false,
        options: ['교육 1~4급', '교육 5~8급', '일반 1~3급', '전문 1~2급'] },
      { key: 'ins_mode',        label: '수업 방식', type: 'multiselect', required: false,
        options: ['오프라인', '온라인', '블렌디드'] },
      { key: 'ins_available',   label: '가능 요일/시간', type: 'textarea', required: false,
        placeholder: '예: 평일 저녁, 주말 오전' },
      { key: 'ins_oneLine',     label: '강사 한 줄 소개', type: 'text', required: false }
    ]
  },
  {
    moduleId: 'M-INS-SKILL',
    name: '강사 스킬 상세',
    category: 'instructor',
    version: 1,
    fields: [
      { key: 'ins_teachExp', label: '주요 수업 경력 (연도·기관·과목)', type: 'textarea', required: true },
      { key: 'ins_demoUrl',  label: '시범 강의 URL', type: 'url', required: false,
        placeholder: 'YouTube, Vimeo 등' },
      { key: 'ins_textbook', label: '교재 개발 경험', type: 'textarea', required: false },
      { key: 'ins_lms',      label: '사용 가능한 LMS/도구', type: 'multiselect', required: false,
        options: ['Moodle', 'Canvas', 'Zoom', 'Google Classroom', 'MS Teams', '직접 개발', '기타'] }
    ]
  },
  {
    moduleId: 'M-INS-ADD',
    name: '강사 추가 정보',
    category: 'instructor',
    version: 1,
    fields: [
      { key: 'ins_edu',       label: '학력',                type: 'textarea', required: true },
      { key: 'ins_certs',     label: '자격/인증',           type: 'textarea', required: false },
      { key: 'ins_rate',      label: '희망 단가 (시간당)',  type: 'text', required: false },
      { key: 'ins_condition', label: '수업 조건/요청사항',  type: 'textarea', required: false }
    ]
  },
  {
    moduleId: 'M-INS-RES',
    name: '강사 첨부 서류',
    category: 'instructor',
    version: 1,
    fields: [
      { key: 'file_resume',         label: '이력서 (PDF)',    type: 'file', required: true },
      { key: 'file_cert',           label: '자격증 스캔',     type: 'file', required: false },
      { key: 'file_portfolio',      label: '강의 포트폴리오', type: 'file', required: false },
      { key: 'file_recommendation', label: '추천서',          type: 'file', required: false }
    ]
  },

  // ─── 전문가 ──────────────────────────────────
  {
    moduleId: 'M-EXP-Q',
    name: '전문가 스킬 간단 체크',
    category: 'expert',
    version: 1,
    fields: [
      { key: 'exp_specialty',   label: '전문 분야', type: 'text', required: true,
        placeholder: '예: LLM 파인튜닝, 저작권 자문, 의료 통번역' },
      { key: 'exp_careerYears', label: '경력 (년)', type: 'number', required: true },
      { key: 'exp_highlight',   label: '대표 이력 1줄', type: 'text', required: true,
        placeholder: '예: OpenAI API 기반 법률 챗봇 3건 납품' },
      { key: 'exp_form',        label: '자문 가능 형태', type: 'multiselect', required: false,
        options: ['서면 자문', '미팅 자문', '워크샵', '현장 지원'] },
      { key: 'exp_rate',        label: '희망 단가 범위', type: 'text', required: false,
        placeholder: '예: 시간당 20~40만원' }
    ]
  },
  {
    moduleId: 'M-EXP-SKILL',
    name: '전문가 스킬 상세',
    category: 'expert',
    version: 1,
    fields: [
      { key: 'exp_skillDetail', label: '전문 스킬 상세', type: 'textarea', required: true,
        placeholder: '사용 가능 도구, 방법론, 전문성의 경계' },
      { key: 'exp_projects',    label: '대표 프로젝트 3건', type: 'textarea', required: true,
        placeholder: '프로젝트별 기간/역할/결과' },
      { key: 'exp_industryExp', label: '산업 경력', type: 'textarea', required: false },
      { key: 'exp_refs',        label: '레퍼런스', type: 'textarea', required: false,
        placeholder: '추천인 연락처 또는 공개 링크' }
    ]
  },
  {
    moduleId: 'M-EXP-ADD',
    name: '전문가 추가 정보',
    category: 'expert',
    version: 1,
    fields: [
      { key: 'exp_edu',   label: '학력', type: 'textarea', required: true },
      { key: 'exp_certs', label: '자격/인증', type: 'textarea', required: false },
      { key: 'exp_pubs',  label: '저술/특허/논문', type: 'textarea', required: false },
      { key: 'exp_ptype', label: '참여 가능 프로젝트 유형', type: 'multiselect', required: false,
        options: ['자문', '교육', '집필', '개발', '검토', '기타'] }
    ]
  },
  {
    moduleId: 'M-EXP-RES',
    name: '전문가 첨부 서류',
    category: 'expert',
    version: 1,
    fields: [
      { key: 'file_resume',    label: '이력서 (PDF)', type: 'file', required: true },
      { key: 'file_portfolio', label: '포트폴리오',    type: 'file', required: false },
      { key: 'file_works',     label: '대표 산출물',   type: 'file', required: false }
    ]
  },

  // ─── 내부 (면접·최종) ────────────────────────
  {
    moduleId: 'M-INT-SCORE',
    name: '면접 점수표 (내부)',
    category: 'internal',
    version: 1,
    fields: [
      { key: 'int_communication', label: '커뮤니케이션 (1~5)', type: 'number', required: true, min: 1, max: 5 },
      { key: 'int_expertise',     label: '전문성 (1~5)',       type: 'number', required: true, min: 1, max: 5 },
      { key: 'int_attitude',      label: '태도 (1~5)',         type: 'number', required: true, min: 1, max: 5 },
      { key: 'int_availability',  label: '가용성 (1~5)',       type: 'number', required: true, min: 1, max: 5 },
      { key: 'int_memo',          label: '메모',               type: 'textarea', required: false }
    ]
  },
  {
    moduleId: 'M-FINAL',
    name: '최종 등급 (내부)',
    category: 'internal',
    version: 1,
    fields: [
      { key: 'final_autoScore',   label: '자동 점수 (1부+2부+면접 가중)', type: 'number', required: false },
      { key: 'final_manualScore', label: '수동 점수', type: 'number', required: false },
      { key: 'final_grade',       label: '최종 등급', type: 'select', required: true, options: ['A', 'B', 'C', 'D'] },
      { key: 'final_reason',      label: '사유',      type: 'textarea', required: false }
    ]
  }
];

// ============================================================
//  2. TEMPLATES — 사이트 × 역할 × 단계 매트릭스 → 20개
// ============================================================

const ROLE_NAMES = {
  student:    '학생 (수강)',
  instructor: '강사',
  expert:     '전문가'
};

const ROLE_MODULES = {
  student: {
    part1: ['M-COM-IDENT', 'M-COM-TAX', 'M-STU-Q'],
    part2: ['M-STU-SKILL', 'M-STU-ADD', 'M-STU-RES']
  },
  instructor: {
    part1: ['M-COM-IDENT', 'M-COM-TAX', 'M-INS-Q'],
    part2: ['M-INS-SKILL', 'M-INS-ADD', 'M-INS-RES']
  },
  expert: {
    part1: ['M-COM-IDENT', 'M-COM-TAX', 'M-EXP-Q'],
    part2: ['M-EXP-SKILL', 'M-EXP-ADD', 'M-EXP-RES']
  }
};

const SITE_ROLE_MATRIX = [
  { site: 'tesol',     roles: ['student', 'instructor', 'expert'] },
  { site: 'ai_trans',  roles: ['instructor', 'expert'] },
  { site: 'ai_ethics', roles: ['instructor', 'expert'] },
  { site: 'hutechc',   roles: ['student', 'instructor', 'expert'] }
];

function buildTemplates() {
  const list = [];
  for (const { site, roles } of SITE_ROLE_MATRIX) {
    for (const role of roles) {
      for (const phase of ['part1', 'part2']) {
        const phaseLabel = phase === 'part1' ? '1부' : '2부';
        const mods = ROLE_MODULES[role][phase];
        const steps = phase === 'part1'
          ? [[mods[0]], [mods[1], mods[2]]]
          : [[mods[0]], [mods[1]], [mods[2]]];
        list.push({
          _site: site,
          _formId: `${role}_${phase}`,
          _role: role,
          _phase: phase,
          name:        `${ROLE_NAMES[role]} · ${phaseLabel}`,       // legacy admin.html fm.name
          displayName: `${ROLE_NAMES[role]} 신청서 · ${phaseLabel}`,
          shortName:   `${ROLE_NAMES[role]} · ${phaseLabel}`,
          modules: mods,
          steps,
          version: 1
        });
      }
    }
  }
  return list;
}

const TEMPLATES = buildTemplates();

// ============================================================
//  3. UPSERT HELPERS
// ============================================================

function upsertModule(mod) {
  const all = getAll('form_modules');
  const existing = all.find(r => {
    try { return JSON.parse(r.data).moduleId === mod.moduleId; } catch { return false; }
  });
  if (existing) {
    update('form_modules', existing.id, mod);
    return { action: 'updated', id: existing.id };
  }
  const { id } = insert('form_modules', mod);
  return { action: 'inserted', id };
}

function upsertTemplate(tpl) {
  const all = getAll('form_templates');
  const existing = all.find(r => {
    try {
      const d = JSON.parse(r.data);
      return d._site === tpl._site && d._formId === tpl._formId;
    } catch { return false; }
  });
  if (existing) {
    update('form_templates', existing.id, tpl);
    return { action: 'updated', id: existing.id };
  }
  const { id } = insert('form_templates', tpl);
  return { action: 'inserted', id };
}

// ============================================================
//  4. MAIN
// ============================================================

function main() {
  console.log('─'.repeat(60));
  console.log(' Seeding form_modules (' + MODULES.length + ')');
  console.log('─'.repeat(60));
  const modStats = { inserted: 0, updated: 0 };
  for (const m of MODULES) {
    const r = upsertModule(m);
    modStats[r.action]++;
    console.log(`  [${r.action.padEnd(8)}] ${m.moduleId.padEnd(14)} id=${r.id}  ${m.name}`);
  }

  console.log('');
  console.log('─'.repeat(60));
  console.log(' Seeding form_templates (' + TEMPLATES.length + ')');
  console.log('─'.repeat(60));
  const tplStats = { inserted: 0, updated: 0 };
  for (const t of TEMPLATES) {
    const r = upsertTemplate(t);
    tplStats[r.action]++;
    console.log(`  [${r.action.padEnd(8)}] ${t._site.padEnd(10)} / ${t._formId.padEnd(18)} id=${r.id}  ${t.shortName}`);
  }

  console.log('');
  console.log('─'.repeat(60));
  console.log(' Summary');
  console.log('─'.repeat(60));
  console.log(`  modules:   inserted=${modStats.inserted}  updated=${modStats.updated}`);
  console.log(`  templates: inserted=${tplStats.inserted}  updated=${tplStats.updated}`);
  console.log('');

  db.close();
}

main();
