# Literature Search Skill - 자료 수집 방법론

## 목적
도서 집필에 필요한 학술 자료, 정부 문서, 국제기구 보고서를 체계적으로 수집합니다.

## 사용 시점
- Phase 2: 사례 카드, 통계 은행, 참고문헌 구축
- Phase 3: 집필 중 추가 자료 필요 시
- Phase 4: 약한 챕터 보강 시

## 수집 소스 (SAPD 도서)

### 국제 기준
- EU AI Act 원문 및 가이드라인
- OECD AI 원칙 및 이행 보고서
- NIST AI Risk Management Framework
- UNESCO AI 윤리 권고

### 한국 제도
- AI 기본법 (국회 제정 경과)
- 국가 AI 윤리 기준
- 공공기관 AI 도입 가이드라인
- 개인정보보호법 자동화 결정 조항
- 행정기본법 자동적 처분 조항
- 나라장터 공공조달 절차

### 학술 자료
- XAI: DARPA XAI 프로그램, LIME/SHAP 논문
- 공정성: Chouldechova-Kleinberg 불가능 정리
- 정책분석: 인과추론 방법론 (저자 기존 저서 참조)
- AI 거버넌스: 주요 학술지 (Science, Nature, AAAI)

### 사례
- 네덜란드 아동수당 알고리즘 사건
- 미국 COMPAS 재범 예측 편향
- 캐나다 알고리즘 영향 평가(AIA) 제도
- 뉴질랜드 알고리즘 헌장
- 한국 공공 AI 도입 사례

## 자료 저장 방식

웹 검색으로 수집한 원본 자료를 `book2_research/`에 직접 다운로드하여 로컬 보관한다.

### 저장 폴더 구조

| 폴더 | 저장 대상 | 파일명 규칙 |
|------|----------|------------|
| `papers/` | 학술 논문 PDF | `저자_연도_키워드.pdf` (예: `chouldechova_2017_fairness.pdf`) |
| `reports/` | 정부·국제기구 보고서 PDF | `기관_연도_제목약어.pdf` (예: `OECD_2024_AI_principles.pdf`) |
| `laws/` | 법령·가이드라인 원문 | `국가_법령명_연도.pdf` (예: `EU_AI_Act_2024.pdf`) |
| `cases/` | 사례 카드 (직접 작성) | `case_card_NNN.md` |
| `figures/` | 시각화·다이어그램 | `ch[N]_fig[N]_제목.png` |
| `datasets/` | 통계 원데이터 (CSV 등) | `출처_연도_주제.csv` |

### 수집 워크플로우
1. **검색**: WebSearch로 자료 탐색
2. **다운로드**: WebFetch로 PDF/문서 직접 다운로드 → 해당 폴더에 저장
3. **요약 카드 작성**: 다운로드한 자료마다 사례 카드 또는 통계 카드를 `cases/`에 작성
4. **매핑**: `chapter_resource_map.md`에 챕터별 자료 연결

### 참고문헌 색인
다운로드한 모든 자료는 `book2_research/references_index.md`에 색인 기록:
```markdown
| ID | 파일명 | 유형 | 출처 | 연도 | 배치 챕터 | 비고 |
```

## 출력 형식
- 사례: `data-patterns.md` 패턴 1 (사례 카드)
- 통계: `data-patterns.md` 패턴 2, 3 (검증 + 은행)
- 매핑: `data-patterns.md` 패턴 5 (챕터별)
