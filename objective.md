# SAPD Website Master Documentation (Objective.md)

버전: 1.1
작성자: 한신대학교 공공인재빅데이터융합학부 이석민 (Seog-Min Lee)
목적: 본 문서는 웹사이트의 모든 콘텐츠, 프레임워크 정의, 포지셔닝 및 아키텍처 구조를 위한 공식 기준(Canonical reference) 문서이다.

---

# [국문 버전]

## 1. 핵심 정체성 (Core Identity)
- **주요 정체성**: 공공 전략 및 정책 의사결정 시스템 연구자 (Public Strategy and Policy Decision System Researcher)
- **조작적 정의**: 전략, 정책, 데이터, 평가, 그리고 AI를 통합하는 공공 의사결정 시스템의 연구 및 설계
- **핵심 패러다임 전환**: 증거 기반 정책(Evidence-based Policy) → 상태 기반 적응형 정책(State-based Adaptive Policy)
- **구현 프레임워크**: SAPD Framework — 상태 기반 적응형 정책을 실현하기 위한 5단계 의사결정 아키텍처

### 1.1 핵심 명제 (Core Thesis)
- 공공 정책은 고립된 개입이 아니다.
- 공공 정책은 적응적 의사결정 시스템의 산출물이다.
- 정책의 질은 의사결정 시스템의 구조에 달려 있다.

## 2. 패러다임 전환 (Paradigm Shift)
- **과거 모델 — 증거 기반 정책(Evidence-based Policy)**: 정책 → 실행 → 평가 → 정책 수정. 사후 평가 위주이며 정적이고 변환이 느림.
- **새로운 모델 — 상태 기반 적응형 정책(State-based Adaptive Policy)**: 의사결정 시스템 → 데이터 통합 → 평가 → 지속적 적응. 실시간 상태(State) 데이터를 통합하며 지속적으로 학습하고 진화함. SAPD Framework가 이를 구현하는 설계 아키텍처.

## 3. SAPD 프레임워크 아키텍처 (SAPD Framework Definition)
상태 기반 적응형 정책을 구현하기 위한 5단계 구조적 아키텍처:
1. **문제 구조화(Problem Structuring)**: 시스템의 경계와 정책 문제를 정의
2. **전략 구조화(Strategy Structuring)**: 전략적 구조와 성과 논리를 정의
3. **의사결정 아키텍처(Decision Architecture)**: 의사결정 노드, 권한, 기준을 정의
4. **데이터 통합(Data Integration)**: 데이터와 AI를 시스템에 통합
5. **평가 및 적응형 피드백(Evaluation & Adaptive Feedback)**: 지속적 평가 및 적응 메커니즘 제공

## 4. 시스템 작동 원리 및 시간 아키텍처 (System Dynamics & Temporal Architecture)
- 정책 시스템은 시간상 분절되어 작동하는 것이 아니라, 연속적인 상태 갱신 과정을 거침.
- 세 가지 핵심 요소로 구성:
  - **상태 변수 (State Variables)**: 시스템의 현재 조건(t)
  - **의사결정 변수 (Decision Variables)**: 의사결정자가 제어할 수 있는 변수
  - **의사결정 규칙 (Decision Rules)**: 상태에 따라 결정을 내리는 함수 (예: `Decision(t) = f(State(t))`)

## 5. AI의 역할 (Role of AI)
- AI는 패러다임을 혁신하는 도구로서, 패턴 탐지, 예측, 의사결정 지원 및 최적화를 담당함.
- 인간의 의사결정을 대체하는 것이 아니라 의사결정 시스템의 적응력을 강화함.

## 6. 웹사이트 구조 (Website Structure)

### 6.1 Home (메인)
- 정체성과 패러다임 전환을 소개하는 메인 공간.

### 6.2 Framework (프레임워크)
- SAPD 프레임워크의 상세 구조와 이론적 설명.

### 6.3 Research (연구)
- 아카이빙된 학술 연구 및 응용 방식 모델 전시.

### 6.4 Writing (글쓰기 / 인사이트)
- 개념적 에세이, 구조적 분석 및 프레임워크 확장을 다루는 블로그/칼럼 성격의 공간.

### 6.5 About (연구자 소개)
- 연구자 연혁, 연구 궤적, 지적 진화 과정 등.

### 6.6 Archive (데이터 기록)
- 출판물, 저서, 보고서 자료 제공.

### 6.7 강의 코너 (Lectures) - **[신규 추가]**
학기별 강의 소개 자료 및 교육 콘텐츠 제공

#### 1학기 (Semester 1) 강의과목
- **딥러닝자연어처리**
- **웹프로그래밍**
- **정책분석과 기획**
- **데이터사이언스**

#### 2학기 (Semester 2) 강의과목
- **LLMOPs & 데이터 엔지니어링**
- **딥러닝 영상데이터분석(geoAI)**
- **AI 에이전트 캡스톤**
- **정책분석평가론**

## 7. Next.js 구현 기술 명세 (Next.js Implementation Specification)
- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS, MDX
- **디자인 원칙**: 화려함보다 구조의 선명함을 강조, 정보의 위계 명확화, 시각적 과장 배제.
- **콘텐츠 소스**: Markdown (MDX) 파일 및 JSON 데이터 중심.

## 8. 장기 비전 (Long-term Vision)
- Phase 1: 학술적 체계화 (Academic articulation)
- Phase 2: 프레임워크 확산 (Framework dissemination)
- Phase 3: 응용 의사결정 시스템 설계 (Applied decision system design)
- Phase 4: 제도적 영향력 확대 (Institutional influence)

---

# [English Version (Structure Only)]

## 1. Core Identity
- 1.1 Positioning Statement
- 1.2 Core Thesis

## 2. Paradigm Shift
- 2.1 Traditional Model: Evidence-based Policy
- 2.2 New Model: State-based Adaptive Policy (implemented via SAPD Framework)

## 3. SAPD Framework Definition
- 3.1 Layer 1: Problem Structuring
- 3.2 Layer 2: Strategy Structuring
- 3.3 Layer 3: Decision Architecture
- 3.4 Layer 4: Data Integration
- 3.5 Layer 5: Evaluation and Adaptive Feedback

## 4. System Dynamics & Temporal Architecture
- Operational Key Components: State Variable, Decision Variable, Decision Rule

## 5. Role of AI

## 6. Website Structure
- 6.1 Home
- 6.2 Framework
- 6.3 Research
- 6.4 Writing
- 6.5 About
- 6.6 Archive
- **6.7 Lectures**
  - Semester 1: Deep Learning Natural Language Processing, Web Programming, Policy Analysis and Planning, Data Science
  - Semester 2: LLMOPs & Data Engineering, Deep Learning Image Data Analysis (geoAI), AI Agent Capstone, Policy Analysis and Evaluation Theory

## 7. Next.js Implementation Specification (Canonical)
- 7.1 Stack
- 7.2 Information Architecture (Routes)
- 7.3 Content Source & Formats

## 8. Long-term Vision
