import { ArrowRight, BarChart3, Brain, Code2, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 pb-12">
      {/* Hero — 핵심 포지셔닝 */}
      <section className="pt-16 lg:pt-20 pb-4">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            이석민
          </h1>
          <span className="text-lg text-gray-500 font-medium">
            Seog-Min Lee
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-6">한신대학교 공공인재빅데이터융합학</p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug max-w-2xl mb-6">
          정책 기획·분석·평가와 AI 설계·검증
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
          인문사회과학적 문제의식에서 출발하여, 데이터분석과 AI를 활용한 정책 기획·분석·평가 시스템을 설계·개발합니다.
          나아가 AI 기반 분석·평가 결과의 타당성과 설계 시스템 자체의 검증 가능성을 함께 연구합니다.
        </p>

        {/* CTA 3개 */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/framework"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            SAPD Framework 보기
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            협업 문의
          </Link>
        </div>
      </section>

      {/* What I Do — 5개 카드: 기반 학문 2 + AI 응용 3 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">What I Do</h2>
          <p className="text-2xl font-semibold text-gray-900">전문 영역</p>
        </header>

        {/* 기반 학문 — 2개 카드 */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Target className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">정책 기획·분석·평가</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              정책 문제 구조화, 전략 설계, 성과 논리 모델링, 데이터 기반 정책 효과 분석 및 평가 체계를 구축합니다.
              AI 시대에도 정책의 목적과 구조를 설계하는 것은 인간 고유의 판단 영역입니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["정책분석", "전략기획", "성과평가", "정책설계"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><TrendingUp className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">데이터사이언스·인과추론</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              계량경제학, 인과추론, 머신러닝·딥러닝을 결합한 정책 데이터 분석.
              예측 모델링과 인과 효과 추정을 통해 정책 의사결정의 과학적 기반을 구축합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["인과추론", "예측 모델링", "계량경제학", "ML/DL"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>
        </div>

        {/* AI 응용 — 3개 카드 */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Brain className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">정책분석용 생성형 AI 설계</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              정책문서, 회의록, 보고서, 행정자료를 대상으로
              질문 설계, 분석 보조, 요약·비교·쟁점 추출 구조를 설계합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["NLP", "정책문서", "쟁점 구조화"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><BarChart3 className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">공공 AI 평가·검증 프레임워크</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              생성형 AI와 데이터 기반 시스템이 공공영역에서 어떤 한계와 위험을 가지는지,
              무엇을 검토해야 하는지 프레임워크로 정리합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["설명가능성", "검토 기준", "평가 루브릭"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Code2 className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">정책 문서 분석 도구 프로토타이핑</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              국회 회의록, 법안, 정책보고서, 보도자료 등을
              실제 사용 가능한 소규모 AI 도구로 구현하고 시험합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["프로토타입", "회의록 분석", "도구 개발"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 연구 철학 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Research Philosophy</h2>
          <p className="text-2xl font-semibold text-gray-900">연구 방향</p>
        </header>

        <div className="max-w-3xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            기존 증거 기반 정책(Evidence-based Policy)은 사후 평가와 정적 구조에 머물러,
            변화하는 현실에 적응하지 못하는 구조적 한계를 안고 있다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            이 한계를 넘기 위해, 정책을 일회적 개입이 아니라{" "}
            <strong className="text-gray-900">실시간 상태(State) 데이터에 기반해 지속적으로 적응하는 시스템</strong>으로
            재설계하는 패러다임, <strong className="text-gray-900">상태 기반 적응형 정책(State-based Adaptive Policy)</strong>을
            연구하고 있다. 이를 위한 설계 아키텍처가 SAPD Framework이다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">이론은 구현될 때 비로소 검증된다.</strong>{" "}
            SAPD Framework에 기반하여 공공 의사결정 지원 시스템, AI 분석 파이프라인 등을 설계하고 개발하고 있다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            동시에, AI 기반 분석 결과가 타당한지, 설계된 시스템 자체가 검증 가능한지를 평가하는{" "}
            <strong className="text-gray-900">SAPD Validation Module</strong>을 연구하고 있다.
            공공 AI의 설명가능성 진단, 검토 체크리스트, 평가 루브릭을 SAPD의 실무층으로 설계하여,
            이론과 실무가 하나의 프레임워크 안에서 순환하는 구조를 구축한다.
          </p>
        </div>

        {/* SAPD Framework 통합 다이어그램: 이론층 + 실무층 */}
        <div className="pt-6 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sapd-framework.svg"
            alt="SAPD Framework 통합 구조 — 이론층(State → Decision → System Response 순환 루프)과 실무층(Validation Module: 분석 결과 타당성 검증, 시스템 설계 타당성 검증, 설명가능성 진단)"
            width={720}
            height={520}
            className="w-full max-w-3xl h-auto"
          />
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

      {/* 주요 프로젝트 — 간결화 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Key Projects</h2>
          <p className="text-2xl font-semibold text-gray-900">주요 연구·개발</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/projects" className="p-6 bg-white border border-gray-200 rounded-lg space-y-3 hover:border-gray-300 hover:shadow-sm transition-all block">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">AI 개발</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">공공 보건</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">AI 기반 시니어 정신건강 진단 앱</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              한신대학교 소프트웨어중심대학사업단 프로젝트. 학부생과 함께 시니어의 정신건강을 선제적으로 진단·관리하는 AI 소프트웨어를 개발.
            </p>
            <p className="text-xs text-gray-400">2025. 05 – 2025. 09 · 한신대 SW중심대학사업단</p>
          </Link>

          <Link href="/projects" className="p-6 bg-white border border-gray-200 rounded-lg space-y-3 hover:border-gray-300 hover:shadow-sm transition-all block">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">Forecasting</span>
              <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">국제관계</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">AI 기반 국제관계 통합 분석 파이프라인</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              동아시아 국제관계 변동이 국내에 미치는 영향을 분석하는 AI 파이프라인. LLM Router 패턴과 인과추론 모듈을 결합.
            </p>
            <p className="text-xs text-gray-400">진행 중</p>
          </Link>
        </div>

        <div className="pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            전체 프로젝트 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 최근 칼럼 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Recent Writing</h2>
          <p className="text-2xl font-semibold text-gray-900">최근 칼럼</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-5">
          <Link href="/writing/sapd-palantir-convergence" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <p className="text-xs font-mono text-gray-400">2026-03-01</p>
            <h3 className="font-bold text-gray-900 text-base leading-snug">SAPD Framework와 팔란티어 플랫폼의 구조적 동형성 분석</h3>
            <p className="text-sm text-gray-600 line-clamp-2">공공 의사결정 프레임워크(SAPD)와 팔란티어의 실시간 운영 플랫폼이 공유하는 구조적 동형성을 체계적으로 분석한 비교 보고서.</p>
          </Link>
          <Link href="/writing/intro" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <p className="text-xs font-mono text-gray-400">2026-02-25</p>
            <h3 className="font-bold text-gray-900 text-base leading-snug">상태 기반 적응형 정책 개론</h3>
            <p className="text-sm text-gray-600 line-clamp-2">전략기획론의 역사적 논쟁과 증거 기반 정책의 구조적 한계를 비판적으로 검토하고, 상태 기반 적응형 정책의 이론적 기초를 체계적으로 제시합니다.</p>
          </Link>
        </div>

        <div>
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            전체 칼럼 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
