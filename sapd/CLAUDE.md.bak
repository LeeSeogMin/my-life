# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SAPD (Systematic Adaptive Policy Design) Framework — 이론(Adaptive Policy Design)과 실무(Validation Module)를 동시에 구축하는 연구·개발·문서화 통합 프로젝트. 이석민 교수(한신대, 공공인재빅데이터융합학)가 운영하며, 정책 AI 설계 + 검증 분야의 포지션을 확립하는 것이 최종 목표.

## Repository Structure

```
sapd/
├── docs/           ← 전문 문서 (도서 수준, 8편 계획)
├── columns/        ← 칼럼 초안 (docs에서 핵심 추출 → 대중용 변환)
├── dev/            ← 프로토타입 개발 (MVP: 국회 회의록 분석 + 질문 검토 AI)
├── 00-current-status.md   ← 보유 역량·현황 정리
├── 01-action-plan.md      ← 4-Phase 실행 계획 (2026.03~2028.02)
└── 02-dev-strategy.md     ← MVP 기술 스택·기존 서비스 분석·차별점
```

## Key Context

### 작업 흐름 (One Topic → 5 Outputs)
전문 문서(docs/) → 칼럼 변환(columns/) → 홈페이지 발행, 동시에 프로토타입 개발(dev/) → 홈페이지 공개. 하나의 주제 작업이 전문 문서, 칼럼, Validation Module 항목, 프로토타입 검증 로직, 서비스 산출물 템플릿 5개로 전환됨.

### MVP: 국회 회의록 쟁점 분석 도구
- 기술 스택: Python (LangChain/LlamaIndex) + RAG, Next.js, Claude/GPT API, Supabase
- 차별점: 쟁점 구조화, 분석 질문 검토(심문), 타당성 검증 내장 (기존 서비스는 검색·요약만 제공)
- 데이터: 국회 회의록 (완전 공개, 법적 리스크 없음)
- 5개 핵심 기능: 쟁점 자동 추출, 찬반 입장 구조화, 질문 한계 피드백, 신뢰도·근거 표시, 검토 필요 지점 자동 표시

### Phase 진행 상황
- Phase 1 (2026.03~06): 기반 구축 — MVP 개발 + XAI·AI오류유형 문서화 ← **현재 단계**
- Phase 2 (2026.07~10): Validation Module v1.0 구현 + 사용자 검증
- Phase 3 (2026.11~2027.02): 서비스 1건 시범 + AI 거버넌스·조달 학습
- Phase 4 (2027.03~2028.02): 서비스 본격화 + 전문 문서 8편 도서화

### 홈페이지 연동
- my-life-six-pi.vercel.app (Next.js 16, React 19, TypeScript, Supabase)
- 별도 저장소: `/Users/callii/Documents/my-life/`

## Language

프로젝트 문서와 칼럼은 한국어로 작성. 코드와 기술 문서(주석 포함)는 영어 또는 한국어 혼용 가능.
