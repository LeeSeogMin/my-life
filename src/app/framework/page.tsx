import { ArrowDown, ArrowRight, Database, Cpu, Activity, RefreshCw, Shield, Eye, Users, CheckCircle2, Search, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "SAPD Framework — 상태 기반 적응형 정책 설계 아키텍처",
    description: "증거 기반 정책(EBP)의 구조적 한계를 실시간 적응형 의사결정 체계로 진화시키는 SAPD Framework. 5대 레이어 아키텍처와 순환 피드백 루프를 통해 공공 의사결정의 패러다임 전환을 설계합니다.",
    alternates: {
        canonical: `${SITE_URL}/framework`,
    },
    openGraph: {
        title: "SAPD Framework — 이석민 | 상태 기반 적응형 정책",
        description: "증거 기반 의사결정을 실시간 적응형으로 진화시키는 SAPD Framework의 5대 레이어 아키텍처.",
        url: `${SITE_URL}/framework`,
    },
};

export default function FrameworkPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 shadow-sm inline-block">SAPD Framework</h1>
                <p className="text-xl text-gray-600 font-light">
                    증거 기반 의사결정을 실시간 적응형으로 진화시키는 정책 설계 아키텍처
                </p>
                <p className="text-sm text-gray-400 font-medium max-w-2xl mx-auto">
                    SAPD(State-based Adaptive Policy Design)는 증거 기반 정책(EBP)이 확립한 &apos;증거에 기반한 의사결정&apos;의 원칙을 계승하되, 증거를 처리하는 시간 구조를 <strong className="text-gray-500">사후적 스냅샷에서 실시간 상태 흐름으로</strong> 전환하는 설계 방법론이다.
                </p>
            </header>

            {/* EBP → SAPD 패러다임 전환 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">패러다임 전환: 왜 SAPD인가</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    증거 기반 정책(EBP)은 공공 의사결정을 데이터 기반 객관성의 토대 위로 견인한 혁신적 패러다임이었다. 그러나 동태적 환경의 가속화 앞에서 세 가지 구조적 한계가 드러나고 있다.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                        <p className="text-sm font-bold text-gray-900">사후 평가의 함정</p>
                        <p className="text-xs text-gray-500 leading-relaxed">평가 결과가 환류되는 시점에 환경은 이미 변화. 정책은 이전 상태에 대한 처방을 제시하게 된다.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                        <p className="text-sm font-bold text-gray-900">분절적 피드백 루프</p>
                        <p className="text-xs text-gray-500 leading-relaxed">정책-집행-평가-수정의 제도적 분절로 피드백 순환 주기가 환경 변화보다 느리다.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                        <p className="text-sm font-bold text-gray-900">데이터 비연속성</p>
                        <p className="text-xs text-gray-500 leading-relaxed">데이터가 실시간 흐름이 아닌 특정 시점의 스냅샷으로 처리. 과거 정보에 기반한 판단.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 max-w-3xl mx-auto">
                    <div className="flex-1 w-full p-5 bg-gray-50 rounded-xl border border-gray-200">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">기존 패러다임</p>
                        <p className="text-sm font-bold text-gray-700">증거 기반 정책 (EBP)</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">사후 평가</span>
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">이산적 스냅샷</span>
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">분절적 피드백</span>
                        </div>
                    </div>
                    <div className="flex-shrink-0 text-gray-400">
                        <ArrowRight className="hidden sm:block w-6 h-6" />
                        <ArrowDown className="block sm:hidden w-6 h-6" />
                    </div>
                    <div className="flex-1 w-full p-5 bg-white rounded-xl border-2 border-gray-900 shadow-md">
                        <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">SAPD</p>
                        <p className="text-sm font-bold text-gray-900">상태 기반 적응형 정책</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">실시간 상태 관찰</span>
                            <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">연속적 학습</span>
                            <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">적응형 피드백</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5대 레이어 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">5대 레이어 아키텍처</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    EBP의 구조적 한계를 해결하기 위해 SAPD는 5단계의 구조적 아키텍처를 설계한다. 각 레이어는 순차적 절차가 아니라 동시적으로 작동하는 구조적 층위이며, 레이어 간 상호 참조가 연속적으로 이루어진다.
                </p>
                <div className="space-y-8 pl-4 border-l border-gray-200">
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 1: 문제 구조화 (Problem Structuring)</h3>
                        <p className="text-gray-600 mt-1">시스템의 경계와 정책 문제를 정의한다. <strong className="text-gray-700">State(t)에 어떤 변수를 포함할 것인가는 순수한 기술적 선택이 아니라 규범적·정치적 판단이다.</strong> 특정 집단의 현실이 상태 공간에 포함되느냐 배제되느냐에 따라 정책 시스템의 인지 범위가 결정된다.</p>
                        <p className="text-xs text-gray-400 mt-2">EBP 한계 해결: 무엇을 관찰할 것인가를 명시적으로 설계함으로써 데이터 비연속성의 근원을 구조적으로 해소</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 2: 전략 구조화 (Strategy Structuring)</h3>
                        <p className="text-gray-600 mt-1">전략적 구조와 성과 생성 논리를 모델링한다. 효율성·형평성·자유·안전 등 <strong className="text-gray-700">경합하는 공공 가치 간의 가중치를 결정하는 민주적 심의</strong>가 이 단계에서 이루어진다.</p>
                        <p className="text-xs text-gray-400 mt-2">EBP 한계 해결: 사후 평가에서 비로소 드러나던 가치 충돌을 설계 단계에서 사전적으로 구조화</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 3: 의사결정 아키텍처 (Decision Architecture)</h3>
                        <p className="text-gray-600 mt-1">의사결정 노드, 권한, 기준을 설계한다. 핵심 요건은 <strong className="text-gray-700">의사결정 함수 f의 감사 가능성(auditability)</strong>이다 — f가 어떤 변수에 어떤 가중치를 부여하고 어떤 임계값에서 판단이 전환되는지가 시민과 의회에 의해 검증 가능해야 한다.</p>
                        <p className="text-xs text-gray-400 mt-2">EBP 한계 해결: 정적 If-Then 규칙을 동태적 의사결정 함수 f(State(t))로 전환하여 실시간 적응 실현</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 4: 데이터 통합 (Data Integration)</h3>
                        <p className="text-gray-600 mt-1">실시간 데이터와 AI를 의사결정 시스템 내부로 통합한다. <strong className="text-gray-700">무엇이 측정되고 무엇이 측정되지 않는가는 측정 인프라의 정치경제학과 데이터 거버넌스 구조에 의해 결정</strong>된다는 점을 명시적으로 인식해야 한다.</p>
                        <p className="text-xs text-gray-400 mt-2">EBP 한계 해결: 이산적 스냅샷을 실시간 상태 흐름(State Stream)으로 전환하여 데이터 비연속성 해소</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 5: 평가 및 적응형 피드백 (Evaluation & Adaptive Feedback)</h3>
                        <p className="text-gray-600 mt-1">사후 평가가 아닌 연속적 상태 관찰에 기반한 피드백 루프를 설계한다. <strong className="text-gray-700">시민의 경험, 민원, 참여 데이터를 상태 관찰의 정당한 데이터 스트림으로 편입</strong>시킴으로써, 피드백 루프 자체가 민주적 참여의 채널이 된다.</p>
                        <p className="text-xs text-gray-400 mt-2">EBP 한계 해결: 분절적 피드백 루프를 연속적 순환 구조로 전환하여 피드백 주기를 환경 변화 속도에 부합시킴</p>
                    </div>
                </div>
            </section>

            {/* 순환 피드백 루프 다이어그램 */}
            <section className="space-y-8 bg-white border border-gray-200 shadow-sm rounded-xl p-8 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

                <header>
                    <h2 className="text-2xl font-bold text-gray-900">적응형 의사결정 루프 (Adaptive Decision Loop)</h2>
                    <p className="text-gray-500 mt-2 font-medium">EBP의 순차적·이산적 시간 구조를 연속적 순환 피드백 루프로 전환한다.</p>
                </header>

                <div className="flex flex-col items-center justify-center py-6 mt-8 relative max-w-2xl mx-auto">

                    {/* Step 1: State(t) */}
                    <div className="w-full flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-5 shadow-sm z-10 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                <Database className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 font-mono">State(t)</h3>
                                <p className="text-sm text-blue-700 font-medium">연속적 시스템 상태 관찰</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-100 px-2 py-1 rounded">Observation</span>
                    </div>
                    <div className="w-full bg-blue-50/50 border border-dashed border-blue-200 rounded px-4 py-2 mt-1 z-10">
                        <p className="text-xs text-blue-600 flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 flex-shrink-0" /> <strong>EBP 전환:</strong> 이산적 스냅샷 → 실시간 상태 흐름 | <strong>민주적 통제:</strong> 상태 변수 선택은 규범적 판단</p>
                    </div>

                    <ArrowDown className="w-6 h-6 text-gray-300 my-2" />

                    <div className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-5 shadow-sm z-10 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-200 rounded-full text-slate-700">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 font-mono">Decision(t) = f(State(t))</h3>
                                <p className="text-sm text-slate-600 font-medium">상태값 기반 동태적 의사결정 규칙 연산</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-200 px-2 py-1 rounded">Computation</span>
                    </div>
                    <div className="w-full bg-slate-50/50 border border-dashed border-slate-200 rounded px-4 py-2 mt-1 z-10">
                        <p className="text-xs text-slate-600 flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 flex-shrink-0" /> <strong>EBP 전환:</strong> 정적 규칙 → 적응형 함수 | <strong>민주적 통제:</strong> 함수 f의 감사 가능성(auditability)</p>
                    </div>

                    <ArrowDown className="w-6 h-6 text-gray-300 my-2" />

                    {/* Step 3: System response */}
                    <div className="w-full flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-5 shadow-sm z-10 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-emerald-900 font-mono">System Response</h3>
                                <p className="text-sm text-emerald-700 font-medium">결정 실행에 따른 시스템 물리/사회적 반응</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-100 px-2 py-1 rounded">Action</span>
                    </div>

                    <ArrowDown className="w-6 h-6 text-gray-300 my-2" />

                    {/* Step 4: State(t+1) */}
                    <div className="w-full flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg p-5 shadow-sm z-10 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                <RefreshCw className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-purple-900 font-mono">State(t+1)</h3>
                                <p className="text-sm text-purple-700 font-medium">변화된 시스템 상태 갱신 및 순환</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-100 px-2 py-1 rounded">Feedback Update</span>
                    </div>
                    <div className="w-full bg-purple-50/50 border border-dashed border-purple-200 rounded px-4 py-2 mt-1 z-10">
                        <p className="text-xs text-purple-600 flex items-center gap-1.5"><Users className="w-3.5 h-3.5 flex-shrink-0" /> <strong>EBP 전환:</strong> 종착점 → 순환 시작점 | <strong>민주적 통제:</strong> 시민 참여 데이터를 상태 스트림으로 편입</p>
                    </div>

                    {/* The Loop Line */}
                    <div className="absolute top-14 bottom-14 -left-12 w-20 border-l-2 border-t-2 border-b-2 border-dashed border-gray-300 rounded-l-3xl hidden sm:block opacity-60" />
                    <div className="absolute top-[80px] -left-[54px] w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-45 hidden sm:block" />

                </div>
            </section>

            {/* 분석 도구군의 구조적 배치 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">분석 도구군의 구조적 배치</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    SAPD가 활용하는 분석 도구들은 방법론의 단순한 나열이 아니라, 적응형 의사결정 루프의 각 단계에 구조적으로 배치되는 인프라스트럭처이다. <strong className="text-gray-700">도구의 신규성이 아니라 배치의 체계성이 SAPD 방법론의 핵심이다.</strong>
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">State(t) 정초</p>
                        <p className="text-sm font-bold text-gray-900">인과 추론</p>
                        <p className="text-xs text-gray-500 leading-relaxed">의사결정 함수 f가 허위 상관이 아닌 인과적 메커니즘에 기반하도록 정초(grounding)한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">State(t) 불확실성</p>
                        <p className="text-sm font-bold text-gray-900">베이지안 사고</p>
                        <p className="text-xs text-gray-500 leading-relaxed">부분 관찰 가능 환경에서 상태에 대한 신념을 사전 확률과 새로운 증거의 결합으로 갱신한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Response → State(t+1)</p>
                        <p className="text-sm font-bold text-gray-900">시스템 다이내믹스</p>
                        <p className="text-xs text-gray-500 leading-relaxed">정책 개입이 어떤 피드백 루프를 매개로 시스템 상태를 변화시키는지 구조적으로 모델링한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-purple-500 uppercase tracking-wider">State(t+1) 복수 경로</p>
                        <p className="text-sm font-bold text-gray-900">시나리오 플래닝</p>
                        <p className="text-xs text-gray-500 leading-relaxed">단일 예측이 아닌 복수의 미래 상태를 구조화하여 정책 시스템의 강건성을 확보한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Decision(t) 위험 평가</p>
                        <p className="text-sm font-bold text-gray-900">몬테카를로 시뮬레이션</p>
                        <p className="text-xs text-gray-500 leading-relaxed">확률적 변동 하에서 정책 결정의 기대 성과와 최악의 시나리오를 정량적으로 산출한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-amber-500 uppercase tracking-wider">Decision(t) 최적 전략 탐색</p>
                        <p className="text-sm font-bold text-gray-900">강화학습</p>
                        <p className="text-xs text-gray-500 leading-relaxed">상태-행동 공간에서 최적 정책 전략을 탐색하고, 환경 피드백을 통해 적응적으로 의사결정을 개선한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-cyan-500 uppercase tracking-wider">State(t) 가상 복제</p>
                        <p className="text-sm font-bold text-gray-900">디지털 트윈</p>
                        <p className="text-xs text-gray-500 leading-relaxed">정책 환경의 가상 복제본을 구축하여 개입 시나리오를 사전 시뮬레이션하고 결과를 예측한다.</p>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 hover:border-gray-300 transition-colors">
                        <p className="text-xs font-bold text-rose-500 uppercase tracking-wider">System Response 창발</p>
                        <p className="text-sm font-bold text-gray-900">에이전트 기반 시뮬레이션</p>
                        <p className="text-xs text-gray-500 leading-relaxed">이질적 행위자들의 상호작용을 모델링하여 정책 개입의 창발적 시스템 반응을 예측한다.</p>
                    </div>
                </div>
            </section>

            {/* SAPD Validation Module (실무층) */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">SAPD Validation Module (실무층)</h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        SAPD의 이론적 아키텍처를 실무에서 적용하기 위한 검증 도구 모듈이다.
                        공공 AI 시스템의 타당성을 구조적으로 검토하는 체크리스트, 진단 도구, 평가 루브릭을 제공한다.
                        EU AI Act, NIST AI RMF, 캐나다 AIA, 한국 인공지능 기본법 등 국제 주요 프레임워크를 비교 분석하여 SAPD의 적응형 루프에 통합하는 형태로 설계하고 있다.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-blue-700">연구 진행 중 — Draft v0.1</span>
                    </div>
                </div>

                {/* Tool 1: 공공 AI 검증 체크리스트 */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-5">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 mt-0.5">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">공공 AI 검증 체크리스트</h3>
                            <p className="text-sm text-gray-500 mt-1">공공영역 AI 시스템의 생애주기 전반을 3단계 × 7개 도메인으로 구조화한 검증 체계</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">참조 프레임워크</p>
                        <div className="flex flex-wrap gap-1.5">
                            {["Canada AIA", "EU AI Act", "NIST AI RMF", "한국 인공지능 기본법", "UK ATRS", "Singapore MAIGF"].map((fw) => (
                                <span key={fw} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{fw}</span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">3단계 검증 프로세스</p>
                        <div className="grid sm:grid-cols-3 gap-3">
                            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 space-y-1.5">
                                <p className="text-xs font-bold text-blue-700">Phase 1 · 사전 검증</p>
                                <p className="text-sm text-gray-600 leading-relaxed">도입 목적 정당성, 영향 평가, 데이터 거버넌스 적합성을 시스템 구축 이전에 검증</p>
                            </div>
                            <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 space-y-1.5">
                                <p className="text-xs font-bold text-emerald-700">Phase 2 · 운영 중 검증</p>
                                <p className="text-sm text-gray-600 leading-relaxed">모델 성능 모니터링, 편향 드리프트 감시, 이해관계자 피드백 루프를 실시간 운영</p>
                            </div>
                            <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100 space-y-1.5">
                                <p className="text-xs font-bold text-purple-700">Phase 3 · 사후 검증</p>
                                <p className="text-sm text-gray-600 leading-relaxed">결과 감사, 정책 환류, 시스템 퇴역·전환 판단 기준 적용</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">7개 검증 도메인</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {[
                                { domain: "목적 정당성", desc: "공공 가치 부합성, 비례성 원칙, 대안 분석" },
                                { domain: "데이터 거버넌스", desc: "출처 추적성, 대표성, 개인정보 보호, 데이터 품질" },
                                { domain: "모델 구조", desc: "알고리즘 선택 근거, 공정성 제약, 성능 임계값" },
                                { domain: "출력 검증", desc: "결과 타당성, 오류 허용 범위, 이의제기 경로" },
                                { domain: "설명가능성", desc: "의사결정 논리 추적, 이해관계자별 설명 수준" },
                                { domain: "운영 안전성", desc: "장애 대응, 인간 개입 절차, 모니터링 체계" },
                                { domain: "민주적 통제", desc: "시민 참여, 의회 감독, 정보 공개 범위" },
                            ].map((item) => (
                                <div key={item.domain} className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-lg">
                                    <span className="text-xs font-bold text-gray-900 bg-gray-200 px-1.5 py-0.5 rounded whitespace-nowrap mt-0.5">{item.domain}</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-800 leading-relaxed">
                            <strong>SAPD 연동:</strong> 기존 프레임워크들이 정적 체크리스트에 머무는 반면, SAPD 검증 체크리스트는 Phase 2의 실시간 모니터링 항목이 적응형 의사결정 루프의 State(t) 관찰과 직접 연동되어, 검증 결과가 자동으로 정책 조정을 트리거하는 구조를 지향한다.
                        </p>
                    </div>
                </div>

                {/* Tool 2: 설명가능성 진단 도구 */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-5">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-0.5">
                            <Search className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">설명가능성 진단 도구</h3>
                            <p className="text-sm text-gray-500 mt-1">AI 의사결정의 설명가능성 수준을 5개 차원 × 4단계 척도로 진단하는 구조화된 프레임</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">참조 프레임워크</p>
                        <div className="flex flex-wrap gap-1.5">
                            {["DARPA XAI", "EU AI Act Art.13", "OECD AI Principles", "IEEE 7001", "NIST AI 100-1", "Doshi-Velez & Kim Taxonomy"].map((fw) => (
                                <span key={fw} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{fw}</span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">5개 진단 차원 (각 4개 진단 항목)</p>
                        <div className="space-y-3">
                            {[
                                {
                                    dim: "기술적 투명성",
                                    color: "blue",
                                    items: ["모델 아키텍처 문서화 수준", "입출력 관계 추적 가능성", "특성 기여도(feature attribution) 제공 여부", "불확실성 정량화 수준"],
                                },
                                {
                                    dim: "의사결정 추적성",
                                    color: "indigo",
                                    items: ["개별 결정의 근거 재구성 가능성", "반사실적(counterfactual) 설명 생성 능력", "결정 경로의 로깅·감사 체계", "시간에 따른 결정 패턴 추적"],
                                },
                                {
                                    dim: "이해관계자 적합성",
                                    color: "violet",
                                    items: ["정책결정자용 요약 설명 품질", "피영향자용 이해 가능한 설명 제공", "기술 감사자용 상세 설명 지원", "일반 시민용 접근 가능한 설명"],
                                },
                                {
                                    dim: "맥락적 적절성",
                                    color: "purple",
                                    items: ["도메인 특수성 반영 정도", "문화·사회적 맥락 고려", "법적 요구사항 충족 수준", "윤리적 함의 설명 포함"],
                                },
                                {
                                    dim: "동태적 설명력",
                                    color: "fuchsia",
                                    items: ["시간 경과에 따른 설명 일관성", "모델 업데이트 시 설명 변화 추적", "환경 변화에 대한 설명 적응", "설명 품질의 지속적 모니터링"],
                                },
                            ].map((d) => (
                                <div key={d.dim} className="p-3 bg-gray-50 rounded-lg space-y-2">
                                    <p className="text-xs font-bold text-gray-900">{d.dim}</p>
                                    <div className="grid sm:grid-cols-2 gap-1.5">
                                        {d.items.map((item) => (
                                            <p key={item} className="text-sm text-gray-600 flex items-start gap-1.5">
                                                <span className="text-gray-300 mt-0.5">—</span> {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">4단계 진단 척도</p>
                        <div className="grid grid-cols-4 gap-2">
                            {[
                                { level: "Level 1", label: "불투명", color: "bg-red-50 text-red-700 border-red-100" },
                                { level: "Level 2", label: "부분적", color: "bg-amber-50 text-amber-700 border-amber-100" },
                                { level: "Level 3", label: "구조적", color: "bg-blue-50 text-blue-700 border-blue-100" },
                                { level: "Level 4", label: "적응적", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                            ].map((l) => (
                                <div key={l.level} className={`p-2 rounded-lg border text-center ${l.color}`}>
                                    <p className="text-xs font-bold">{l.level}</p>
                                    <p className="text-xs font-semibold">{l.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-800 leading-relaxed">
                            <strong>SAPD 연동:</strong> Level 4 &apos;적응적 설명가능성&apos;은 SAPD 고유의 기여로, 설명이 State(t)의 변화에 따라 동태적으로 갱신되는 구조를 요구한다. 이는 정적 설명서(static documentation)에 머무는 기존 XAI 접근을 넘어서는 설계이다.
                        </p>
                    </div>
                </div>

                {/* Tool 3: 감사 가능성 평가 루브릭 */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-5">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600 mt-0.5">
                            <ClipboardCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">감사 가능성 평가 루브릭</h3>
                            <p className="text-sm text-gray-500 mt-1">정책 AI 시스템의 감사 가능성을 10개 차원 × 5단계 성숙도로 평가하는 다차원 루브릭</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">참조 프레임워크</p>
                        <div className="flex flex-wrap gap-1.5">
                            {["GAO AI Accountability", "IIA AI Auditing", "ISACA/COBIT", "EDPB Guidelines", "SMACTR (Raji et al.)", "Mokander et al. Three-layered Audit"].map((fw) => (
                                <span key={fw} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{fw}</span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">10개 평가 차원</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {[
                                { dim: "거버넌스 구조", desc: "AI 시스템 관리 체계, 역할·책임 명확성, 의사결정 권한 배분" },
                                { dim: "데이터 추적성", desc: "데이터 출처·변환 이력, 계보(lineage) 관리, 품질 검증 기록" },
                                { dim: "모델 문서화", desc: "아키텍처·하이퍼파라미터·학습 이력의 체계적 문서화 수준" },
                                { dim: "테스트·검증", desc: "성능·공정성·강건성 테스트 체계, 적대적(adversarial) 검증" },
                                { dim: "변경 관리", desc: "모델 버저닝, 변경 승인 절차, 롤백 체계, 영향 평가" },
                                { dim: "접근 통제", desc: "시스템 접근 권한, 로그 관리, 권한 분리(separation of duties)" },
                                { dim: "사고 대응", desc: "이상 탐지, 긴급 중단(kill switch), 사고 보고·분석 체계" },
                                { dim: "이해관계자 소통", desc: "감사 결과 공개, 이의제기 절차, 시민 참여 메커니즘" },
                                { dim: "법적 준거", desc: "관할권별 규제 요건 매핑, 준수 증적(evidence) 관리" },
                                { dim: "지속적 모니터링", desc: "실시간 성능·편향 감시, 드리프트 탐지, 자동 알림 체계" },
                            ].map((item) => (
                                <div key={item.dim} className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-lg">
                                    <span className="text-xs font-bold text-gray-900 bg-gray-200 px-1.5 py-0.5 rounded whitespace-nowrap mt-0.5">{item.dim}</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">5단계 성숙도 척도</p>
                        <div className="grid grid-cols-5 gap-1.5">
                            {[
                                { level: "1", label: "초기", color: "bg-red-50 text-red-700 border-red-100" },
                                { level: "2", label: "반복", color: "bg-orange-50 text-orange-700 border-orange-100" },
                                { level: "3", label: "정의", color: "bg-amber-50 text-amber-700 border-amber-100" },
                                { level: "4", label: "관리", color: "bg-blue-50 text-blue-700 border-blue-100" },
                                { level: "5", label: "최적화", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                            ].map((l) => (
                                <div key={l.level} className={`p-2 rounded-lg border text-center ${l.color}`}>
                                    <p className="text-xs font-bold">Level {l.level}</p>
                                    <p className="text-sm font-semibold">{l.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">CMMI/COBIT 성숙도 모델을 AI 감사 맥락에 적응. 각 차원별 Level 1(비공식적·임시적)에서 Level 5(자동화·자기최적화)까지의 구체적 기준을 정의한다.</p>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-800 leading-relaxed">
                            <strong>SAPD 연동:</strong> &apos;지속적 모니터링&apos; 차원은 SAPD Layer 5(평가 및 적응형 피드백)와 직접 연결된다. Level 5 성숙도에서는 감사 결과가 State(t+1)로 자동 환류되어, 감사가 일회적 이벤트가 아닌 적응형 루프의 구성 요소로 작동한다. 또한 LLM 기반 시스템의 특수성(환각, 프롬프트 취약성, 출력 비결정성)을 반영한 하위 차원을 별도 설계 중이다.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">How to Use</h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        SAPD Framework를 실무에 적용하기 위한 5단계 이행 가이드이다.
                        NIST AI RMF Playbook, EU AI Act 이행 로드맵, DAPP(Dynamic Adaptive Policy Pathways),
                        OECD OPSI Innovation Playbook, 적응적 관리(Adaptive Management) 방법론 등 주요 프레임워크의
                        이행 전략을 비교 분석하여 SAPD에 적합한 구조로 재설계하고 있다.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-blue-700">연구 진행 중 — Draft v0.1</span>
                    </div>
                </div>

                {/* 참조 프레임워크 */}
                <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">참조 프레임워크</p>
                    <div className="flex flex-wrap gap-1.5">
                        {["NIST AI RMF Playbook", "EU AI Act Implementation", "OECD OPSI Playbook", "DAPP (Haasnoot et al.)", "Adaptive Management (USGS)", "CFIR/RE-AIM", "UK Policy Lab", "UK Gov DMA"].map((fw) => (
                            <span key={fw} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{fw}</span>
                        ))}
                    </div>
                </div>

                {/* 5단계 이행 프로세스 */}
                <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">5단계 이행 프로세스</p>

                    <div className="space-y-3">
                        {[
                            {
                                phase: "Phase 1",
                                title: "준비 (Readiness)",
                                layer: "Layer 1 연동",
                                color: "blue",
                                desc: "조직 성숙도 자기진단, 이해관계자 매핑, 기존 정책 시스템 인벤토리, 시스템 경계 정의",
                                deliverables: ["성숙도 진단 보고서", "이해관계자 맵", "정책 시스템 인벤토리", "범위 정의서"],
                                ref: "NIST Tiers 자기진단 + CFIR 조직 준비도 평가",
                            },
                            {
                                phase: "Phase 2",
                                title: "진단 (Diagnosis)",
                                layer: "Layer 1–2 연동",
                                color: "indigo",
                                desc: "기존 정책 구조·의사결정 프로세스 심층 분석, 상태 변수 식별, 가치 충돌 구조 매핑, 데이터 준비도 평가",
                                deliverables: ["시스템 다이내믹스 맵", "가치 트레이드오프 매트릭스", "데이터 준비도 평가서", "갭 분석 보고서"],
                                ref: "Meadows 레버리지 포인트 + Checkland SSM",
                            },
                            {
                                phase: "Phase 3",
                                title: "설계 (Architecture)",
                                layer: "Layer 3–5 연동",
                                color: "violet",
                                desc: "의사결정 아키텍처 설계(노드·권한·기준), 데이터 통합 파이프라인 설계, 피드백 루프 및 모니터링 프로토콜 구축",
                                deliverables: ["의사결정 아키텍처 블루프린트", "데이터 통합 설계서", "피드백 루프 설계서", "프로토타입 인터페이스"],
                                ref: "OECD OPSI 'Designing the Solution' + Design Thinking",
                            },
                            {
                                phase: "Phase 4",
                                title: "시범운영 (Pilot)",
                                layer: "전 레이어 제한적 적용",
                                color: "emerald",
                                desc: "제한된 정책 도메인에서 SAPD 전 레이어 배포, 기준선 측정, 능동적 모니터링·학습 순환, 반복 개선",
                                deliverables: ["파일럿 범위 정의서", "기준선 측정 보고서", "학습 로그", "파일럿 평가 보고서"],
                                ref: "WEF 규제 샌드박스 + 적응적 관리 '적응적 단계화'",
                            },
                            {
                                phase: "Phase 5",
                                title: "확장 (Scaling)",
                                layer: "조직 전체·타 도메인",
                                color: "purple",
                                desc: "파일럿에서 추가 정책 도메인으로 파형 확장, 거버넌스 구조 제도화, 조직 역량 구축, 지속적 개선 메커니즘 정착",
                                deliverables: ["확장 로드맵", "거버넌스 헌장", "교육 프로그램", "교차 도메인 통합 계획"],
                                ref: "EU AI Act 단계적 롤아웃 + HBR 파형 확장 모델",
                            },
                        ].map((p) => (
                            <div key={p.phase} className="p-4 bg-white border border-gray-200 rounded-xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-bold bg-${p.color}-100 text-${p.color}-700 px-2 py-0.5 rounded-full`}>{p.phase}</span>
                                    <h4 className="text-sm font-bold text-gray-900">{p.title}</h4>
                                    <span className="text-xs text-gray-400 font-medium ml-auto">{p.layer}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.deliverables.map((d) => (
                                        <span key={d} className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">{d}</span>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400"><strong>참조:</strong> {p.ref}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 조직 성숙도별 진입점 */}
                <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">조직 성숙도별 진입점</p>
                    <p className="text-sm text-gray-500 max-w-3xl">
                        NIST AI RMF Tiers, UK Government DMA, Digital Twin 성숙도 모델을 참조하여
                        조직의 현재 역량 수준에 따라 차별화된 진입점을 설계한다.
                        모든 프레임워크가 공통적으로 강조하는 원칙: <strong className="text-gray-700">모놀리식이 아닌 모듈식 도입.</strong>
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { level: "Level 1 · 초기", entry: "SAPD Taster Workshop (1일)", scope: "Layer 1만 적용", start: "Phase 1 경량 버전", color: "red" },
                            { level: "Level 2 · 발전", entry: "Policy Sprint (3일)", scope: "Layer 1–2", start: "Phase 1–2", color: "amber" },
                            { level: "Level 3 · 확립", entry: "Full SAPD Project (3–6개월)", scope: "Layer 1–4", start: "Phase 2–3", color: "blue" },
                            { level: "Level 4 · 고도화", entry: "SAPD 최적화 (Layer 5 중심)", scope: "전 레이어", start: "Phase 3–4", color: "indigo" },
                            { level: "Level 5 · 적응적", entry: "생태계 확장·교차 도메인 통합", scope: "조직 전체", start: "Phase 5", color: "emerald" },
                        ].map((l) => (
                            <div key={l.level} className={`p-3 bg-${l.color}-50/50 rounded-lg border border-${l.color}-100 space-y-1.5`}>
                                <p className={`text-sm font-bold text-${l.color}-700`}>{l.level}</p>
                                <p className="text-sm text-gray-700 font-medium">{l.entry}</p>
                                <p className="text-xs text-gray-500">{l.scope} · {l.start}부터</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 주요 실패 모드 */}
                <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">주요 실패 모드와 대응</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {[
                            { mode: "Big Bang 도입", risk: "5개 레이어 동시 배포 시도", counter: "Layer 1–2부터 점진적 추가. 적응적 단계화 원칙 적용", src: "Adaptive Management" },
                            { mode: "거버넌스 공백", risk: "기술 아키텍처 선행, 제도적 권한 부재", counter: "기술 설계 이전에 거버넌스 구조(역할·권한·책임) 확립", src: "NIST Govern 기능" },
                            { mode: "데이터 이상주의", risk: "존재하지 않는 완벽한 데이터를 전제로 설계", counter: "가용 데이터로 시작, 데이터 준비도 평가에 기반한 점진적 통합", src: "UK Gov DMA" },
                            { mode: "정책 저항", risk: "모니터링 도입 but 의사결정 권한 불변 → 데이터 무시/저항", counter: "정보 흐름 구조(Meadows #6)와 의사결정 규칙(#5) 동시 변경", src: "Sterman 정책 저항" },
                            { mode: "조기 확장", risk: "파일럿 성공을 일반화 가능으로 오인", counter: "파일럿 조건과 배포 조건의 차이 명시, 파형 확장 적용", src: "HBR/Implementation Science" },
                            { mode: "지속성 침식", risk: "초기 열정 후 자원 철수, 유지보수 방치", counter: "유지보수 예산을 도입 이전에 확보, 결과 관찰 주기 사전 합의", src: "Sterman/RE-AIM" },
                        ].map((item) => (
                            <div key={item.mode} className="p-3 bg-gray-50 rounded-lg space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">{item.mode}</span>
                                    <span className="text-xs text-gray-400">{item.src}</span>
                                </div>
                                <p className="text-xs text-gray-500">{item.risk}</p>
                                <p className="text-sm text-gray-700">→ {item.counter}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800 leading-relaxed">
                        <strong>설계 원칙:</strong> 검토된 7개 프레임워크 전체가 공통적으로 강조하는 핵심 원칙 — &apos;가이드는 모놀리식이 아닌 모듈식이어야 한다.&apos;
                        모든 성공적 이행 프레임워크는 조직이 현재 역량 수준에서 진입하여 점진적으로 발전하도록 허용하며, 첫날부터 포괄적 도입을 요구하지 않는다.
                        SAPD How to Use 가이드는 NIST의 자발적·프로필 기반 접근, EU AI Act의 단계적 시간 구조, 적응적 관리의 반복 학습 순환을 통합하는 하이브리드 구조를 지향한다.
                    </p>
                </div>
            </section>

            {/* 적용 사례 */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">적용 사례</h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        SAPD가 제안하는 적응형 의사결정 루프 — Decision(t) = f(State(t)) → System Response → State(t+1) — 의
                        구성 요소가 실제 공공 정책 시스템에서 어떻게 구현되고 있는지를 분석한다.
                        완전한 SAPD 구현 사례는 아직 존재하지 않으나, 각 사례는 SAPD 아키텍처의 핵심 요소를 부분적으로 실현하고 있다.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-blue-700">연구 진행 중 — Draft v0.1</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Case 1: Netherlands */}
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">기후·환경</span>
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">네덜란드</span>
                                </div>
                                <h4 className="text-base font-bold text-gray-900">네덜란드 Delta Programme — Dynamic Adaptive Policy Pathways</h4>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            세계에서 가장 완성도 높은 적응형 정책 구현 사례. 홍수 위험 관리와 기후 적응을 위해
                            DAPP 방법론을 적용하여, 단일 솔루션을 50년간 고정하는 대신 <strong className="text-gray-800">&apos;적응 티핑포인트&apos;</strong>를
                            정의하고 조건 변화에 따라 정책 경로를 전환하는 구조를 운영한다.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="p-2.5 bg-blue-50/50 rounded-lg">
                                <p className="text-xs font-bold text-blue-700 mb-1">State(t) 관찰</p>
                                <p className="text-sm text-gray-600">Signal Group(KNMI·Deltares·PBL 등) 8개 지표 연간 모니터링</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-1">Decision Function</p>
                                <p className="text-sm text-gray-600">적응 경로 맵 — 티핑포인트 도달 시 사전 정의된 경로 전환 규칙</p>
                            </div>
                            <div className="p-2.5 bg-emerald-50/50 rounded-lg">
                                <p className="text-xs font-bold text-emerald-700 mb-1">System Response</p>
                                <p className="text-sm text-gray-600">인프라 업그레이드(219km 제방 완료, 887km 계획), 정책 경로 전환</p>
                            </div>
                            <div className="p-2.5 bg-purple-50/50 rounded-lg">
                                <p className="text-xs font-bold text-purple-700 mb-1">Feedback Loop</p>
                                <p className="text-sm text-gray-600">연간 Signal Group 보고 → Delta Programme 개정 → 다음 관찰 주기</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400">한계: 연간 보고 주기(진정한 실시간 아님), 정치적 압력에 의한 경로 전환 지연 가능성</p>
                    </div>

                    {/* Case 2: Singapore */}
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">스마트시티</span>
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">싱가포르</span>
                                </div>
                                <h4 className="text-base font-bold text-gray-900">싱가포르 Smart Nation — Virtual Singapore Digital Twin</h4>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            세계 최초의 국가 규모 디지털 트윈. 도시 전역의 IoT 센서로 교통 흐름, 환경 데이터, 공공서비스 성과를
                            실시간 수집하고, 고해상도 3D 모델 위에서 정책 옵션을 <strong className="text-gray-800">시뮬레이션한 후 실행</strong>하는 구조를 운영한다.
                            2024년 Smart Nation 2.0으로 확장하여 GenAI 기반 실시간 데이터 스트리밍을 추가.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="p-2.5 bg-blue-50/50 rounded-lg">
                                <p className="text-xs font-bold text-blue-700 mb-1">State(t) 관찰</p>
                                <p className="text-sm text-gray-600">수천 개 IoT 센서 + 디지털 트윈 연속적 도시 상태 관측</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-1">Decision Function</p>
                                <p className="text-sm text-gray-600">시뮬레이션 엔진 — 정책 옵션을 디지털 트윈에서 사전 테스트</p>
                            </div>
                            <div className="p-2.5 bg-emerald-50/50 rounded-lg">
                                <p className="text-xs font-bold text-emerald-700 mb-1">System Response</p>
                                <p className="text-sm text-gray-600">정책 실행 + 실시간 모니터링으로 효과 추적</p>
                            </div>
                            <div className="p-2.5 bg-purple-50/50 rounded-lg">
                                <p className="text-xs font-bold text-purple-700 mb-1">Feedback Loop</p>
                                <p className="text-sm text-gray-600">연속적 센서 데이터 → 디지털 트윈 갱신 → 정책 정교화</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400">한계: 소규모 도시국가의 높은 중앙집중성 — 연방국가·대규모 국가로의 확장성 질문, 감시 프라이버시 우려</p>
                    </div>

                    {/* Case 3: UK NHS/Palantir */}
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">공공보건</span>
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">영국</span>
                                    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">경고 사례</span>
                                </div>
                                <h4 className="text-base font-bold text-gray-900">영국 NHS COVID-19 Data Store — Palantir Foundry</h4>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Palantir Foundry가 NHS의 핵심 데이터 저장소로 기능하며 감염률, 병상, 의약품, 백신 배포를
                            실시간 통합한 사례. 적응형 시스템의 <strong className="text-gray-800">기술적 효과성과 민주적 통제 실패</strong>를 동시에 보여주는
                            필수적 경고 사례이다.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="p-2.5 bg-blue-50/50 rounded-lg">
                                <p className="text-xs font-bold text-blue-700 mb-1">State(t) 관찰</p>
                                <p className="text-sm text-gray-600">8,650 사용자의 실시간 대시보드 — 감염률·병상·백신 공급 통합</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-1">Decision Function</p>
                                <p className="text-sm text-gray-600">Palantir 분석 모델 + 인간 의사결정자의 대시보드 기반 판단</p>
                            </div>
                            <div className="p-2.5 bg-emerald-50/50 rounded-lg">
                                <p className="text-xs font-bold text-emerald-700 mb-1">System Response</p>
                                <p className="text-sm text-gray-600">자원 재배분, 백신 배포 조정, 정책 업데이트</p>
                            </div>
                            <div className="p-2.5 bg-purple-50/50 rounded-lg">
                                <p className="text-xs font-bold text-purple-700 mb-1">Feedback Loop</p>
                                <p className="text-sm text-gray-600">연속적 데이터 수집 → 대시보드 갱신 → 정책 조정</p>
                            </div>
                        </div>
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-800 leading-relaxed">
                                <strong>SAPD 교훈:</strong> 독점 알고리즘에 의한 투명성 결여, 계약 미공개, 재식별 가능한 건강 데이터의 프라이버시 위험,
                                의회·시민의 알고리즘 감독 불가. SAPD Layer 3의 &apos;감사 가능성(auditability)&apos; 요건이 왜 필수적인지를
                                역설적으로 증명하는 사례이다.
                            </p>
                        </div>
                    </div>

                    {/* Case 4: Estonia */}
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">디지털 거버넌스</span>
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">에스토니아</span>
                                </div>
                                <h4 className="text-base font-bold text-gray-900">에스토니아 X-Road — 선제적 거버넌스(Proactive Governance)</h4>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            929개 기관, 1,887개 정보 시스템을 연결하는 분산형 데이터 교환 레이어. 2024년 27억 건의 데이터 쿼리를 처리.
                            핵심은 <strong className="text-gray-800">선제적 거버넌스</strong> — 시민의 요청을 기다리지 않고 생애 사건(출생, 이사 등)을 감지하여
                            자동으로 서비스를 개시하는 Decision(t) = f(State(t))의 실제 구현.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="p-2.5 bg-blue-50/50 rounded-lg">
                                <p className="text-xs font-bold text-blue-700 mb-1">State(t) 관찰</p>
                                <p className="text-sm text-gray-600">X-Road로 연결된 전 정부 레지스트리의 분산형 실시간 데이터</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-1">Decision Function</p>
                                <p className="text-sm text-gray-600">생애 사건 기반 선제적 서비스 트리거 — 규칙 기반 자동 개시</p>
                            </div>
                            <div className="p-2.5 bg-emerald-50/50 rounded-lg">
                                <p className="text-xs font-bold text-emerald-700 mb-1">System Response</p>
                                <p className="text-sm text-gray-600">자동 급여 개시, 사전 작성된 신청서 제공, 서비스 전달</p>
                            </div>
                            <div className="p-2.5 bg-purple-50/50 rounded-lg">
                                <p className="text-xs font-bold text-purple-700 mb-1">Feedback Loop</p>
                                <p className="text-sm text-gray-600">생애 사건 → 자동 감지 → 선제적 서비스 → 레지스트리 갱신</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400">한계: 소규모 인구(130만)·높은 디지털 리터러시 전제, 사전 정의된 트리거 외 신규 상황 대응력 제한</p>
                    </div>

                    {/* Case 5: Korea */}
                    <div className="p-5 bg-white border border-gray-200 rounded-xl space-y-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">공공 AI</span>
                                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">한국</span>
                                </div>
                                <h4 className="text-base font-bold text-gray-900">한국 디지털플랫폼정부 — 서울시 스마트시티·공공 AI 전환</h4>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            서울시 전역 IoT 센서 네트워크로 미세먼지·생활인구·소음·조도 등 실시간 수집,
                            AI CCTV 객체인식 선별관제, 민원 빅데이터 1천만 건 AI 자동 분석,
                            AI 스마트 스쿨존 등 110개 이상의 공공 AI 서비스 실증. 2025년 &apos;공공부문 AI 대전환 종합대책&apos; 수립.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="p-2.5 bg-blue-50/50 rounded-lg">
                                <p className="text-xs font-bold text-blue-700 mb-1">State(t) 관찰</p>
                                <p className="text-sm text-gray-600">IoT·CCTV·민원 빅데이터 → 도시 상태 실시간 관측</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-1">Decision Function</p>
                                <p className="text-sm text-gray-600">AI 분석 모델(객체인식, NLP, 예측) + 인간 의사결정</p>
                            </div>
                            <div className="p-2.5 bg-emerald-50/50 rounded-lg">
                                <p className="text-xs font-bold text-emerald-700 mb-1">System Response</p>
                                <p className="text-sm text-gray-600">안전 경보, 교통 조정, 정책 반영, 복지 서비스 연결</p>
                            </div>
                            <div className="p-2.5 bg-purple-50/50 rounded-lg">
                                <p className="text-xs font-bold text-purple-700 mb-1">Feedback Loop</p>
                                <p className="text-sm text-gray-600">센서 → AI 분석 → 정책 반영 → 효과 측정 → 모델 개선</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400">한계: 다수 사업이 실증 단계에 머무름, 부처·지자체 간 분절, 진정한 적응형 거버넌스를 위한 제도적 역량과 기술 인프라 간 격차</p>
                    </div>
                </div>

                {/* 비교 분석 테이블 */}
                <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">SAPD 성숙도 스펙트럼 비교</p>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-5 gap-px bg-gray-200 rounded-lg overflow-hidden text-center min-w-[600px]">
                            {/* Header */}
                            {["사례", "State 관찰", "피드백 속도", "자율성 수준", "SAPD 시사점"].map((h) => (
                                <div key={h} className="bg-gray-800 text-white text-xs font-bold p-2">{h}</div>
                            ))}
                            {/* Rows */}
                            {[
                                ["네덜란드 DAPP", "정기적 (연간)", "연간", "인간 주도", "최고 개념적 정합성"],
                                ["싱가포르", "연속적 (IoT+DT)", "준실시간", "인간+시뮬레이션", "최고 기술적 성숙도"],
                                ["NHS/Palantir", "연속적 (실시간)", "실시간", "AI 보강 인간", "거버넌스 실패 경고"],
                                ["에스토니아", "이벤트 기반", "이벤트 트리거", "반자율(선제적)", "가장 성숙한 자동 f()"],
                                ["한국 공공AI", "연속적 (IoT/CCTV)", "혼합", "AI 지원 인간", "급속 확장 중·실증 단계"],
                            ].map((row, i) => (
                                row.map((cell, j) => (
                                    <div key={`${i}-${j}`} className={`bg-white text-xs p-2 ${j === 0 ? "font-semibold text-gray-900" : "text-gray-600"}`}>{cell}</div>
                                ))
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800 leading-relaxed">
                        <strong>핵심 통찰:</strong> 현재까지 완전한 SAPD 자율성을 달성한 시스템은 존재하지 않으며,
                        가장 선진적 사례에서도 인간이 의사결정 루프 안에 위치한다.
                        SAPD는 인간의 판단을 대체하는 것이 아니라 증강하는 프레임워크로 포지셔닝되어야 한다.
                        동시에 Palantir/NHS 사례가 보여주듯, 기술적 효과성만으로는 정당성을 확보할 수 없으며
                        SAPD Layer 3의 감사 가능성과 민주적 통제가 시스템의 지속가능성을 결정한다.
                    </p>
                </div>
            </section>

            {/* 관련 콘텐츠 교차 링크 */}
            <nav className="border-t border-gray-200 pt-8 space-y-4">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">관련 콘텐츠</h2>
                <div className="flex flex-wrap gap-3">
                    <Link href="/writing/intro" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        상태 기반 적응형 정책 개론
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/writing/sapd-palantir-convergence" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        SAPD와 팔란티어의 구조적 동형성
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        프로젝트
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
