## 사례 카드 #011

**제목**: LLM의 인과추론 오류 경향
**주체**: 다수 연구팀 (EMNLP 2024, OpenReview 등)
**시기**: 2024
**배경**: LLM이 인과추론 과제에서 체계적 오류를 범하는지를 검증한 복수의 2024년 연구. LLM은 반사실적 추론에서 의미 있는 추론을 수행하지 못하며, 변수명이나 표현이 훈련 데이터와 유사한 분포 내(in-distribution) 상황에서만 인과추론 가능.
**핵심 포인트**: LLM은 시간적·공간적 관계에서 인과관계의 부재를 추론할 수 있으나, 반사실적(counterfactual) 추론에서는 체계적 오류를 범한다. 분포 외(out-of-distribution) 상황에서는 인과추론 성능이 무작위 수준으로 하락. 이는 정책분석에서 가장 치명적인 '논리적 오류'의 구조적 기반.
**수치**:
- 분포 외 인과추론 성능: 거의 무작위(random) 수준
- 반사실적 추론: 체계적 오류 (systematic fallacies)
**출처**:
- "LLMs Are Prone to Fallacies in Causal Inference" (EMNLP 2024, aclanthology.org/2024.emnlp-main.590)
- "Can Large Language Models Infer Causation from Correlation?" (OpenReview)
- "Causal Reasoning and Large Language Models" (arXiv:2305.00050)
**사용 챕터**: Ch.4 (논리적 오류 — 인과-상관 혼동)
**SAPD 연결**: SAPD의 핵심 수식 `Decision(t) = f(State(t))`에서 f의 인과적 식별이 핵심. LLM이 인과추론에 체계적으로 실패한다면, AI 출력의 정책분석 타당성(Ch.6)이 근본적으로 위협받음.
**태그**: 논리적 오류, 인과추론, 상관-인과 혼동, 반사실적 추론, LLM 한계
