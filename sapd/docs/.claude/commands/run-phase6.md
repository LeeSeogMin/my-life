# Phase 6 Command: AI 탐지 & 재작성

## 역할
AI 탐지 도구로 원고를 검사하고, 저자 고유의 목소리(Author Voice)를 반영하여 인간적인 문체로 재작성한다.

## 사전 조건
- Phase 5 완료 (`chapter/` 폴더에 리뷰 반영 버전 존재)

## 특수 사항 (SAPD 도서)
- **저자 기존 문체 참조**: 칼럼 2편(intro.mdx, sapd-palantir-convergence.mdx)의 문체가 저자 목소리의 기준
- **학술적 어조 유지**: 이 도서는 전문교양서이므로, 지나친 구어화 금지. 저자의 학술적 정밀성은 보존

## 실행 프로세스

### Step 1: 저자 목소리 가이드 작성 (먼저 실행)
칼럼 2편을 분석하여 `book6_humanizing/author_voice_guide.md` 작성:
- **문체 특징**: 정밀한 학술적 전문교양체, 논증적 서술
- **즐겨 쓰는 표현 패턴**: 선호하는 문장 구조, 접속사, 비유 유형
- **피하는 표현**: 저자가 사용하지 않는 어투나 어휘
- **전문 분야 어휘**: SAPD 고유 용어, 정책학·인과추론 전문 어휘

### Step 2: AI 탐지 검사
- 섹션별 탐지 severity 기록 (1~5 스케일)
- `book6_humanizing/reports/detection_report.md`에 결과 저장

### Step 3: 고탐지 구간 식별
- severity 3 이상 구간 표시
- AI 패턴 유형 분류: 나열형 / 메타 서술 / 균형 잡힌 대비 / 수동태 남발

### Step 4: 저자 목소리 기반 재작성
- `author_voice_guide.md` 엄격히 준수
- 문장 구조 다양화
- AI 나열형 → 서사형 전환
- 전문교양체 어조 유지

### Step 5: 재검사
- 재작성 후 동일 도구로 재탐지
- 목표: 평균 severity 2.0 이하

### Step 6: 산출물
`book6_humanizing/` 에 저장:
- `author_voice_guide.md` — 저자 목소리 가이드
- `reports/detection_report.md` — 탐지 보고서 (전/후 비교)

`chapter/` 업데이트:
- 재작성 완료 챕터를 `chapter/chapter_[N].md`에 반영

## 완료 기준
- [ ] 저자 목소리 가이드 완성
- [ ] AI 탐지 검사 완료
- [ ] 평균 severity 2.0 이하 달성
- [ ] 전문교양체 어조 유지 확인
- [ ] `CLAUDE.md` Phase 6 상태 ✅ 업데이트

## 완료 응답
```
✅ Phase 6 완료

초기 평균 severity: [N]/5
최종 평균 severity: [N]/5
수정 구간: [N]건
저자 목소리 가이드: 작성 완료

다음: /run-phase7 (한국어 교정)
```
