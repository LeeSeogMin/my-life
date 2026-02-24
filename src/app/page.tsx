import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Bio Section (Main) */}
      <section className="space-y-8">
        <header className="space-y-4">
          <p className="text-2xl font-bold text-gray-900">
            이석민은 공공 정책과 전략적 의사결정 시스템을 연구하는 연구자이다.
          </p>
        </header>

        <section className="prose prose-gray max-w-none prose-lg text-gray-800 leading-relaxed font-normal space-y-6">
          <p>
            서울대학교에서 인류학(학부), 의회정치(석사), 과학기술정책(박사)을 수학하였으며, 박사후 과정에서 통계학과 계량경제학을 연구하였다. 인류학적 관찰에서 출발하여 정치학과 정책학의 이론적 토대를 거쳐, 계량경제학과 통계학의 방법론적 엄밀성을 습득하였으며, 최근에는 딥러닝과 생성형 AI를 정책 의사결정에 적용하는 연구를 수행하고 있다.
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
        </section>

        <section className="space-y-6 pt-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">연구 관심 분야</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 list-none pl-0">
            {[
              "공공 전략 및 정책 의사결정 시스템",
              "Adaptive Decision System Architecture",
              "AI 기반 정책 분석 및 딥러닝 응용",
              "데이터 기반 정책 설계 및 평가",
              "정책 시스템의 구조적 분석"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-gray-400 mt-1.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gray-50 border-l-4 border-gray-900 p-8 rounded-r-lg mt-8">
          <p className="text-lg font-medium text-gray-800 leading-relaxed italic">
            현재 그의 연구는 Evidence-based Policy를 넘어, AI 기반 Adaptive Decision System으로의 전환을 위한 이론적 및 구조적 기반을 구축하는 데 초점을 두고 있다.
          </p>
        </section>
      </section>

      {/* Philosophy / Paradigm Shift Section (Secondary) */}
      <section className="space-y-12 pt-16 border-t border-gray-200">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Research Philosophy</h2>
          <p className="text-xl text-gray-600 font-light">패러다임 전환 (Paradigm Shift)</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">과거 모델 (Traditional Model)</h3>
            <div className="bg-white border border-gray-200 p-6 rounded-lg space-y-3 shadow-sm">
              <strong className="block text-gray-800 border-b pb-2 mb-2">증거 기반 정책 (Evidence-based Policy)</strong>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Discrete & Sequential</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2"><span>•</span> 사후 평가 위주 (Retrospective)</li>
                <li className="flex items-start gap-2"><span>•</span> 정적 정책 구조 (Static structure)</li>
                <li className="flex items-start gap-2"><span>•</span> 제한된 적응성 (Low adaptability)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">새로운 모델 (New Model)</h3>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg space-y-3 shadow-sm">
              <strong className="block text-blue-900 border-b border-blue-200 pb-2 mb-2">적응형 의사결정 시스템 (Adaptive)</strong>
              <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">Continuous & Adaptive</p>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start gap-2"><span>•</span> 실시간 데이터 통합 (Real-time)</li>
                <li className="flex items-start gap-2"><span>•</span> 지속적 학습 (Continuous learning)</li>
                <li className="flex items-start gap-2"><span>•</span> 시스템 주도 진화 (System-driven)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all hover:gap-3 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore PSDS Framework
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
