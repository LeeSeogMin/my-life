import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Public Strategy and <br className="hidden sm:block" />
          Policy Decision System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
          전략, 정책, 데이터, 평가, 그리고 AI를 통합하는 공공 의사결정 시스템(Decision System)의 연구 및 설계
        </p>
      </section>

      <section className="bg-white p-8 border border-gray-200 shadow-sm rounded-lg">
        <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-400 mb-4">핵심 명제 (Core Thesis)</h2>
        <div className="space-y-3 text-lg font-medium text-gray-800">
          <p>공공 정책은 고립된 개입이 아니다.</p>
          <p>공공 정책은 적응형 의사결정 시스템(Adaptive Decision System)의 산출물이다.</p>
          <p>정책의 질은 의사결정 시스템의 구조에 달려 있다.</p>
        </div>
      </section>

      <section className="space-y-8 pt-8 border-t border-gray-100">
        <div>
          <h2 className="text-2xl font-bold mb-2">패러다임 전환 (Paradigm Shift)</h2>
          <p className="text-gray-600 mb-6 font-medium">증거 기반 정책(Evidence-based Policy)에서 AI 기반 적응형 의사결정 시스템으로.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">과거 모델 (Traditional Model)</h3>
            <div className="bg-gray-50 border-l-4 border-gray-300 p-6 space-y-3">
              <strong className="block text-gray-800">증거 기반 정책 (Evidence-based Policy)</strong>
              <p className="text-sm font-mono text-gray-500">정책 → 실행 → 평가 → 정책 수정</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside pt-2">
                <li>사후 평가 위주 (Retrospective evaluation)</li>
                <li>정적 정책 구조 (Static policy structure)</li>
                <li>제한된 적응성 (Limited adaptability)</li>
                <li>느린 피드백 주기 (Slow feedback cycles)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">새로운 모델 (New Model)</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 space-y-3">
              <strong className="block text-blue-900">적응형 의사결정 시스템 (Adaptive Decision System)</strong>
              <p className="text-sm font-mono text-blue-700">의사결정 시스템 → 데이터 통합 → 평가 → 지속적 적응</p>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside pt-2">
                <li>실시간 데이터 통합 (Real-time data integration)</li>
                <li>지속적 학습 (Continuous learning)</li>
                <li>적응형 전략 (Adaptive strategy)</li>
                <li>시스템 주도 정책 진화 (System-driven policy evolution)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-8">
        <Link
          href="/framework"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          PSDS 프레임워크 구조 살펴보기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
