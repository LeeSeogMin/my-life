# Phase 4 Command: 구조 & 심화 편집

## 역할
`chapter/` 폴더의 전체 챕터를 읽고 거시 편집(구조·흐름·분량)과 내용 심화(약한 챕터 보강·용어 통일)를 수행한다. 목차 v2와 용어집을 확정하고, 서문·후기 초안을 작성한다.

## 사전 조건
- Phase 3 완료 (`chapter/` 폴더에 전체 챕터 존재)

## 특수 사항 (SAPD 도서)
- **제9장(Validation Module 통합) 중점 검토**: 제4~8장의 개별 진단 항목이 제9장에서 실제로 통합되는지 확인
- **부(Part) 간 연결**: 제1부(이론) → 제2부(실패 유형) → 제3부(검증 도구) → 제4부(제도)의 논리적 흐름
- **용어 통일 특히 중요**: SAPD 고유 용어(State(t), f(State(t)), Validation Module, 5대 레이어) 일관성

## 실행 프로세스

### Step 1: 전체 챕터 리딩
- `chapter/` 폴더의 모든 챕터 파일 읽기
- 각 챕터 요약 1문단 작성 (편집 노트용)

### Step 2: 거시 편집 (Macro Edit)
다음 항목을 점검하고 `book4_editing/macro_edit_notes.md`에 기록:
- **순서**: 챕터 순서가 독자 여정에 최적화되어 있는가?
- **흐름**: 챕터 간 연결 문구 및 복선 충분한가?
- **중복**: 동일 사례·통계가 여러 챕터에 중복되는가?
- **분량 불균형**: 특정 챕터가 지나치게 길거나 짧지 않은가?
- **실무 산출물 완성도**: 각 장의 체크리스트/매트릭스가 실제 사용 가능한 수준인가?

### Step 3: 내용 심화
- 약한 챕터 식별 (사례 부족, 논증 빈약, 통계 미지원)
- 추가 자료 투입 또는 내용 보강
- `chapter/chapter_[N].md` 업데이트

### Step 4: 용어 통일
- SAPD 핵심 용어 목록 추출 및 일관성 확인
- `book4_editing/glossary.md` 작성

### Step 5: 목차 v2 확정
- 거시 편집 결과 반영
- `book4_editing/table_of_contents_v2.md` 저장

### Step 6: 서문 & 후기 초안
- `writing-patterns.md` 패턴 8(서문/후기 구조) 적용
- `chapter/preface.md`, `chapter/epilogue.md` 저장

### Step 7: 산출물
`book4_editing/` 에 저장:
- `macro_edit_notes.md` — 거시 편집 노트
- `glossary.md` — 용어집
- `table_of_contents_v2.md` — 목차 v2

`chapter/` 업데이트:
- 보강된 챕터 최신 버전 반영
- `preface.md`, `epilogue.md` 추가

## 완료 기준
- [ ] 전체 챕터 거시 편집 완료
- [ ] 약한 챕터 보강 완료
- [ ] 용어집 작성 완료
- [ ] 목차 v2 확정
- [ ] 서문·후기 초안 완성
- [ ] `CLAUDE.md` Phase 4 상태 ✅ 업데이트

## 완료 응답
```
✅ Phase 4 완료

거시 편집 수정: [N]건
내용 보강 챕터: [N]개
용어 통일: [N]개 항목
목차 v2: 확정
서문·후기: 초안 완성

다음: /run-phase5 (다중 LLM 리뷰)
```
