## 사례 카드 #002

**제목**: 미국 COMPAS 재범 예측 편향
**주체**: Northpointe (현 Equivant) / 미국 플로리다주 Broward County
**시기**: 2016 (ProPublica 분석 공개)
**배경**: COMPAS(Correctional Offender Management Profiling for Alternative Sanctions)는 피고인의 재범 위험도를 예측하는 알고리즘으로, 미국 형사사법 시스템에서 보석·형량·가석방 결정에 활용. ProPublica가 Broward County 10,000명 이상의 데이터를 분석하여 인종별 예측 오류의 비대칭성을 밝혀냄.
**핵심 포인트**: 흑인 피고인은 실제 재범하지 않았는데 '고위험'으로 잘못 분류될 확률이 백인의 거의 2배. 공정성의 수학적 정의들(equalized odds vs. predictive parity)이 동시에 충족 불가능함을 보여주는 실증 사례.
**수치**:
- 전체 정확도: 61%
- 흑인 피고인: 고위험 오분류(false positive) 비율 45% (백인 23%)
- 백인 피고인: 저위험 오분류(false negative) 비율 48% (흑인 28%)
- 인종·범죄 이력·나이·성별 통제 후에도 흑인이 폭력 범죄 고위험 분류될 확률 77% 높음
**출처**:
- ProPublica: "Machine Bias" (2016.05.23)
- ProPublica: "How We Analyzed the COMPAS Recidivism Algorithm"
- Dressel & Farid (2018): "The accuracy, fairness, and limits of predicting recidivism" (Science Advances)
**사용 챕터**: Ch.7 (공정성·편향 진단)
**SAPD 연결**: L1(상태 변수 — 인종 프록시 변수), L3(의사결정 아키텍처 — 이진 위험 분류의 문제), L5(평가 — 공정성 지표 간 트레이드오프)
**태그**: 공정성, 재범 예측, 인종 편향, 형사사법, COMPAS, 불가능 정리
