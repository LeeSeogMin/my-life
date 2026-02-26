import { ArrowRight, BookOpen, BarChart3, Brain, Code2, GraduationCap, Mic } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section — "누구인가"를 명확하게 */}
      <section className="pt-16 lg:pt-20 pb-4">
        {/* 이름과 소속 */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            이석민
          </h1>
          <span className="text-lg text-gray-700 font-medium">
            한신대학교 공공인재빅데이터융합학
          </span>
        </div>

        {/* 두 축을 병렬로 — 핵심 역량 한눈에 */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "정책 기획",
            "정책 분석·평가",
            "데이터 분석",
            "딥러닝·NLP",
            "AI 시스템 개발",
            "웹 개발",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 한 줄 소개 + 학문적 여정 */}
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl">
          인간과 사회에 대한 이해에서 출발하여, 데이터와 AI로 공공 문제를 해결하는 융합 연구자.
        </p>

        {/* 학력 — 3단계 융합 궤적 */}
        <div className="mt-5 max-w-3xl flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
          <div className="flex-1 text-center">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1">사회과학 기반</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              서울대 인류학(학사) → 정치학(석사) → 과학기술정책(박사)
            </p>
          </div>
          <div className="hidden sm:flex items-center px-3 pt-4 text-gray-500">→</div>
          <div className="flex-1 text-center">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1">방법론 확장</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              통계학/계량경제학/빅데이터분석
            </p>
          </div>
          <div className="hidden sm:flex items-center px-3 pt-4 text-gray-500">→</div>
          <div className="flex-1 text-center">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1">기술 융합</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              데이터사이언스 + 인공지능개발/응용
            </p>
          </div>
        </div>
      </section>

      {/* 할 수 있는 일 — 구체적 역량 카드 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">What I Do</h2>
          <p className="text-2xl font-semibold text-gray-900">전문 영역</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "정책 기획·분석·평가",
              desc: "정책 문제 구조화, 성과 논리 설계, 데이터 기반 정책 효과 분석 및 평가 체계 구축",
              keywords: ["정책분석", "성과평가", "기획"],
            },
            {
              icon: <Brain className="w-5 h-5" />,
              title: "AI·딥러닝 응용 연구",
              desc: "자연어처리(NLP), 영상분석(geoAI), 강화학습 등 딥러닝 기법의 공공 정책 적용",
              keywords: ["NLP", "geoAI", "강화학습"],
            },
            {
              icon: <Code2 className="w-5 h-5" />,
              title: "AI 시스템 설계·개발",
              desc: "정책 의사결정 지원 시스템, AI 파이프라인, 웹 기반 분석 플랫폼 설계 및 구현",
              keywords: ["LLMOps", "파이프라인", "웹 개발"],
            },
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "데이터사이언스",
              desc: "계량경제학·인과추론·머신러닝·딥러닝을 결합한 정책 데이터 분석. 인과 데이터사이언스, 데이터사이언스 방법론 저서 발간",
              keywords: ["계량경제학", "인과추론", "ML/DL"],
            },
            {
              icon: <GraduationCap className="w-5 h-5" />,
              title: "교육·강의",
              desc: "딥러닝, 데이터분석, 정책분석, 웹프로그래밍, AI 에이전트 등 학부·대학원 강의",
              keywords: ["학부 강의", "실습 중심"],
            },
            {
              icon: <Mic className="w-5 h-5" />,
              title: "자문·컨설팅",
              desc: "공공기관·지자체 대상 AI 활용, 데이터 기반 정책, 디지털 전환 관련 자문 및 컨설팅",
              keywords: ["자문", "컨설팅", "정책 자문"],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-500">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 해온 일 — 대표 프로젝트 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Key Projects</h2>
          <p className="text-2xl font-semibold text-gray-900">주요 연구·개발 실적</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-lg space-y-3">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">AI 개발</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">공공 보건</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">AI 기반 시니어 정신건강 진단 앱</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              한신대학교 소프트웨어중심대학사업단 프로젝트. 학부생과 함께 시니어의 정신건강을 선제적으로 진단·관리하는 AI 소프트웨어를 개발.
            </p>
            <p className="text-xs text-gray-400">2025. 05 – 2025. 09 · 한신대 SW중심대학사업단</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg space-y-3">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">Forecasting</span>
              <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">국제관계</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">AI 기반 국제관계 통합 분석 파이프라인</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              동아시아 국제관계 변동이 국내에 미치는 영향을 분석하는 AI 파이프라인. LLM Router 패턴과 인과추론 모듈을 결합.
            </p>
            <p className="text-xs text-gray-400">진행 중</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg space-y-3">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">Decision Support</span>
              <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">Digital Twin</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">지능형 정책 의사결정 지원 시스템</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              강화학습, 디지털 트윈, Causal ML을 통합한 계산사회과학 기반 정책 지원 체계. 정책 생애주기 전반의 지능화를 목표.
            </p>
            <p className="text-xs text-gray-400">진행 중</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            전체연구실적 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            저서/논문 실적 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 교육 영역 간략 소개 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Teaching</h2>
          <p className="text-2xl font-semibold text-gray-900">강의 영역</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: <BookOpen className="w-4 h-4" />, area: "정책 분석·기획·평가", courses: "정책분석과 기획, 정책분석평가론" },
            { icon: <Brain className="w-4 h-4" />, area: "딥러닝·AI", courses: "딥러닝자연어처리, 딥러닝 영상데이터분석(geoAI)" },
            { icon: <Code2 className="w-4 h-4" />, area: "개발·엔지니어링", courses: "웹프로그래밍, LLMOPs & 데이터 엔지니어링, AI 에이전트 캡스톤" },
            { icon: <BarChart3 className="w-4 h-4" />, area: "데이터 분석", courses: "데이터분석과 시각화" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="text-blue-500 mt-0.5">{item.icon}</div>
              <div>
                <p className="font-medium text-gray-900 text-sm">{item.area}</p>
                <p className="text-xs text-gray-500 mt-1">{item.courses}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/lectures"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            강의 상세 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 연구 철학 — 하단으로 이동, 간결하게 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Research Philosophy</h2>
          <p className="text-2xl font-semibold text-gray-900">연구 방향</p>
        </header>

        <div className="max-w-3xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            정책을 일회적 개입이 아니라 <strong className="text-gray-900">실시간 상태(State) 데이터를 통해 지속적으로 적응하는
            시스템</strong>으로 정의한다. 이 패러다임을 <strong className="text-gray-900">상태 기반 적응형 정책(State-based Adaptive Policy)</strong>이라 부르며,
            이를 구현하기 위한 설계 아키텍처로 SAPD Framework를 제시하고 있다.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">기존 접근</p>
              <p className="text-sm font-medium text-gray-700">증거 기반 정책 (Evidence-based Policy)</p>
              <p className="text-xs text-gray-500 mt-1">사후 평가 · 정적 구조 · 제한된 적응성</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">연구 지향</p>
              <p className="text-sm font-medium text-gray-900">상태 기반 적응형 정책 (State-based Adaptive Policy)</p>
              <p className="text-xs text-gray-500 mt-1">실시간 상태 관찰 · 지속적 학습 · 시스템 주도 진화</p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            SAPD Framework 상세 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 연구 협업 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Collaboration</h2>
          <p className="text-2xl font-semibold text-gray-900">연구 협업</p>
        </header>

        <div className="max-w-3xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            연구자, 공공기관 종사자, 학생들과의 연구 협업을 환영합니다.
            공공분야 정책분석/전략기획/평가, AI 응용, 데이터사이언스 분야에서
            협업을 원하시는 분은 연락 주시기 바랍니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            전공 관계없이 AI 기반 데이터 사이언스에 관심 있는 학생이라면
            누구나 한신대 공공인재빅데이터융합학의 <strong className="text-gray-900">인공지능학회</strong>에 참여를 신청할 수 있습니다.
          </p>
        </div>

        <div className="pt-2">
          <a
            href="mailto:newmind68@hs.ac.kr"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            newmind68@hs.ac.kr
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
