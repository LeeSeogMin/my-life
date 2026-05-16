---
title: my-life 의 SAPD 위치 — project/sapd doctrine 의 publication interface + 양방향 흐름 명문화
status: Accepted
date: 2026-05-16
supersedes: []
related:
  - /Users/callii/Documents/project/sapd/docs/adr/0001-cross-layer-governance-overlay.md
  - /Users/callii/Documents/project/sapd/paper/sapd.md (§3.4 Cross-layer Governance Overlay)
  - /Users/callii/Documents/project/sapd/README.md (공통 SAPD doctrine — 얇은 4 요소 + 5 번째 횡단 차원)
notes_to: []
---

# ADR-0001: my-life 의 SAPD publication interface 위치 + 양방향 흐름

## Context

`my-life` 는 이석민 교수 (한신대) 의 academic portfolio 사이트 (Next.js 16, Tailwind CSS v4, Supabase, deployed at my-life-six-pi.vercel.app) 로 다음 콘텐츠를 노출한다.

- `/framework` — SAPD 프레임워크 설명
- `/research` — 연구 소개
- `/projects` — 프로토타입·연구 프로젝트
- `/writings/columns/[slug]` — 칼럼 (MDX)
- `/about`, `/contact`, `/lectures`, `/archive`, `/community`

`my-life/sapd/` 폴더에는 SAPD 관련 내부 작업 메모 (`00-current-status.md` · `01-action-plan.md` · `02-dev-strategy.md` · `CLAUDE.md` · `docs/`) 가 있다.

본 my-life 의 SAPD 콘텐츠는 `/Users/callii/Documents/project/sapd/` 의 doctrine 과 어휘·구조 차이를 갖고 있었다:
- 약어 풀이: my-life 일부 = "Systematic Adaptive Policy Design", project = "State-based Adaptive Policy Design"
- 5 Layer 분해: my-life = 문제구조화·전략구조화·의사결정아키텍처·데이터통합·평가피드백, project = 상태정의·감지네트워크·전환판단·행위포트폴리오·학습환류
- 핵심 형식론: my-life = `Decision(t) = f(State(t))`, project = `Decision(t) = f(State(t); θ)` (θ 누락)
- 3 instance 구조 (sapd-care · sapd-policy · sapd-gateway): my-life 에 노출 ❌
- Validation Module (실무층): my-life 자체 명칭, project doctrine 에 같은 명칭 ❌

본 차이를 정합하기 위해 my-life 의 SAPD 콘텐츠 갱신이 필요하다. 단 정합 방향이 어느 흐름인가는 별도 결정 사항이다.

## Decision

### 1. 본 결정 한 줄

my-life 는 `project/sapd` doctrine 의 **외부 공개 인터페이스 (publication interface)** 로 자리 부여하며, doctrine ↔ my-life 양방향 정보 흐름을 명문화한다. my-life 는 sapd-care · sapd-policy · sapd-gateway 와 동등한 의미의 도메인 인스턴스가 아니다.

### 2. doctrine 단일 기준 채택

`project/sapd/paper/sapd.md` (이석민, 2026, 단일 진실원) 와 `project/sapd/README.md` 의 "공통 SAPD doctrine — 얇은 4 요소 + 5 번째 횡단 차원" 절이 my-life 의 SAPD 노출 콘텐츠의 공식 기준이다. my-life 의 framework 페이지·intro.mdx·sapd/ 폴더 작업 문서는 모두 이 doctrine 의 풀어쓰기·노출 인터페이스로 작성된다.

### 3. publication interface 의 본질

my-life 의 SAPD 콘텐츠는 다음 두 역할을 한다.

- **doctrine 노출** (doctrine → my-life): doctrine 의 5 요소 (형식적 순환 · 5 기능 분해 · 사이버네틱스 정박 · 3 차 적응 위계 + 민주적 정당성 제약 · Cross-layer Governance Overlay) 를 학생·정책 실무자·교양 독자 청중에 맞게 풀어 쓴다. footer 에 "본 페이지는 project/sapd doctrine 의 publication interface — 학술 원본: paper/sapd.md" 명시.
- **운영화 산출물 정리** (my-life → doctrine): Cross-layer Governance Overlay 의 운영 보조 자료 (4 국 AI 거버넌스 구조 비교 · 10 차원 × 5 단계 감사 가능성 평가 체계 · 6 개 참조 감사 체계) 를 정리한다. 이 산출물은 doctrine 명제의 학술적 정당화 근거가 아니라 doctrine 의 인스턴스 적용을 보조하는 운영화 자료이다 (`project/sapd ADR-0001` 의 입장과 정합).

### 4. 양방향 흐름의 비대칭성

doctrine ↔ my-life 의 정보 흐름은 양방향이나 비대칭이다.

- **doctrine 차원의 결정** (구조·명칭·핵심 명제·5 요소) 은 project/sapd 가 단독 결정한다. my-life 변화는 doctrine 핵심 명제에 영향 ❌.
- **운영화 산출물 차원** 은 my-life 가 발전시키고, paper 에는 운영화 산출물 예시로 갱신 검토된다 (학술 정당화 근거 ❌).
- **publication 차원** 은 doctrine 갱신에 따라 my-life 가 동기화 의무.

이 비대칭은 doctrine 의 학술 정직성 (외부 자기 웹사이트의 운영 모듈이 이론 정당화 근거로 보이는 위험 회피) 과 운영 자산의 학술 인용 가능성 (운영화 보조 자료로의 명문화) 을 양립시키는 trade-off 이다.

### 5. monorepo · submodule 관계

my-life 는 `project/sapd` monorepo 의 submodule 로 등록 ❌. my-life 의 git repo 는 별 자율 유지. doctrine ↔ my-life 의 정보 흐름은 두 git repo 사이의 명문화된 정보 흐름이며 코드 차원의 submodule 등록은 없다.

## Consequences

### 1. my-life 갱신 의무 (본 결정으로 트리거)

다음 작업이 트리거된다.

- `sapd/CLAUDE.md:7` 의 약어 풀이 + 한 줄 정의 갱신 (완료, 2026-05-16)
- `src/app/framework/page.tsx` 의 5 Layer (문제구조화·전략구조화·의사결정아키텍처·데이터통합·평가피드백) 폐기 → doctrine 의 L1~L5 (상태 정의·감지 네트워크·전환 판단·행위 포트폴리오·학습 환류) + Cross-layer Governance Overlay 어휘로 갱신
- 핵심 형식론 수정: `Decision(t) = f(State(t))` → `Decision(t) = f(State(t); θ)` (θ 파라미터 복원)
- Validation Module 자리를 "Cross-layer Governance Overlay 의 운영화 산출물 정리 인터페이스" 로 어휘 갱신 (또는 풀이판 명칭 보존 + CONTEXT.md 매핑 명문화)
- 3 instance 구조 (sapd-care · sapd-policy · sapd-gateway) 의 위계 표시 — `/research` 또는 `/framework` 페이지에 doctrine 컨테이너 위계 노출
- footer 명시: "본 페이지는 project/sapd doctrine 의 publication interface — 학술 원본: paper/sapd.md"
- `sapd/00-current-status.md` · `01-action-plan.md` · `02-dev-strategy.md` 옷 작업 문서를 doctrine 정합으로 재작성
- `CONTEXT.md` 신설 (doctrine 어휘 ↔ my-life 풀이판 어휘 매핑 + 양방향 흐름의 비대칭성 정의)

### 2. doctrine 갱신 시 자동 동기화 의무

`project/sapd/README.md` "doctrine 정합 의무" 절차상 doctrine 의 5 요소가 갱신되면 my-life 의 SAPD 노출 콘텐츠도 정합 갱신 의무가 자동 발생한다. 갱신 시점·범위는 본 git repo 의 my-life 작성자 (이석민) 가 결정.

### 3. 운영화 산출물 발전 시 paper 갱신 검토 의무

my-life 안에서 정리된 운영화 산출물 (현재 4 국 AI 거버넌스 비교 · 10 차원 × 5 단계 루브릭) 이 진화하면 paper §3.4.6 의 운영화 산출물 예시 절에 갱신 검토 의무. 단 my-life 산출물은 doctrine 명제의 학술적 정당화 근거가 아니라 인스턴스 적용 보조 자료이므로 학술 인용 가능 형태로의 정리는 doctrine 작성자 (project/sapd) 의 학술 차원 결정.

## 대안 (rejected)

- **(a) 단방향 추종 (my-life → 단순 노출, doctrine ← my-life 영향 ❌)**: my-life 의 운영화 자산이 doctrine 으로 흘러가는 경로가 닫혀 doctrine 의 운영화 부재 위험. 패널 8/8 양방향 동의와 codex consult 의 양방향 추천을 거부하는 결정.
- **(b) 새 instance 등록 (my-life = sapd-edu / sapd-portfolio 등 3 번째 도메인 인스턴스)**: my-life 의 도메인이 sapd-care (돌봄 행정) · sapd-policy (거시 정책 분석) 와 동등한 의미의 도메인 인스턴스로 정의되지 않으므로 채택하지 않음.
- **(c) doctrine 흡수 (my-life 의 SAPD 콘텐츠 폐기 + project/sapd 의 외부 노출 페이지로 통합)**: my-life 의 독자 정체성 (academic portfolio + 칼럼 + 강의 + 커뮤니티) 과 doctrine 컨테이너의 학술 정체성을 분리하지 않게 됨. 두 정체성 분리가 publication interface 본질에 정합.

## References

- `/Users/callii/Documents/project/sapd/docs/adr/0001-cross-layer-governance-overlay.md` (2026-05-16) — doctrine 차원 결정
- `/Users/callii/Documents/project/sapd/paper/sapd.md` §3.4 "Cross-layer Governance Overlay: 5층 횡단 통제 차원" 절
- `/Users/callii/Documents/project/sapd/README.md` "공통 SAPD doctrine — 얇은 4 요소 + 5 번째 횡단 차원" 절
- codex consult (0.130.0, 2026-05-16) — 양방향 흐름 추천 + 학술 정직성 약점 지적
- 가상 전문가 패널 8 분야 검토 (2026-05-16) — 8/8 양방향 흐름 동의

## Notes

본 결정은 my-life 의 git repo 의 첫 ADR 이며 `docs/adr/` 디렉토리가 본 결정으로 신설되었다.

본 결정의 검토 과정에서 사용자 (이석민) 는 비용 우선 frame 을 명시적으로 거부하고 "학술 + 실무 시스템 구축에서 가장 타당한 방법" 원칙을 적용하였다. 양방향 흐름의 비대칭성 (doctrine 차원은 project 단독, 운영화 차원은 양방향) 은 이 원칙 위에서 학술 정직성과 운영 자산화의 trade-off 를 의식적으로 선택한 결과이다.
