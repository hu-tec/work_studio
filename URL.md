# HutechC 서비스 URL 목록

## AWS 인프라

| 서비스 | URL | 비고 |
|--------|-----|------|
| EC2 서버 | `54.116.15.136` | hutechc 계정, t3.micro, 버지니아 리전 |
| API Gateway (HTTPS) | `bmidcy9z17.execute-api.ap-northeast-2.amazonaws.com` | 홈페이지→EC2 HTTPS 프록시 |
| S3 버킷 | `work-studio-uploads` | 파일 업로드용 |

## work_studio (포트 80 → 3000)

| 서비스 | URL | 비고 |
|--------|-----|------|
| 관리자 (홈피 업무) | `54.116.15.136` | admin / admin |
| TESOL 신청 | `54.116.15.136/tesol-apply` | |
| 레벨테스트 | `54.116.15.136/level-test` | |
| CBT 관리 | `54.116.15.136/cbt-admin.html` | |
| GitHub | `hu-tec/work_studio` | |

## ai_studio (포트 81 → 3001)

| 서비스 | URL | 비고 |
|--------|-----|------|
| React SPA (직원 업무) | `54.116.15.136:81/app/` | |
| 관리자 대시보드 | `54.116.15.136:81/admin.html` | |
| 업무일지 | `54.116.15.136:81/app/work-log` | admin: /work-log/admin |
| 규정관리 | `54.116.15.136:81/app/rules-mgmt` | |
| 규정편집 | `54.116.15.136:81/app/rules-editor` | |
| TESOL관리 | `54.116.15.136:81/app/tesol` | **이관 완료 → work_studio** |
| GitHub | `hu-tec/ai_studio` | |

## 홈페이지 (GitHub Pages)

| 사이트 | URL | GitHub |
|--------|-----|--------|
| TESOL | `hu-tec.github.io/TESOL/` | hu-tec/TESOL |
| 휴텍씨 | `hu-tec.github.io/company_hutec/` | hu-tec/company_hutec |
| 번역 | `hu-tec.github.io/translation-hub/` | hu-tec/translation-hub |
| 윤리 | `hu-tec.github.io/ai-ethics/` | hu-tec/ai-ethics |
| 고전번역 | `hu-tec.github.io/classic-translation/` | hu-tec/classic-translation |
| 대표님 | `hu-tec.github.io/personal_page/` | hu-tec/personal_page |

## 신청폼 → 백엔드 연결

| 신청폼 | 경로 | 백엔드 | 테이블 |
|--------|------|--------|--------|
| TESOL 신청 | `TESOL/apply/orientation` | ai_studio → **work_studio로 이관 필요** | `tesol_expert_applications` |
| 윤리 전문가 신청 | `ai-ethics/join` | work_studio | `aiethics_applications` |
| 고전번역 문의+전문가 | `classic-translation/support` | work_studio | `classic_inquiries`, `classic_specialist_apps` |
| 번역 문의/견적/번역사 등 | `translation-hub/contact` | work_studio | `translation_*` (6개 폼) |
| 대표님 블로그 | `personal_page/story` | work_studio | `story_posts` (CRUD) |
