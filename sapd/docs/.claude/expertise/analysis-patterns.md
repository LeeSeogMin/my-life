# Analysis Patterns - 도서 지원 경량 통계 & 시각화 패턴

> Phase 2(조사 & 근거)에서 재사용. 기초 통계 + 출판용 시각화 전용.

---

## 공통 설정

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px

# 한글 폰트 설정 (macOS)
plt.rcParams['font.family'] = 'AppleGothic'
plt.rcParams['axes.unicode_minus'] = False

# 출판용 기본 색상 (SAPD 도서)
BOOK_COLORS = {
    'primary': '#2E4057',
    'secondary': '#048A81',
    'accent': '#54C6EB',
    'warning': '#EF8354',
    'light': '#F5F5F5'
}
```

---

## 패턴 1: 기술 통계 요약표
## 패턴 2: 트렌드 라인 차트 (시계열)
## 패턴 3: 비교 막대 차트 (수평, 순위 비교)
## 패턴 4: 그룹별 분포 비교
## 패턴 5: plotly 인터랙티브 차트 (HTML 부록용)

(코드 패턴은 book-maker 원본과 동일 — 한글 폰트 설정만 macOS용으로 변경)

---

**마지막 업데이트**: 2026-03-12 (SAPD 도서 적응)
**패턴 수**: 5개
