# Phase 8 Command: 출판 패키지

## 역할
타겟 출판사 요건에 맞는 완전한 출판 제안 패키지를 준비한다. 출판 제안서, 최종 원고(.docx), 샘플 챕터를 포함한다.

## 사전 조건
- Phase 7 완료 (교정 완료 원고 존재)
- 타겟 출판사 투고 요건 확인 (법문사 또는 윤성사)

## 실행 프로세스

### Step 1: 출판 제안서 작성
`book8_publishing/book_proposal.md` 에 다음 9개 항목 작성:
1. **도서 개요**: 제목, 부제, 한 줄 소개, 분량, 독자층
2. **핵심 가치 명제**: 이 책이 독자에게 주는 가장 큰 가치 (1문단)
3. **목차**: 최종 목차 v2 기준
4. **경쟁 도서 분석**: 주요 경쟁서 5권과 차별화 포인트
5. **저자 소개**: 약력, 전문성, 기존 저작물 6권, 논문 6편
6. **시장성 분석**: 공공 AI 도입 확대 트렌드, 독자 규모 추정
7. **마케팅 계획**: 저자 강연, 홈페이지(my-life-six-pi.vercel.app), 교육 서비스 연동
8. **샘플 챕터**: 대표 챕터 2개 전문
9. **집필 일정**: 완고 제출 예정일

### Step 2: 최종 원고 Word 변환
```bash
pandoc chapter/preface.md chapter/chapter_*.md chapter/epilogue.md \
  -o book8_publishing/manuscript_final.docx \
  --reference-doc=template.docx
```

### Step 2.5: 최종 원고 한글(HWPX) 변환
```bash
# 전체 원고 MD → HWPX 변환
pypandoc-hwpx book8_publishing/manuscript_final_combined.md \
  --reference-doc="~/.claude/skills/hwpx/assets/blank_justify.hwpx" \
  -o book8_publishing/manuscript_final.hwpx
```

또는 Python:
```python
from pypandoc_hwpx.PandocToHwpx import PandocToHwpx
PandocToHwpx.convert_to_hwpx(
    input_file='book8_publishing/manuscript_final_combined.md',
    output_file='book8_publishing/manuscript_final.hwpx',
    reference_path='~/.claude/skills/hwpx/assets/blank_justify.hwpx'
)
```

> **참조 템플릿**: `~/.claude/skills/hwpx/assets/blank_justify.hwpx` (양쪽 정렬 기본 서식)
> **후처리**: 필요 시 `~/.claude/skills/hwpx/scripts/hwpx_postprocess.py`로 서식 보정

### Step 3: 샘플 챕터 패키지
- 대표 챕터 2개를 별도 파일로 준비
- 권장: 제4장(오류 유형) + 제9장(Validation Module 통합)

### Step 4: 투고 체크리스트 확인

### Step 5: 산출물
`book8_publishing/` 에 저장:
- `book_proposal.md/.docx` — 출판 제안서
- `manuscript_final.docx` — 최종 원고 Word (전체)
- `manuscript_final.hwpx` — 최종 원고 한글 (전체)
- `sample_chapters/` — 샘플 챕터 파일
- `submission_checklist.md` — 투고 체크리스트 결과

## 완료 기준
- [ ] 출판 제안서 9개 항목 완성
- [ ] 최종 원고 .docx 변환 완료
- [ ] 최종 원고 .hwpx 변환 완료
- [ ] 샘플 챕터 선정 및 준비
- [ ] 투고 체크리스트 ALL PASS
- [ ] `CLAUDE.md` Phase 8 상태 ✅ 업데이트

## 완료 응답
```
✅ Phase 8 완료

출판 제안서: 완성 (9개 항목)
최종 원고: manuscript_final.docx ([N]페이지)
샘플 챕터: 2개
체크리스트: ALL PASS

투고 준비 완료.
```
