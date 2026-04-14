# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Work Studio (work_studio) — HutechC 데이터 창고 + 플러그인 공장. Express + better-sqlite3 서버로, 모든 소비자/외부인 접수 데이터를 단일 SQLite DB에 수집하고, 관리자 대시보드로 조회/관리한다. 수백 개 외부 사이트가 여기서 폼/선택기/채점 엔진을 가져다 쓴다.

## Commands

- **Start (prod):** `npm start`
- **Start (dev, auto-reload):** `npm run dev` — uses `node --watch`
- No test suite or linter configured.

## Key Documents

- **`plan.md`** — 실행 계획 (Phase 1~6)
- **`URL.md`** — 서비스 URL 목록
- **`apply.md`** — 신청서 모듈화 설계
- **`~/_final_info.md`** — 시스템 & 분류 통합 가이드 (마스터 문서)

## Architecture

### Backend (2 files)

- **`server.js`** — Express 서버. 범용 CRUD REST API (`/api/:table`), 신청서 설정 API (`/api/form-config/:site/:form?phase=part1|part2`), S3 presigned URL, SPA fallback. 시작 시 `migrateLegacySchema()` 1회 자동 실행 — 레거시 `modules[]→phases:{}`, `category→roleGroup/role` 멱등 마이그레이션.
- **`db.js`** — better-sqlite3 래퍼. `TABLES` 배열에 테이블명 추가 → 자동 `CREATE TABLE`. 모든 테이블: `(id, data TEXT, created_at)` — JSON blob 저장. 현재 23개 테이블 (regulations 포함).

### Frontend (public/)

- **`admin.html`** — 메인 관리자 SPA. 6개 뷰:
  - **대시보드**: 4카드 요약 + 홈페이지별 quadrant (4단)
  - **리스트**: 전체/테이블별 데이터 조회, 페이지네이션, 정렬
  - **신청서**: 모듈 기반 폼 템플릿 편집기 (공통/세부 모듈 조립)
  - **통계**: 접수 현황 카드 + 분포 바 차트
  - **콘텐츠**: 문제은행/커리큘럼/교재 관리
  - **현황**: 프로젝트 70개 항목 추적 (ai_studio/work_studio 분류)
- **`tesol-apply.html`** — TESOL 신청 페이지 (2단계 멀티스텝)
- **`level-test.html`** — 레벨테스트 페이지 (3섹션: 인트로/독해/에세이)
- **`cbt-admin.html`** — CBT 시험 관리
- **`form-engine/engine.js`** — 외부 사이트 embed 통합 폼 엔진

### 분류표 (5축)

모든 콘텐츠에 적용되는 분류 체계:
- **A**: 소재 분류 (문서/음성/영상/IT/창의/번역/프롬프트/확장영역)
- **B**: 시험 급수 (5종목: TESOL, AI번역, AI프롬프트, AI윤리, ITT정통번역 × 교육/비즈니스/전문 × 급수)
- **C**: 홈페이지 (교육/번역/통독/전시회/매칭/시험/그외)
- **D**: 담당 조직 (부서 + 팀)
- **E**: 역할/권한 (RBAC: 알바/신입/강사/팀장/개발/외부/임원/대표)

### Key Patterns

- 프론트엔드는 모두 vanilla JS, 빌드 도구 없음. HTML 파일 내 인라인으로 작성.
- CSS 클래스명 축약 (`.mn`=main, `.ca`=content area, `.qd`=quadrant 등).
- 환경 변수: `PORT`, `S3_BUCKET`, `S3_REGION`.
- API Gateway: `bmidcy9z17.execute-api.ap-northeast-2.amazonaws.com` → EC2.
- 외부 사이트(TESOL, 번역, 윤리 등)는 GitHub Pages에서 이 API로 데이터 전송.

### DB Tables (23개)

aiethics_applications, classic_inquiries, classic_specialist_apps, translation_contacts, translation_quotes, translation_translators, translation_integrated, translation_experts, translation_orders, level_test_submissions, story_posts, applications, cbt_results, members, form_templates, form_modules, tesol_expert_applications, questions, curriculum, textbooks, scorehub_submissions, scorehub_results, curriculum_files, regulations

### 신청서 모듈 스키마 (v2)

**form_modules** — 재사용 필드 그룹
```js
{
  moduleId: "common_identity",
  name: "기본 인적사항",
  roleGroup: "common"|"user"|"expert"|"admin",  // 3그룹 (+공통)
  role: "common"|"client"|"student"|"translator"|"instructor"|"specialist"|"admin",
  _rev: 2,           // 버전 (rev-upsert용)
  fields: [{ key, label, type, required, options?, scoreMax?, evaluable?, children? }]
  // type: text|tel|email|date|number|select|multiselect|textarea|checkbox|file|mcq4|short|ox|section
  // children: 재귀 계층 (채점관리식 드릴다운)
}
```

**form_templates** — 사이트별 신청서 조립
```js
{
  _site: "tesol", _formId: "instructor_apply",
  name: "강사 지원서 (C2)",
  _rev: 2,
  phases: {
    part1: ["common_identity","common_qualification",...],  // 1부 모듈
    part2: ["spec_instructor_expertise","common_narrative"]  // 2부 모듈
  },
  extraFields: []  // 1부 전용 추가 필드
}
```

**레거시 호환**: 기존 `modules:[...]`와 `category` 필드는 서버 시작 시 자동 마이그레이션. `*_part1/_part2` 형식 formId는 외부 embed용으로 유지, admin UI에서는 "레거시 포함" 토글로 노출.

### 규정 데이터 (regulations 테이블)

커리큘럼 SPA의 RegulationView가 사용. 한 행 = 한 규정 항목:
```js
{ _block: "common"|"unlabeled-A"|"translation"|"ethics",
  _tier: "fixed"|"semi"|"optional",
  no: 1, text: "...", _order: 0 }
```
첫 로드 시 `regulation-data.ts` 상수에서 자동 시드. CRUD는 `/api/regulations` 범용 엔드포인트 재사용.
