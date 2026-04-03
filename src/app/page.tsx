import { ArrowRight, BarChart3, Brain, Code2, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 pb-12">
      {/* Hero — SAPD 중심 포지셔닝 */}
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
          실시간 데이터 기반 정책 의사결정 시스템을 설계합니다
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
          정책을 고정된 계획이 아니라, 실시간 상태 데이터에 기반해
          지속적으로 적응하는 시스템으로 재설계합니다.
          정책 분석·인과추론, AI 설계·검증, 데이터 파이프라인은
          이 시스템의 방법론적 기반이며, 이를 통합한 것이 SAPD Framework입니다.
        </p>

        {/* CTA */}
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
        </div>
      </section>

      {/* What I Do — SAPD의 네 기능 */}
      <section className="space-y-8 pt-12 border-t border-gray-200">
        <header>
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">What I Do</h2>
          <p className="text-2xl font-semibold text-gray-900">SAPD — 실시간 적응형 정책 의사결정 시스템</p>
        </header>

        {/* SAPD 시스템 개요 — 최상위 프레임 */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gray-900 rounded-full" />
            <h3 className="font-semibold text-gray-900 text-base">State-based Adaptive Policy Design</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            SAPD는 정책 환경의 상태를 실시간으로 감지하고,
            최적의 의사결정을 도출하며, 그 결과를 검증하고, 작동하는 시스템으로 구축하는
            순환 프레임워크입니다. 아래 네 기능이 독립적으로 작동하지 않고 피드백 루프로 순환합니다.
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

        {/* SAPD 하위 4기능 카드 */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Sense — State(t) */}
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Target className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">State(t) 감지</p>
                <h3 className="font-semibold text-gray-900 text-base">정책 분석·평가 · 인과추론</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              정책 환경의 현재 상태를 데이터로 포착합니다.
              인과추론과 실험설계로 &lsquo;왜 일어났는가&rsquo;, &lsquo;어떤 개입이 효과가 있는가&rsquo;를 분석하며,
              정부·공공기관의 성과평가 체계를 설계합니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["정책분석", "성과평가", "인과추론", "실험설계"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          {/* Decide — Decision(t) */}
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Brain className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Decision(t) 결정</p>
                <h3 className="font-semibold text-gray-900 text-base">의사결정 지원 · 방법론 엔진</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              강화학습, 디지털 트윈, Causal ML, 에이전트 기반 시뮬레이션으로
              정책 생애주기 전반의 의사결정을 데이터 기반으로 지원합니다.
              상태 데이터에서 최적 정책 대응을 도출하는 SAPD의 방법론적 엔진입니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["강화학습", "디지털 트윈", "Causal ML", "에이전트 시뮬레이션"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          {/* Validate */}
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><BarChart3 className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Validation 검증</p>
                <h3 className="font-semibold text-gray-900 text-base">AI 시스템 설계 · 검증</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI가 내놓은 분석을 그대로 쓰지 않습니다.
              설명가능성, 재현가능성, 설계 타당성을 검증하는 체계를 연구합니다.
              SAPD Validation Module의 평가 루브릭과 검증 프로토콜을 설계 중입니다.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["설명가능성", "검증 프레임워크", "AI 거버넌스", "평가 루브릭"].map((kw) => (
                <span key={kw} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{kw}</span>
              ))}
            </div>
          </div>

          {/* Build */}
          <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-blue-500"><Code2 className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Build 구축</p>
                <h3 className="font-semibold text-gray-900 text-base">데이터 파이프라인 · 구축</h3>
              </div>
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
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">SAPD</span>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">의사결정 지원</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-base leading-snug">지능형 정책 의사결정 지원 시스템</h3>
            <p className="text-sm text-gray-600 line-clamp-2">강화학습, 디지털 트윈, Causal ML, 에이전트 기반 시뮬레이션을 통합한 SAPD 기반 정책 의사결정 지원 체계.</p>
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
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            전체 프로젝트 보기
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
