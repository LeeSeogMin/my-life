## 사례 카드 #014

**제목**: RAG 시스템의 출처 검증과 인용 정확도 평가
**주체**: TREC 2024 RAG Track / 다수 연구팀
**시기**: 2024~2025
**배경**: RAG(Retrieval-Augmented Generation)가 LLM 환각을 줄이는 대안으로 부상했으나, 인용의 정확성과 출처 검증의 체계적 평가가 필요. 2024년 TREC RAG Track에서 재사용 가능한 종단 간 평가 프레임워크(Ragnarök) 도입. 출처 인용의 정확한 매핑 검증이 핵심 과제.
**핵심 포인트**: RAG에서의 인용 편향 — 고인용 연구를 우선하고 저인용이지만 가치 있는 연구를 간과하는 선택 편향. 출처 인용은 AI를 '블랙박스'에서 투명한 추론 시스템으로 전환하는 핵심 기제이나, 정확한 검증이 전제. 2024 하반기~2025 상반기 RAG 평가 논문이 급증, LLM 기반 평가자(judge)가 실제 응용에 근접.
**수치**:
- 2024년 RAG 체계적 리뷰: 128편 (지식 집약적 과제 27.3%, 오픈도메인 QA 15.6%, SW 엔지니어링 10.2%, 의료 8.6%)
- 의료 RAG 환각 완화: on-premise 배포에서 유의미한 개선
**출처**:
- "Retrieval Augmented Generation Evaluation" (arXiv:2504.14891, 2025)
- "A Systematic Literature Review of RAG" (Big Data and Cognitive Computing, 2025)
- TREC 2024 RAG Track: Ragnarök 프레임워크
**사용 챕터**: Ch.6 (근거 추적과 출처 검증)
**SAPD 연결**: L4(데이터 통합)에서 출처의 신뢰도 검증은 핵심 과제. MVP "근거 출처 표시" 기능의 설계 근거. Validation Module에서 출처 검증은 '타당성' 차원의 하위 항목.
**태그**: RAG, 출처 검증, 인용 정확도, 환각 완화, 근거 추적
