## 사례 카드 #010

**제목**: Chouldechova 공정성 불가능 정리
**주체**: Alexandra Chouldechova (Carnegie Mellon University)
**시기**: 2017
**배경**: 알고리즘적 의사결정에서 복수의 공정성 정의를 동시에 충족할 수 없다는 수학적 증명. COMPAS 논쟁을 계기로 공정성의 수학적 한계를 형식화.
**핵심 포인트**: 예측 대상의 기저율(base rate)이 집단 간에 다를 경우, 동등 기회(equalized odds)와 예측 패리티(predictive parity)를 동시에 달성할 수 없다. 유일한 예외는 ① 완벽한 예측 정확도 또는 ② 모든 집단의 기저율이 동일한 경우뿐. 이는 공정성이 기술적 최적화 문제가 아니라 가치 선택의 문제임을 의미.
**수치**:
- 2가지 예외 조건만 존재 (완벽 정확도 or 동일 기저율)
- Chouldechova (2017), arXiv:1703.09207
- Kleinberg, Mullainathan, Raghavan (2016)도 독립적으로 유사 결과 도출
**출처**:
- Chouldechova, A. (2017). "Fair prediction with disparate impact: A study of bias in recidivism prediction instruments." Big Data, 5(2), 153-163.
- Kleinberg, J., Mullainathan, S., & Raghavan, M. (2016). "Inherent trade-offs in the fair determination of risk scores." arXiv:1609.05807
- Marcello Di Bello: "Algorithmic Fairness – Impossibility Theorems" (강의 자료)
**사용 챕터**: Ch.7 (공정성의 정의들 — 수학적 비호환성)
**SAPD 연결**: SAPD L1(상태 변수 선택)에서 어떤 공정성 정의를 채택할 것인가는 기술적 결정이 아니라 민주적 심의의 대상. Validation Module 공정성 차원의 설계 시 이 불가능 정리를 전제로 해야 함.
**태그**: 공정성, 불가능 정리, equalized odds, predictive parity, 기저율, 수학적 한계
