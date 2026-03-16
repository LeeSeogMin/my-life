import { ArrowRight, BarChart3, Code2, Target } from "lucide-react";
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
          정책 분석·평가 → AI 시스템 설계·검증 → 데이터 파이프라인 구축
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
          정책 분석·평가를 직접 수행하면서, 인과추론으로 개입의 효과를 검증합니다.
          AI 기반 분석·평가 시스템의 타당성을 검증하고,
          재현 가능한 데이터 파이프라인을 구축합니다.
          이 세 축을 하나로 연결하는 설계 아키텍처가 SAPD Framework입니다.
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

      {/* What I Do — 세 가지 축 + SAPD 통합 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">What I Do</h2>
          <p className="text-2xl font-semibold text-gray-900">세 가지 축</p>
        </header>

        {/* 3축 카드 */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Target className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">정책 분석·평가 · 인과추론</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              정책 문제를 구조화하고 분석·평가를 직접 수행합니다.
              인과추론과 실험설계로 &lsquo;왜 일어났는가&rsquo;, &lsquo;어떤 개입이 효과가 있는가&rsquo;를 분석하며,
              정부·공공기관의 성과평가 체계를 설계합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["정책분석", "성과평가", "인과추론", "실험설계"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><BarChart3 className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">AI 시스템 설계 · 검증</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI가 내놓은 분석을 그대로 쓰지 않습니다.
              설명가능성, 재현가능성, 설계 타당성을 검증하는 프레임워크를 설계합니다.
              SAPD Validation Module이 이 축의 핵심입니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["설명가능성", "검증 프레임워크", "AI 거버넌스", "평가 루브릭"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Code2 className="w-5 h-5" /></div>
              <h3 className="font-semibold text-gray-900 text-base">데이터 파이프라인 · 구축</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              이론은 구현될 때 비로소 검증됩니다.
              데이터 수집부터 변환, 분석, 시각화까지 재현 가능한 파이프라인을 설계하고,
              실제 작동하는 프로토타입으로 구축합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["파이프라인", "프로토타입", "데이터 엔지니어링", "운영 최적화"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>
        </div>

        {/* SAPD 통합 블록 — 세 축의 연결 아키텍처 */}
        <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gray-900 rounded-full" />
            <h3 className="font-semibold text-gray-900 text-base">SAPD Framework — 세 축의 통합 아키텍처</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            정책 분석·평가에서 출발하여, AI 시스템으로 설계·검증하고,
            데이터 파이프라인으로 구축하는 과정을
            실시간 상태 기반 피드백 루프로 연결합니다.
            세 축이 독립적으로 작동하지 않고 순환하도록 설계하는 것이 SAPD의 핵심입니다.
          </p>

          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sapd-framework.svg"
              alt="SAPD Framework 통합 구조 — 이론층(State → Decision → System Response 순환 루프)과 실무층(Validation Module: 분석 결과 타당성 검증, 시스템 설계 타당성 검증, 설명가능성 진단)"
              width={720}
              height={520}
              className="w-full max-w-2xl h-auto"
            />
          </div>

          <div className="mt-4">
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              SAPD Framework 상세 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">인과추론</span>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">파이프라인</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">AI 기반 국제관계 통합 분석 파이프라인</h3>
            <p className="text-sm text-gray-600 line-clamp-2">동아시아 국제관계 변동이 국내에 미치는 영향을 분석하는 AI 파이프라인. LLM Router 패턴과 인과추론 모듈을 결합.</p>
            <p className="text-xs text-gray-400">진행 중</p>
          </Link>

          <Link href="/projects" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">프로젝트</span>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">구축</span>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">도메인 특화</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">AI 기반 시니어 정신건강 진단 앱</h3>
            <p className="text-sm text-gray-600 line-clamp-2">한신대학교 소프트웨어중심대학사업단 프로젝트. 시니어의 정신건강을 선제적으로 진단·관리하는 AI 소프트웨어를 개발.</p>
            <p className="text-xs text-gray-400">2025. 05 – 2025. 09</p>
          </Link>

          <Link href="/writing/sapd-palantir-convergence" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
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

          <Link href="/writing/intro" className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all block space-y-2">
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
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            전체 프로젝트 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
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
