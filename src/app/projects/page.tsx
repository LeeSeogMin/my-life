import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "프로젝트 — 진행 중인 연구·개발",
    description: "SAPD doctrine · 시니어 mHealth · 입지 분석 · 정부 정책 평가 AI · 선거 캠프 SADD 분석 · 한국 정책 시뮬레이션 등 진행 중인 연구·개발 프로젝트.",
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
    openGraph: {
        title: "프로젝트 — 이석민 | 진행 중인 연구·개발",
        description: "진행 중인 연구·개발 프로젝트.",
        url: `${SITE_URL}/projects`,
    },
};

export default function ProjectsPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Projects</h1>
                <p className="text-xl text-gray-600 font-light">
                    SAPD doctrine · 정책 평가 AI · 선거 캠프 SADD · 시니어 mHealth · 입지 분석 · 한국 정책 시뮬레이션
                </p>
            </header>

            {/* 협업 제안 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2">
                <h3 className="text-base font-bold text-gray-900">함께 연구할 파트너를 찾습니다</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    아래의 연구 주제에 관심이 있는 <strong className="text-gray-800">연구자, 공공기관, 지방자치단체</strong>와의 공동 연구·협력을 환영합니다.
                </p>
                <p className="text-sm text-gray-700">
                    관심 있으신 분은{" "}
                    <a href="mailto:newmind68@hs.ac.kr" className="font-semibold text-blue-600 hover:underline">
                        newmind68@hs.ac.kr
                    </a>
                    로 편하게 연락 주십시오.
                </p>
            </div>

            {/* 진행 중인 프로젝트 6 카드 */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">진행 중인 프로젝트</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* SAPD doctrine */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                            <span className="text-xs text-gray-400 font-mono">단계 3γ · 2026-05-16</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">SAPD doctrine — 상태 기반 적응형 정책 설계</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            State-based Adaptive Policy Design — SADD doctrine 의 공공정책 도메인 패키지. 5 층 본체 (L1 상태 정의 · L2 감지 · L3 전환 판단 · L4 행위 포트폴리오 · L5 학습 환류) + 5 번째 횡단 차원 (Cross-layer Governance Overlay). 두 라이브 인스턴스 — sapd-care (돌봄 행정 DSS) · sapd-policy (거시 정책 분석) — 와 통합 facade (sapd-gateway, Phase D).
                        </p>
                        <Link href="/framework" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800">
                            Framework 자세히 <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Doctrine</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Cybernetics</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">AI Governance</span>
                        </div>
                    </div>

                    {/* 정부 정책 평가 AI */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">제안 단계</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">정부 정책 평가 AI — 인과분석 기반 효과성평가</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정부업무평가·공공기관경영평가 (self_eval) + 기획재정부 재정사업 자율평가 (moef) 의 효과성평가를 과학적 인과분석 기반으로 자동화. 전문가의 주관적 평가를 객관적 평가로 전환하는 AI 기반 통합 평가 시스템. Method3 (DiD · SCM · PSM · Doubly Robust) 인과추론 통합.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Causal Inference</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Policy Evaluation</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">DiD · SCM · PSM</span>
                        </div>
                    </div>

                    {/* 선거 캠프 SADD 분석 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                            <span className="text-xs text-gray-400 font-mono">2026-06-03 본선</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">선거 캠프 SADD 분석 — war-room-platform</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            선거 캠프 분석의 candidate-agnostic 베이스 — 7 대 상태변수 (S1~S7) + S8 공간 분석 SADD 파이프라인. 후보별 인스턴스로 정원오 (서울시장 후보) · 김경수 (경남도지사 후보) 캠프에 적용. 후보 무관한 baseline + 후보별 config·데이터 분리 구조로 회귀 검증 (bit-equal 출력) 보장.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">SADD</span>
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">Election Analytics</span>
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">Spatial</span>
                        </div>
                    </div>

                    {/* ko-sim */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Phase 1 완료</span>
                            <span className="text-xs text-gray-400 font-mono">방법론 검증 MVP</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">ko-sim — 한국 공공정책 사전 탐색 시뮬레이션</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정책 설명 + 타겟 집단 → Nemotron 페르소나 + LLM → 세그먼트별 정책 반응 예측 + 실제 여론조사 Backtest 비교. silicon_sampling 후속 연구. 서비스 MVP 가 아닌 방법론 검증 MVP — 페르소나 모델·세그먼트 정의·백테스트 케이스의 학술적 타당성 우선.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Persona Simulation</span>
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">LLM</span>
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Policy Pretest</span>
                        </div>
                    </div>

                    {/* 시니어 mHealth */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">시니어 mHealth — 정신건강·일상기능 모니터링</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            시니어의 정신건강·일상생활 수행 능력·인지 기능을 모바일 헬스 데이터로 측정·진단·관리하는 AI 기반 mHealth 연구. 한신대학교 소프트웨어중심대학사업단의 시니어 정신건강 진단 앱 개발 (2025) 을 출발점으로 시니어 mHealth 본격 연구로 확장.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">mHealth</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Applied AI</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Public Health</span>
                        </div>
                    </div>

                    {/* 입지 분석 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">입지 분석 — site-selection-engine + 특허</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            지리공간 데이터 · 정책 신호 · 시장 신호를 결합하여 공공·민간 입지 의사결정을 보조하는 분석 시스템. 특허 (patent) 와 입지 선정 엔진 (site-selection-engine) 의 두 축으로 진행.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Geospatial</span>
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Site Selection</span>
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Patent</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 관련 콘텐츠 */}
            <nav className="border-t border-gray-200 pt-8 space-y-4">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">관련 콘텐츠</h2>
                <div className="flex flex-wrap gap-3">
                    <Link href="/framework" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        SAPD Framework
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/research" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        학술 연구
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/writings" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        저서 및 논문
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
