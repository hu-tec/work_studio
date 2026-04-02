# Work Studio — 실행 계획

> 기반 지식: `_final_info.md` (HutechC 시스템 & 분류 통합 가이드) 참조

## 이 프로젝트의 역할

**데이터 창고 + 플러그인 공장** — 모든 소비자/외부인 접수 데이터가 여기에 모이고, 수백 개 사이트가 여기서 폼/선택기/채점 엔진을 가져다 쓴다.

---

## 현재 상태 (2026-04)

| 항목 | 상태 |
|------|------|
| Express + SQLite 서버 | ✅ 운영 중 (EC2, PM2) |
| 범용 CRUD API (`/api/:table`) | ✅ 20개 테이블 |
| admin.html (대시보드+리스트+신청서관리) | ✅ 운영 중 |
| 폼 엔진 (`form-engine/engine.js`) | ✅ 운영 중 |
| TESOL 신청 (`/tesol-apply`) | ✅ 운영 중 |
| 레벨테스트 (`/level-test`) | ✅ 운영 중 |
| CBT 관리 (`cbt-admin.html`) | ✅ 운영 중 |
| 신청서 모듈 시스템 (form_modules + form_templates) | ✅ 기본 구현 |
| form-config API (외부 사이트용) | ✅ 구현 |
| 분류표 5축 데이터 (admin.html JS 상수) | ✅ 구현 (단일소스 아님) |
| 문제은행/커리큘럼/교재 테이블 | ✅ 생성됨 (관리 UI 미구현) |
| 플러그인 아키텍처 (`plugins/`) | ❌ 미구현 |
| 모듈 아키텍처 (`modules/data-definitions/`) | ❌ 미구현 |
| RBAC (역할 기반 접근 제어) | ❌ 미구현 |

---

## Phase 1: 이관 수령 (ai_studio → work_studio)

ai_studio에 잘못 들어가 있는 소비자 기능 25개 수령. 상세: `_tmp_pages.md`

### 즉시 처리 (구현된 2개)

| 항목 | 작업 | 비고 |
|------|------|------|
| TESOL 신청서 | ✅ 완료 | `tesol-apply.html` + `tesol_expert_applications` 테이블 |
| 레벨테스트 | ✅ 완료 | `level-test.html` + `level_test_submissions` 테이블 |

### 라우트만 있는 23개

대부분 ai_studio에 `ComingSoon.tsx` 스텁만 있음. work_studio 관점에서는:
- 소비자 접수 6개 → 신청서 모듈 시스템으로 폼 생성 (코드 작성 불필요)
- 관리자 도구 5개 → admin.html에서 이미 데이터 조회 가능
- 홈페이지/랜딩 11개 → 별개 사이트로 독립 운영, work_studio API만 연결
- 문제은행 1개 → Phase 3에서 구현

---

## Phase 2: 모듈/플러그인 아키텍처

### 2-1. 분류표 데이터 단일 소스화

현재: admin.html JS 상수 (`FIELDS`, `LEVELS`, `SITES`) + form_modules DB
목표: `modules/data-definitions/` JSON 파일이 단일 소스

```
modules/data-definitions/
├── fields.json          ← A소재 분류 대중소 트리
├── levels.json          ← B급수 5종목 × 3구분 × 급수
├── sites.json           ← C홈페이지 목록 + 하위 분류
├── departments.json     ← D담당 조직 (부서 + 팀)
└── roles.json           ← E역할 + 권한 매트릭스
```

admin.html, form-engine, 플러그인 모두 이 파일을 참조.

### 2-2. 플러그인 구축

| 플러그인 | 용도 | 우선순위 |
|----------|------|----------|
| `plugins/form/` | 신청폼 (form-engine 리팩토링) | 높음 |
| `plugins/field-selector/` | 종목×소재 선택기 | 중간 |
| `plugins/grade-selector/` | 종목×급수 선택기 | 중간 |
| `plugins/scoring-engine/` | 채점 엔진 | 낮음 (ScoreHub 연동 시) |

각 플러그인은 `<script src="..." data-site="tesol"></script>` 한 줄로 동작.

---

## Phase 3: 콘텐츠 관리 UI

admin.html에 탭 추가:

| 탭 | 테이블 | 핵심 기능 | 분류 기준 |
|----|--------|----------|----------|
| **문제은행** | `questions` | 문제 CRUD, 난이도, 정답, 해설 | B종목 × A소재 × B급수 |
| **커리큘럼** | `curriculum` | 주차별 관리, 학습목표 | B종목 × B급수 |
| **교재** | `textbooks` | 단원, 파일 업로드(S3) | B종목 × B급수 |

공통: 분류표 5축 태그 + 종목×급수 교차 필터

### 종목×소재 히트맵 (대시보드)

문제/커리/교재가 어느 교차점에 집중되어 있는지 시각화.

---

## Phase 4: RBAC (역할 기반 접근 제어)

### 4-1. DB 설계

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL,        -- E역할: 알바/신입/강사/팀장/개발/외부/임원/대표
  team TEXT,                 -- D팀: 강사팀-AI번역, 문제은행팀-프롬프트, 등
  created_at DATETIME DEFAULT (datetime('now','localtime'))
);
```

### 4-2. 권한 매트릭스 (미들웨어)

| 역할 | 조회 | 입력 | 편집 | 삭제 | 승인 | 시스템설정 | 데이터 범위 |
|------|------|------|------|------|------|-----------|------------|
| 알바 | ○ | — | — | — | — | — | 배정된 업무만 |
| 신입 | ○ | ○ | — | — | — | — | 소속 팀 테이블 |
| 강사 | ○ | ○ | ○ | — | — | — | 소속 종목 전체 |
| 팀장 | ○ | ○ | ○ | ○ | — | — | 소속 팀 전체 |
| 개발 | ○ | ○ | ○ | ○ | — | ○ | 전체 (기술 운영) |
| 외부 | ○ | ○ | — | — | — | — | 계약 범위만 |
| 임원 | ○ | ○ | ○ | ○ | ○ | — | 전체 데이터 |
| 대표 | ○ | ○ | ○ | ○ | ○ | ○ | 전체 + 최종 결재 |

D팀이 **범위**(어떤 테이블), E역할이 **동작**(무엇을 할 수 있는지).

### 4-3. admin.html 반영

로그인 → 역할+팀 판별 → 허용 테이블/동작만 UI에 표시.

---

## Phase 5: 폼 엔진 고도화

현재 `form-engine/engine.js`를 모듈 기반으로 리팩토링:

1. form_modules DB에서 공통/세부 모듈 로드
2. form_templates DB에서 조립 순서 로드
3. 외부 사이트에서 `FormEngine.init({ site: 'tesol', form: 'teacher_apply' })` 호출
4. API(`/api/form-config/:site/:form`)로 모듈 가져와서 자동 조립 → 렌더링

---

## 우선순위 요약

| 순서 | Phase | 핵심 산출물 | 의존성 |
|------|-------|-----------|--------|
| 1 | 이관 수령 | ✅ 완료 | — |
| 2 | 데이터 단일소스 | `modules/data-definitions/*.json` | — |
| 3 | 콘텐츠 관리 UI | 문제은행/커리/교재 탭 | Phase 2 |
| 4 | 플러그인 | form, field-selector, grade-selector | Phase 2 |
| 5 | RBAC | users 테이블, 미들웨어, UI | — |
| 6 | 폼 엔진 고도화 | 모듈 기반 자동 조립 | Phase 2, 4 |
