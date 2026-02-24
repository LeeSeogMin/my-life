# Next.js 기반 홈페이지 웹 프로그래밍 계획서

이 계획서는 프레임워크 설계 중심의 포트폴리오 겸 개념 아카이브 웹사이트를 체계적으로 제작하기 위한 파이프라인입니다.

## 1단계: 프로젝트 기획 및 정보 구조(IA) 확정 (요구사항 기획)
- **정보 아키텍처(IA) 설계**: `objective.md`에서 정의한 사이트 구조(Home, Framework, Research, Writing, About, Archive, Lectures)에 맞추어 메뉴 트리 확정.
- **디자인 컨셉 문서화**: 학술적이고 미니멀한 톤을 유지하기 위한 타이포그래피, 레이아웃, 다이어그램 표시 규칙 등 디자인 원칙 정립.
- **데이터 모델링**: Archive(출판물, 보고서)와 Lectures(강의 구성)를 위해 필요한 JSON 구조 및 마크다운(MDX) 파일의 메타데이터(Title, Date, Description 등) 속성 정의.

## 2단계: 개발 환경 및 기본 아키텍처 세팅 (Initialization)
- **Next.js 프로젝트 생성**: Node.js 환경에서 최신 App Router 기반으로 프로젝트 초기화 (`npx create-next-app@latest`)
- **기술 스택 적용**: TypeScript(정적 타입 체크용) 및 Tailwind CSS(스타일링용) 설정.
- **마크다운 렌더링 환경 구축**: `next-mdx-remote` 혹은 `@next/mdx` 패키지를 연동하여, 로컬 폴더에 작성한 마크다운 파일(`.mdx`)을 화면에 렌더링하도록 설정.

## 3단계: 공통 UI 및 레이아웃 컴포넌트 개발 (UI Framework)
- **전체 레이아웃 제작**: `RootLayout`을 구성하고, 전역으로 쓰일 내비게이션 바(Header) 및 푸터(Footer) 개발.
- **테마 및 타이포그래피 세팅**: Tailwind 설정(`tailwind.config.ts`)을 통해 선명하고 가독성 높은 폰트 및 컬러 팔레트 적용.
- **다목적 컴포넌트 구현**: 본문을 감싸는 Section 컨테이너, 다이어그램/강조 문구를 보여줄 Callout 박스, 논문/강의 등을 표시할 Card 등 재사용 가능한 컴포넌트 제작.

## 4단계: 핵심 페이지 라우팅 및 화면 구현 (Page Implementation)
- **정적 페이지 구성**: `/` (Home, 패러다임 전환 소개), `/framework` (PSDS 프레임워크), `/about` (연구자 소개) 등.
- **동적 라우팅 구현**: 
  - `/writing` 및 `/writing/[slug]`: 작성된 에세이나 칼럼 동적 조회 기능.
  - `/lectures` 및 학기별 안내 페이지: 1학기/2학기 강의 개요 및 구조화 데이터 연출.
  - `/archive`: 출판물 및 아카이브 목록 구성.

## 5단계: 콘텐츠/데이터 연동 및 시각화 (Content Integration)
- 기존 마크다운(MDX) 파일 및 구조화된 JSON(강의, 출판물) 데이터와 Next.js 화면을 바인딩.
- 필요한 경우 핵심 프레임워크(예: PSDS 5 레이어, Decision Variables 구조)를 인포그래픽(SVG) 혹은 Mermaid.js 지원으로 렌더링 처리.

## 6단계: SEO 최적화 및 접근성 작업 (SEO & Optimization)
- 각 페이지별로 적절한 `meta tag` 구성 (Title, Description, OpenGraph 등).
- `next-sitemap` 등을 활용하여 검색 엔진 로봇이 수집할 수 있도록 사이트맵 자동화.
- 모바일(반응형 지원), 웹 접근성을 고려한 시맨틱 태그(Semantic HTML) 준수 검사.

## 7단계: 테스트 및 실서버 배포 (Deployment)
- 로컬 빌드 테스트(`npm run build`)를 통한 오류 점검.
- 코드 버저닝(GitHub 저장소 활용).
- **Vercel 연동 관리**: GitHub 푸시와 동시에 동작하는 자동 빌드 및 배포(CI/CD) 환경 구성.
- 필요 시, 커스텀 도메인(예: 본인 이름 또는 브랜드 닷컴) 연결 설정.
