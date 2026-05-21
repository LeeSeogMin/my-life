import { ArrowRight, BarChart3, Brain, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 pb-12">
      {/* Hero — 3축 종합 포지셔닝 */}
      <section className="pt-16 lg:pt-20 pb-4">
        <div className="flex items-center gap-6 mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="이석민 교수 프로필 사진"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
          />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                이석민
              </h1>
              <span className="text-lg text-gray-500 font-medium">
                Seog-Min Lee
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">한신대학교 공공인재빅데이터융합학과 교수</p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-6">
          정책 AI 시스템의 의사결정, 평가, 방법론을 함께 설계합니다
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
          AI 기반 정책 의사결정 시스템, 정책분석·평가 시스템,
          Policy Methodology Lab을 연결하여 공공영역에서 신뢰 가능한
          정책 AI 시스템을 연구하고 구축합니다. SAPD Framework는 이 세 축을
          정책 실행과 학습 환류로 연결하는 상위 설계 원리입니다.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/research"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            연구 구조 보기
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            프로젝트 보기
          </Link>
        </div>
      </section>

      {/* What I Do — 3축 종합 구조 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">What I Do</h2>
          <p className="text-2xl font-semibold text-gray-900">정책 AI 연구·개발의 세 가지 축</p>
        </header>

        {/* 종합 구조 — 최상위 프레임 */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gray-900 rounded-full" />
            <h3 className="font-semibold text-gray-900 text-base">정책 AI 시스템 종합 구조</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            Policy Methodology Lab은 방법론과 검토 기준을 축적하고,
            정책분석·평가 시스템은 정책 질문과 인과추론 설계를 검토하며,
            AI 기반 정책 의사결정 시스템은 평가 결과를 판단·실행·학습 환류로 연결합니다.
            SAPD는 이 흐름을 상태 기반 적응형 정책 설계로 묶는 상위 프레임입니다.
          </p>

          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sapd-framework.svg"
              alt="SAPD Framework 통합 구조 — 상태 정의, 감지, 전환 판단, 행위 포트폴리오, 학습 환류를 연결하는 정책 의사결정 구조"
              width={720}
              height={520}
              className="w-full max-w-2xl h-auto"
            />
          </div>

          <div className="mt-4">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Research 페이지에서 3축 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3축 카드 */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Target className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Axis 01</p>
                <h3 className="font-semibold text-gray-900 text-base">AI 기반 정책 의사결정 시스템</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              정책을 고정된 계획이 아니라 상태 변화에 따라 조정되는 의사결정 시스템으로 본다.
              SAPD를 통해 상태 정의, 감지, 판단, 실행, 학습 환류를 연결한다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["SAPD", "Decision Loop", "Adaptive Policy"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Brain className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Axis 02</p>
                <h3 className="font-semibold text-gray-900 text-base">정책분석·평가 시스템</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              정책 질문이 평가 가능한지, 어떤 자료와 비교 기준이 필요한지,
              어떤 인과추론 설계가 적절한지를 판단하는 정책평가 AI agent를 구축한다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Policy Evaluation", "Causal Inference", "AI Agent"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><BarChart3 className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Axis 03</p>
                <h3 className="font-semibold text-gray-900 text-base">Policy Methodology Lab</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI 시대 정책연구 방법론을 재사용 가능한 라이브러리로 정리한다.
              방법론 카드, 분석 프로토콜, 루브릭, 코드 템플릿을 축적한다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Method Library", "Rubric", "Research Protocol"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evidence — 연구·개발과 최근 글 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Evidence</h2>
          <p className="text-2xl font-semibold text-gray-900">연구·개발과 최근 글</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-5">
          <Link href="/projects" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">프로젝트</span>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">3축</span>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">종합</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">정책 AI 연구·개발 프로젝트</h3>
            <p className="text-sm text-gray-600 line-clamp-2">AI 기반 의사결정 시스템, 정책분석·평가 시스템, Policy Methodology Lab을 연결하는 연구·개발 포트폴리오.</p>
            <p className="text-xs text-gray-400">진행 중</p>
          </Link>

          <Link href="/projects" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">프로젝트</span>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">정책평가</span>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">인과추론</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">인과분석 기반 정책평가 AI agent</h3>
            <p className="text-sm text-gray-600 line-clamp-2">정책 질문의 평가 가능성, 자료 요건, 식별전략, 해석 한계를 검토하는 정책분석·평가 시스템.</p>
            <p className="text-xs text-gray-400">기획·설계</p>
          </Link>

          <Link href="/projects" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">프로젝트</span>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">방법론</span>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">라이브러리</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">Policy Methodology Lab</h3>
            <p className="text-sm text-gray-600 line-clamp-2">인과추론, 텍스트 분석, RAG, LLM 평가, 혼합방법을 방법론 카드와 분석 프로토콜로 정리하는 라이브러리.</p>
            <p className="text-xs text-gray-400">진행 중</p>
          </Link>

          <Link href="/writings/columns/sapd-palantir-convergence" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">칼럼</span>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">설계 · 검증</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">SAPD Framework와 팔란티어 플랫폼의 구조적 동형성 분석</h3>
            <p className="text-sm text-gray-600 line-clamp-2">공공 의사결정 프레임워크(SAPD)와 팔란티어의 실시간 운영 플랫폼이 공유하는 구조적 동형성을 체계적으로 분석한 비교 보고서.</p>
            <p className="text-xs font-mono text-gray-400">2026-03-01</p>
          </Link>

          <Link href="/writings/columns/intro" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">칼럼</span>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">문제 정의</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">상태 기반 적응형 정책 개론</h3>
            <p className="text-sm text-gray-600 line-clamp-2">전략기획론의 역사적 논쟁과 증거 기반 정책의 구조적 한계를 비판적으로 검토하고, 상태 기반 적응형 정책의 이론적 기초를 체계적으로 제시합니다.</p>
            <p className="text-xs font-mono text-gray-400">2026-02-25</p>
          </Link>
        </div>

        <div className="flex gap-6 pt-2">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            연구 구조 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/writings"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            글과 연구 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
