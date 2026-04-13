#!/usr/bin/env node
/**
 * seed-dummy-applications.js — 테스트용 더미 신청서 12건
 *
 * 실행: node scripts/seed-dummy-applications.js
 *
 * 4 사이트 × 3 역할 × 다양한 단계·상태·등급으로 리스트/4단 UI 확인용.
 * 기존 더미(_dummy:true)는 삭제 후 재생성.
 */

const { db, getAll, insert, remove } = require('../db');

// ============================================================
//  DUMMY DATA
// ============================================================

function mkPart1({ name, nameEn, phone, email, gender, birthDate, nationality, subject, grade, func, industry, domain, layer, extra = {} }) {
  return {
    name, nameEn, birthDate, gender,
    phone, email,
    address: '서울시 강남구 테헤란로',
    nationality,
    tax_subject: subject,
    tax_grade: grade,
    tax_function: func,
    tax_industry: industry,
    tax_domain: domain,
    tax_layer: layer,
    privacyConsent: true,
    marketingConsent: false,
    ...extra
  };
}

const DUMMIES = [
  // ─── TESOL ────────────────────────────────────
  {
    _site: 'tesol', _formId: 'student_part1', _role: 'student', _phase: 'part1', _status: 0,
    _dummy: true, _notes: '방금 접수 · 담당자 확인 필요',
    part1: mkPart1({
      name: '김수빈', nameEn: 'Kim Subin', phone: '010-1111-2222', email: 'subin.kim@example.com',
      gender: '여', birthDate: '2002-03-15', nationality: '내국인',
      subject: ['TESOL 영어교육'], grade: '교육', func: ['문서', '음성'], industry: '교육',
      domain: '대학입시', layer: [],
      extra: { stu_goal: 'TESOL 자격증 취득', stu_self_level: '중급', stu_exp: '1~3년', stu_available: ['평일 저녁', '주말 오전'] }
    })
  },
  {
    _site: 'tesol', _formId: 'instructor_part1', _role: 'instructor', _phase: 'interview', _status: 3,
    _dummy: true, _notes: '면접 예정 · 4/15 오후 2시',
    part1: mkPart1({
      name: '박지훈', nameEn: 'Park Jihun', phone: '010-2222-3333', email: 'jihun.park@example.com',
      gender: '남', birthDate: '1989-06-20', nationality: '내국인',
      subject: ['TESOL 영어교육', 'AI 프롬프트'], grade: '일반(비즈니스)', func: ['문서', 'IT/개발'], industry: '교육,IT',
      domain: '성인교육', layer: ['윤리'],
      extra: { ins_careerYears: 8, ins_subjects: ['TESOL 영어교육', 'AI 프롬프트'], ins_grades: ['교육 5~8급', '일반 1~3급'], ins_mode: ['온라인', '블렌디드'], ins_available: '평일 오후, 주말 전일', ins_oneLine: '10년차 영어 강사 · AI 활용 특화' }
    }),
    call: { at: '2026-04-14T13:00', by: '박실장', notes: '통화 완료. 면접 의사 있음.', next: 'interview' },
    interview: { at: '2026-04-15T14:00', by: '김팀장', score: { communication: 5, expertise: 4, attitude: 5, availability: 4 }, total: 18, memo: '커뮤니케이션 우수, 다방면 경력' }
  },
  {
    _site: 'tesol', _formId: 'expert_part2', _role: 'expert', _phase: 'part2', _status: 3,
    _dummy: true, _notes: '2부 제출 완료 · 자료 검토 중',
    part1: mkPart1({
      name: '이승호', nameEn: 'Lee Seungho', phone: '010-3333-4444', email: 'seungho.lee@example.com',
      gender: '남', birthDate: '1978-11-03', nationality: '내국인',
      subject: ['TESOL 영어교육', 'ITT 정통 통번역'], grade: '전문', func: ['문서', '음성'], industry: '법률,의료',
      domain: '법률문서', layer: ['번역'],
      extra: { exp_specialty: '법률 통번역 및 TESOL 감수', exp_careerYears: 18, exp_highlight: '대법원 사건 통역 30건', exp_form: ['서면 자문', '미팅 자문', '워크샵'], exp_rate: '시간당 30~50만원' }
    }),
    part2: {
      exp_skillDetail: 'CAT 도구 전문(Trados, MemoQ) + AI 기반 Quality Check 워크플로우 설계',
      exp_projects: '1) 대법원 민사 통역 30건 (2020~2023) 2) 의료기기 매뉴얼 번역 200페이지 (2024) 3) 국제 학술대회 동시 통역 5회 (2025)',
      exp_industryExp: '법률사무소 5년 + 국제 제약사 3년',
      exp_refs: '김변호사 010-9999-8888 / 대한통역사협회 추천'
    },
    call: { at: '2026-04-10T10:00', by: '박실장', notes: '전문성 우수. 2부 요청.', next: 'part2' },
    interview: { at: '2026-04-12T15:00', by: '대표', score: { communication: 5, expertise: 5, attitude: 5, availability: 3 }, total: 18, memo: '최고 수준' }
  },

  // ─── AI 번역 ────────────────────────────────
  {
    _site: 'ai_trans', _formId: 'instructor_part1', _role: 'instructor', _phase: 'part1', _status: 1,
    _dummy: true, _notes: '확인 완료. 통화 대기',
    part1: mkPart1({
      name: '최은지', nameEn: 'Choi Eunji', phone: '010-4444-5555', email: 'eunji.choi@example.com',
      gender: '여', birthDate: '1992-09-10', nationality: '내국인',
      subject: ['AI 번역/통역', 'AI 프롬프트'], grade: '일반(비즈니스)', func: ['문서', '번역 방법론'], industry: '번역,IT',
      domain: '기계번역 후편집', layer: ['번역'],
      extra: { ins_careerYears: 5, ins_subjects: ['AI 번역/통역'], ins_grades: ['교육 1~4급'], ins_mode: ['온라인'], ins_available: '평일 저녁, 주말', ins_oneLine: 'MTPE 실무 강사' }
    })
  },
  {
    _site: 'ai_trans', _formId: 'expert_part1', _role: 'expert', _phase: 'final', _status: 4,
    _dummy: true, _notes: '최종 A등급 확정 · 계약 체결 대기',
    part1: mkPart1({
      name: '정민재', nameEn: 'Jung Minjae', phone: '010-5555-6666', email: 'minjae.jung@example.com',
      gender: '남', birthDate: '1985-04-25', nationality: '내국인',
      subject: ['AI 번역/통역'], grade: '전문', func: ['문서', 'IT/개발', '번역 방법론'], industry: '번역,테크',
      domain: 'LLM 번역 파이프라인', layer: ['번역', '윤리'],
      extra: { exp_specialty: 'LLM 기반 번역 파이프라인 설계', exp_careerYears: 12, exp_highlight: 'DeepL 엔지니어 출신', exp_form: ['서면 자문', '워크샵'], exp_rate: '건당 100~300만원' }
    }),
    part2: {
      exp_skillDetail: 'Python·Rust 기반 번역 파이프라인, BLEU/COMET 평가, 도메인 적응',
      exp_projects: '1) DeepL 번역 엔진 2년 2) 국내 법률 번역 파이프라인 구축 3) 의료 번역 품질 평가 시스템',
      exp_industryExp: '번역 테크 12년',
      exp_refs: 'GitHub: jmj-translator'
    },
    call: { at: '2026-04-05T11:00', by: '박실장', notes: '자문 가능', next: 'interview' },
    interview: { at: '2026-04-08T14:00', by: '대표', score: { communication: 5, expertise: 5, attitude: 5, availability: 4 }, total: 19, memo: '강력 추천' },
    final: { final_autoScore: 92, final_manualScore: 95, final_grade: 'A', final_reason: '전문성·경력·의지 전부 최상. 장기 자문 우선 배정', decidedBy: '대표', decidedAt: '2026-04-10T09:00' }
  },

  // ─── AI 윤리 ────────────────────────────────
  {
    _site: 'ai_ethics', _formId: 'expert_part1', _role: 'expert', _phase: 'part1', _status: 2,
    _dummy: true, _notes: '통화 완료 · 면접 예약 대기',
    part1: mkPart1({
      name: '한세영', nameEn: 'Han Seyoung', phone: '010-6666-7777', email: 'seyoung.han@example.com',
      gender: '여', birthDate: '1980-12-18', nationality: '내국인',
      subject: ['AI 윤리'], grade: '전문', func: ['문서'], industry: '법률,AI',
      domain: 'AI 거버넌스', layer: ['윤리', '보안'],
      extra: { exp_specialty: 'AI 거버넌스 및 윤리 감사', exp_careerYears: 10, exp_highlight: 'EU AI Act 컨설팅 5건', exp_form: ['서면 자문', '미팅 자문'], exp_rate: '시간당 25~40만원' }
    }),
    call: { at: '2026-04-11T14:00', by: '김매니저', notes: '관심 많음. 면접 일정 조율 중.', next: 'interview' }
  },
  {
    _site: 'ai_ethics', _formId: 'instructor_part2', _role: 'instructor', _phase: 'final', _status: 4,
    _dummy: true, _notes: '최종 B등급 · 교육과정 수요에 따라 배정',
    part1: mkPart1({
      name: '윤태준', nameEn: 'Yoon Taejun', phone: '010-7777-8888', email: 'taejun.yoon@example.com',
      gender: '남', birthDate: '1991-02-14', nationality: '내국인',
      subject: ['AI 윤리'], grade: '일반(비즈니스)', func: ['문서', '창의적 활동'], industry: '교육',
      domain: '기업 윤리', layer: ['윤리'],
      extra: { ins_careerYears: 6, ins_subjects: ['AI 윤리'], ins_grades: ['교육 1~4급', '일반 1~3급'], ins_mode: ['오프라인', '온라인'], ins_available: '평일 전일', ins_oneLine: '기업 윤리·AI 가이드라인 실무자' }
    }),
    part2: {
      ins_teachExp: '2020~ 현재 기업 대상 윤리 교육 50건+, 대학원 AI 윤리 특강 8회',
      ins_demoUrl: 'https://youtube.com/example',
      ins_textbook: '기업 AI 윤리 가이드북 공저',
      ins_lms: ['Zoom', 'Google Classroom']
    },
    call: { at: '2026-04-02T10:30', by: '박실장', notes: '교수법 양호', next: 'interview' },
    interview: { at: '2026-04-05T11:00', by: '김팀장', score: { communication: 4, expertise: 4, attitude: 4, availability: 5 }, total: 17, memo: '' },
    final: { final_autoScore: 72, final_manualScore: 75, final_grade: 'B', final_reason: '기초 탄탄. 사내 세미나 강사로 시작 권장', decidedBy: '대표', decidedAt: '2026-04-07T14:00' }
  },

  // ─── 휴텍씨 ────────────────────────────────
  {
    _site: 'hutechc', _formId: 'student_part1', _role: 'student', _phase: 'part1', _status: 0,
    _dummy: true, _notes: '',
    part1: mkPart1({
      name: '오지원', nameEn: 'Oh Jiwon', phone: '010-8888-9999', email: 'jiwon.oh@example.com',
      gender: '여', birthDate: '1999-07-21', nationality: '내국인',
      subject: ['AI 프롬프트', 'AI 번역/통역'], grade: '교육', func: ['문서', 'IT/개발'], industry: '스타트업',
      domain: '콘텐츠 마케팅', layer: [],
      extra: { stu_goal: '실무에 AI 적용하고 싶어요', stu_self_level: '초급', stu_exp: '1년 미만', stu_available: ['평일 저녁'] }
    })
  },
  {
    _site: 'hutechc', _formId: 'instructor_part1', _role: 'instructor', _phase: 'part1', _status: 1,
    _dummy: true, _notes: '포트폴리오 확인 필요',
    part1: mkPart1({
      name: '강나라', nameEn: 'Kang Nara', phone: '010-9999-0000', email: 'nara.kang@example.com',
      gender: '여', birthDate: '1994-05-08', nationality: '내국인',
      subject: ['AI 프롬프트'], grade: '일반(비즈니스)', func: ['문서', '프롬프트', '창의적 활동'], industry: '마케팅,콘텐츠',
      domain: '브랜드 카피라이팅', layer: [],
      extra: { ins_careerYears: 4, ins_subjects: ['AI 프롬프트'], ins_grades: ['교육 1~4급', '교육 5~8급'], ins_mode: ['온라인'], ins_available: '평일 낮', ins_oneLine: '마케팅 프롬프트 전문' }
    })
  },
  {
    _site: 'hutechc', _formId: 'expert_part1', _role: 'expert', _phase: 'interview', _status: 3,
    _dummy: true, _notes: '',
    part1: mkPart1({
      name: '장혜린', nameEn: 'Jang Hyerin', phone: '010-0000-1111', email: 'hyerin.jang@example.com',
      gender: '여', birthDate: '1983-10-30', nationality: '내국인',
      subject: ['ITT 정통 통번역', 'AI 번역/통역'], grade: '전문', func: ['음성', '번역 방법론'], industry: '외교,국제회의',
      domain: '동시통역', layer: ['번역'],
      extra: { exp_specialty: 'EN/ZH/KO 동시통역', exp_careerYears: 15, exp_highlight: 'APEC 정상회담 공식 통역', exp_form: ['미팅 자문', '현장 지원'], exp_rate: '일일 100~200만원' }
    }),
    call: { at: '2026-04-09T16:00', by: '박실장', notes: '고급 자원', next: 'interview' },
    interview: { at: '2026-04-12T10:00', by: '대표', score: { communication: 5, expertise: 5, attitude: 4, availability: 3 }, total: 17, memo: '일정 조율 필요' }
  },
  {
    _site: 'hutechc', _formId: 'student_part2', _role: 'student', _phase: 'final', _status: 4,
    _dummy: true, _notes: '수강 확정',
    part1: mkPart1({
      name: '서준호', nameEn: 'Seo Junho', phone: '010-1212-3434', email: 'junho.seo@example.com',
      gender: '남', birthDate: '2001-01-05', nationality: '내국인',
      subject: ['AI 프롬프트'], grade: '교육', func: ['IT/개발', '프롬프트'], industry: 'IT',
      domain: '소프트웨어 개발', layer: [],
      extra: { stu_goal: 'AI 엔지니어 전향', stu_self_level: '중급', stu_exp: '1~3년', stu_available: ['평일 저녁', '주말 전일'] }
    }),
    part2: {
      stu_history: '파이썬 독학 2년, GPT API 프로젝트 3건',
      stu_weakness: 'LLM 이론 부족',
      stu_strength: '코딩 실력, 프로젝트 추진력',
      stu_hours: 20
    },
    call: { at: '2026-04-03T15:00', by: '김매니저', notes: '학습 동기 강함', next: 'part2' },
    final: { final_autoScore: 85, final_manualScore: 88, final_grade: 'A', final_reason: '기초·의지 우수. 장기 수강 추천', decidedBy: '대표' }
  }
];

// ============================================================
//  MAIN
// ============================================================

function clearDummies() {
  const all = getAll('applications');
  let n = 0;
  for (const r of all) {
    try {
      const d = JSON.parse(r.data || '{}');
      if (d._dummy === true) { remove('applications', r.id); n++; }
    } catch {}
  }
  return n;
}

function main() {
  console.log('─'.repeat(60));
  console.log(' Clearing previous dummies');
  console.log('─'.repeat(60));
  const cleared = clearDummies();
  console.log(`  removed ${cleared} dummy rows`);

  console.log('');
  console.log('─'.repeat(60));
  console.log(' Seeding ' + DUMMIES.length + ' dummy applications');
  console.log('─'.repeat(60));

  for (const d of DUMMIES) {
    // Merge engine.js-style metadata
    const payload = {
      _site: d._site,
      _formId: d._formId,
      _role: d._role,
      _phase: d._phase,
      _status: d._status,
      _submitted: true,
      _notes: d._notes || '',
      _dummy: true,
      _createdAt: new Date().toISOString(),
      part1: d.part1
    };
    if (d.call) payload.call = d.call;
    if (d.interview) payload.interview = d.interview;
    if (d.part2) payload.part2 = d.part2;
    if (d.final) payload.final = d.final;

    const { id } = insert('applications', payload);
    const name = d.part1.name;
    console.log(`  [id=${id}]  ${d._site.padEnd(10)} ${d._formId.padEnd(18)} ${d._role.padEnd(10)} phase=${d._phase.padEnd(10)} status=${d._status}  ${name}`);
  }

  console.log('');
  console.log('─'.repeat(60));
  console.log(` Done. ${DUMMIES.length} rows inserted.`);
  console.log('─'.repeat(60));
  db.close();
}

main();
