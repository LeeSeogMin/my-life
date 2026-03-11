import { ArrowDown, ArrowRight, Database, Cpu, Activity, RefreshCw, Shield, Eye, Users } from "lucide-react";
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
                            <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">사후 평가</span>
                            <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">이산적 스냅샷</span>
                            <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">분절적 피드백</span>
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
                            <span className="text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-full">실시간 상태 관찰</span>
                            <span className="text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-full">연속적 학습</span>
                            <span className="text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-full">적응형 피드백</span>
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
                </div>
            </section>

            {/* SAPD Validation Module (실무층) — Placeholder */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">SAPD Validation Module (실무층)</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    SAPD의 이론적 아키텍처를 실무에서 적용하기 위한 검증 도구 모듈입니다.
                    공공 AI 시스템의 타당성을 구조적으로 검토하는 체크리스트, 진단 도구, 평가 루브릭을 제공합니다.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    {[
                        {
                            title: "공공 AI 검증 체크리스트",
                            desc: "공공영역 AI 시스템의 입력 데이터, 모델 구조, 출력 검증을 위한 단계별 체크리스트.",
                        },
                        {
                            title: "설명가능성 진단 도구",
                            desc: "AI 의사결정의 설명가능성 수준을 진단하고, 개선 방향을 제시하는 구조화된 진단 프레임.",
                        },
                        {
                            title: "감사 가능성 평가 루브릭",
                            desc: "정책 AI의 감사 가능성(auditability)을 평가하기 위한 다차원 루브릭 체계.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="p-5 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 space-y-2">
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Coming Soon</span>
                            <p className="text-sm font-bold text-gray-900">{item.title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Use — Placeholder */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">How to Use</h2>
                <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 text-center space-y-3">
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Coming Soon</span>
                    <p className="text-sm text-gray-600">SAPD Framework를 실무에서 적용하는 단계별 가이드를 준비하고 있습니다.</p>
                </div>
            </section>

            {/* 적용 사례 — Placeholder */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">적용 사례</h2>
                <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 text-center space-y-3">
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Coming Soon</span>
                    <p className="text-sm text-gray-600">SAPD Framework의 실제 적용 사례를 정리하여 공개할 예정입니다.</p>
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
                    <Link href="/archive" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        저서 및 논문
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
