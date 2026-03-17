# Prime Command

## 프로젝트 컨텍스트 로드

세션 시작 시 아래 파일들을 순서대로 읽어 컨텍스트를 로드한다.

### 1. 필수 파일
- `/CLAUDE.md` - 프로젝트 상태 및 진행 상황
- `/context.md` - 현재 진행 상황 및 의사결정 기록
- `/todo.md` - 할 일 목록
- `/contents.md` - 4부 12장 장별 계획

### 2. 기술 환경
- Python venv 활성화: `source venv/bin/activate`
- API 키: `.env` 파일 확인 (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`)

### 3. 사전 체크리스트
1. [ ] 현재 Phase 확인 (`CLAUDE.md`)
2. [ ] `chapter/` 폴더 존재 및 챕터 현황 확인
3. [ ] 이전 Phase 산출물 존재 확인
4. [ ] Python venv 활성화 확인
5. [ ] API 키 설정 확인

## 작업 원칙

### Do
- 각 Phase 산출물을 다음 Phase 입력으로 사용
- 집필 완료 챕터는 반드시 `chapter/chapter_XX.md`에 저장
- Phase 완료 시 `CLAUDE.md`, `context.md`, `todo.md` 업데이트
- 각 장의 진단 항목·체크리스트를 MVP 프로토타입(sapd/dev/) 설계와 동기화

### Don't
- Phase 순서 건너뛰기 금지 (의존성 존재)
- 코드/문서에 API 키 하드코딩 금지
- 챕터 최신 버전을 Phase 작업 폴더에만 저장하는 행위 금지 (반드시 `chapter/`에 저장)
- 기존 저서(방법론)와 내용 중복 금지 — 설계와 검증의 구조에 집중

## 로드 완료 응답 형식

```
✅ Prime context loaded

현재 프로젝트 상태:
- Phase: [현재 Phase]
- 직전 완료: [최근 완료 작업]
- 다음 단계: [다음 행동]
- chapter/ 현황: [챕터 수 및 완료 목록]

준비 완료. 명령을 기다립니다.
```
