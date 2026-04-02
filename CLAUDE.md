# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Work Studio (work_studio) — HutechC 홈페이지 업무 통합 백엔드. Express + better-sqlite3 서버로, 여러 사이트(번역, 고전번역, AI윤리, CBT 등)의 폼 제출 데이터를 단일 SQLite DB에 수집하고, 관리자 대시보드로 조회/관리한다.

## Commands

- **Start (prod):** `npm start`
- **Start (dev, auto-reload):** `npm run dev` — uses `node --watch`
- No test suite or linter configured.

## Architecture

### Backend (2 files)

- **`server.js`** — Express 서버. 범용 CRUD REST API (`/api/:table`), S3 presigned URL 업로드 endpoint, SPA fallback. 모든 테이블을 동일한 CRUD 패턴으로 처리.
- **`db.js`** — better-sqlite3 래퍼. `TABLES` 배열에 테이블명을 추가하면 자동으로 `CREATE TABLE IF NOT EXISTS` 실행. 모든 테이블은 동일한 스키마 `(id, data TEXT, created_at)` — 실제 데이터는 `data` 컬럼에 JSON blob으로 저장.

새 데이터 유형 추가 시: `db.js`의 `TABLES` 배열에 테이블명만 추가하면 API가 자동으로 동작한다.

### Frontend (public/)

- **`admin.html`** — 메인 관리자 SPA. 로그인, 사이드바(카테고리별 테이블), Quadrant 대시보드, 테이블 목록/상세 뷰를 단일 HTML 파일에 인라인 CSS+JS로 구현. API 키 인증 사용 (`x-api-key` 헤더).
- **`cbt-admin.html`** — AITe CBT 시험 관리 전용 페이지 (문제 관리, 시험 결과 조회).
- **`form-engine/engine.js`** — 외부 사이트에 embed되는 통합 신청 폼 엔진. `FormEngine.init()` 으로 설정하면 multi-step 폼을 자동 생성. source/type 파라미터로 어느 사이트의 어떤 신청 유형인지 구분.

### Key Patterns

- 프론트엔드는 모두 vanilla JS, 빌드 도구 없음. HTML 파일 내 인라인으로 작성.
- CSS 클래스명이 극도로 축약됨 (`.sb`=sidebar, `.mn`=main, `.ca`=content area 등).
- 환경 변수: `PORT`, `S3_BUCKET`, `S3_REGION`.
