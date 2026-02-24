import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="pt-16 lg:pt-24 pb-8">
        {/* Identity */}
        <div className="text-sm font-medium tracking-widest text-gray-500 mb-6 uppercase">
          Decision Systems Lab
        </div>

        {/* Main Tagline */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-tight text-gray-900 mb-8 tracking-tight">
          인문사회과학과 AI·Software를 융합하여<br className="hidden sm:block" />
          공공 의사결정 시스템을 연구하고 구현합니다
        </h1>

        {/* Subline */}
        <div className="text-lg sm:text-xl text-gray-600 mb-10 font-light">
          Adaptive Decision Systems for Public Strategy and Policy
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl font-normal">
          인문사회과학적 이해를 기반으로, 데이터, 딥러닝, 그리고 Software 기술을 활용하여
          공공 정책과 전략 의사결정 시스템을 연구합니다.<br className="hidden sm:block" />
          정책을 개별 개입이 아니라, 데이터와 AI를 통해 지속적으로 적응하는 의사결정 시스템으로
          이해하고, 이를 분석하고 구현하는 연구와 교육을 수행하고 있습니다.
        </p>

        {/* CTA */}
        <div className="pt-10">
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-all hover:border-gray-400 text-sm"
          >
            Explore PSDS Framework
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </Link>
        </div>
      </section>

      {/* Researcher Bio Section */}
      <section className="space-y-12 pt-16 border-t border-gray-100">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Principal Investigator</h2>
          <p className="text-2xl font-semibold text-gray-900">
            이석민은 공공 정책과 전략적 의사결정 시스템을 연구하는 연구자이다.
          </p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed font-normal space-y-6">
          <p>
            서울대학교에서 인류학(학부), 의회정치(석사), 과학기술정책(박사)을 수학하였으며, 박사후 과정에서 통계학과 계량경제학을 연구하였다. 인류학적 관찰에서 출발하여 정치학과 정책학의 이론적 토대를 거쳐, 계량경제학과 통계학의 방법론적 엄밀성을 습득하였으며, 최근에는 딥러닝과 생성형 AI를 정책 의사결정에 적용하는 연구 수행하고 있다.
          </p>
          <p>
            수원대학교 행정학과에서 빅데이터 분석과 정책 분석 방법론을 연구하였으며, 현재 한신대학교 공공인재빅데이터융합학부에서 AI 기반 정책 분석, 딥러닝 응용, 그리고 공공 전략 및 정책 의사결정 시스템에 대한 연구를 진행하고 있다.
          </p>
          <p>
            그의 연구는 개별 정책의 효과 분석에 머무르지 않고, 정책을 생성하고 조정하는 의사결정 시스템의 구조 자체를 연구하는 데 초점을 둔다. 특히 데이터, 평가, 의사결정이 시간 속에서 지속적으로 통합되는 적응형 의사결정 시스템(adaptive decision system)의 구조를 탐구하고 있으며, 이를 위해 PSDS Framework (Public Strategy and Decision System Framework)를 제시하였다.
          </p>
          <p>
            이 Framework는 공공 정책을 고정된 개입이 아니라, 상태 변수(State Variable), 의사결정 변수(Decision Variable), 의사결정 규칙(Decision Rule)에 기반하여 지속적으로 진화하는 의사결정 시스템의 산출물로 이해하는 구조를 제시한다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">연구 관심 분야 (Research Interests)</h3>
            <ul className="space-y-3 list-none pl-0">
              {[
                "공공 전략 및 정책 의사결정 시스템",
                "Adaptive Decision System Architecture",
                "AI 기반 정책 분석 및 딥러닝 응용",
                "데이터 기반 정책 설계 및 평가",
                "정책 시스템의 구조적 분석"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-300 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">전환적 연구 지향점 (Direction)</h3>
            <p className="text-lg font-medium text-gray-800 leading-relaxed italic border-l-2 border-gray-200 pl-4 py-1">
              현재 그의 연구는 Evidence-based Policy를 넘어, AI 기반 Adaptive Decision System으로의 전환을 위한 이론적 및 구조적 기반을 구축하는 데 초점을 두고 있다.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy / Paradigm Shift Section */}
      <section className="space-y-12 pt-16 border-t border-gray-100">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Research Philosophy</h2>
          <p className="text-2xl font-semibold text-gray-900">패러다임 전환 (Paradigm Shift)</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">과거 모델 (Traditional Model)</h3>
            <div className="bg-gray-50 p-6 rounded border border-gray-100 space-y-3">
              <strong className="block text-gray-900 border-b border-gray-200 pb-3 mb-3">증거 기반 정책 (Evidence-based Policy)</strong>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Discrete & Sequential</p>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-2"><span className="text-gray-300">•</span> 사후 평가 위주 (Retrospective)</li>
                <li className="flex items-start gap-2"><span className="text-gray-300">•</span> 정적 정책 구조 (Static structure)</li>
                <li className="flex items-start gap-2"><span className="text-gray-300">•</span> 제한된 적응성 (Low adaptability)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-widest">새로운 모델 (New Model)</h3>
            <div className="bg-white p-6 rounded border border-gray-200 space-y-3 shadow-sm">
              <strong className="block text-gray-900 border-b border-gray-200 pb-3 mb-3">적응형 의사결정 시스템 (Adaptive)</strong>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Continuous & Adaptive</p>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-2"><span className="text-gray-300">•</span> 실시간 데이터 통합 (Real-time)</li>
                <li className="flex items-start gap-2"><span className="text-gray-300">•</span> 지속적 학습 (Continuous learning)</li>
                <li className="flex items-start gap-2"><span className="text-gray-300">•</span> 시스템 주도 진화 (System-driven)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
