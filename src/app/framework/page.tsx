import { ArrowDown, Database, Cpu, Activity, RefreshCw, Shield, Eye, Users } from "lucide-react";

export const metadata = {
    title: "SAPD Framework — 상태 기반 적응형 정책 설계 아키텍처",
    description: "상태 기반 적응형 정책(State-based Adaptive Policy)을 구현하기 위한 5단계 구조적 아키텍처. 기술적 설계와 민주적 책임성을 아키텍처 수준에서 통합하는 설계 방법론.",
    openGraph: {
        title: "SAPD Framework — 이석민 | 상태 기반 적응형 정책",
        description: "기술적 효율성과 민주적 정당성을 아키텍처 수준에서 통합하는 SAPD 프레임워크 상세 구조.",
    },
};

export default function FrameworkPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 shadow-sm inline-block">SAPD Framework</h1>
                <p className="text-xl text-gray-600 font-light">
                    상태 기반 적응형 정책(State-based Adaptive Policy)을 구현하기 위한 구조적 아키텍처
                </p>
                <p className="text-sm text-gray-400 font-medium max-w-2xl mx-auto">
                    SAPD는 단순한 기술적 프레임워크가 아니라, 기술적 효율성과 민주적 정당성을 아키텍처 수준에서 통합하는 <strong className="text-gray-500">설계 방법론</strong>이다.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">Framework 5대 구조 (Layers)</h2>
                <div className="space-y-8 pl-4 border-l border-gray-200">
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 1: 문제 구조화 (Problem Structuring)</h3>
                        <p className="text-gray-600">시스템의 경계와 정책 문제를 정의한다. <strong className="text-gray-700">State(t)에 어떤 변수를 포함할 것인가 — 무엇을 &apos;관찰&apos;하고 무엇을 관찰하지 않을 것인가 — 는 순수한 기술적 선택이 아니라 본질적으로 규범적·정치적 판단이다.</strong> 특정 집단의 현실이 상태 공간에 포함되느냐 배제되느냐에 따라 정책 시스템의 인지 범위가 결정된다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 2: 전략 구조화 (Strategy Structuring)</h3>
                        <p className="text-gray-600">전략적 구조와 성과 생성 논리를 모델링한다. 보상 함수 R(s, a)의 정의는 공학적 최적화 문제가 아니라, 효율성·형평성·자유·안전 등 <strong className="text-gray-700">경합하는 공공 가치 간의 가중치를 결정하는 민주적 심의의 대상</strong>이다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 3: 의사결정 아키텍처 (Decision Architecture)</h3>
                        <p className="text-gray-600">의사결정 노드, 권한, 기준을 설계한다. 핵심 요건은 <strong className="text-gray-700">의사결정 함수 f의 감사 가능성(auditability)</strong>이다 — f가 어떤 변수에 어떤 가중치를 부여하고 어떤 임계값에서 판단이 전환되는지가 시민과 의회에 의해 검증 가능해야 한다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 4: 데이터 통합 (Data Integration)</h3>
                        <p className="text-gray-600">실시간 데이터와 AI를 의사결정 시스템 내부로 통합한다. 이때 <strong className="text-gray-700">무엇이 측정되고 무엇이 측정되지 않는가는 측정 인프라의 정치경제학과 데이터 거버넌스 구조에 의해 결정</strong>된다는 점 — 측정의 정치성(measurement politics) — 을 명시적으로 인식해야 한다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 5: 평가 및 적응형 피드백 (Evaluation & Adaptive Feedback)</h3>
                        <p className="text-gray-600">사후 평가가 아닌 연속적 상태 관찰에 기반한 피드백 루프를 설계한다. <strong className="text-gray-700">시민의 경험, 민원, 참여 데이터를 상태 관찰의 정당한 데이터 스트림으로 편입</strong>시킴으로써, 피드백 루프 자체가 민주적 참여의 채널이 된다.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-8 bg-white border border-gray-200 shadow-sm rounded-xl p-8 relative overflow-hidden">
                {/* Background purely aesthetic gradient */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

                <header>
                    <h2 className="text-2xl font-bold text-gray-900">시스템 작동 구조 (Operational Layer Structure)</h2>
                    <p className="text-gray-500 mt-2 font-medium">연속적 순환 피드백 루프의 각 단계에 민주적 통제 지점이 내장된다.</p>
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
                        <p className="text-xs text-blue-600 flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 flex-shrink-0" /> <strong>민주적 통제:</strong> 상태 변수 선택은 규범적 판단 — 누구의 현실이 가시화되는가를 결정하는 정치적 행위</p>
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
                        <p className="text-xs text-slate-600 flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 flex-shrink-0" /> <strong>민주적 통제:</strong> 함수 f의 감사 가능성(auditability) — 가중치, 임계값, 판단 논리가 시민·의회에 검증 가능</p>
                    </div>

                    <ArrowDown className="w-6 h-6 text-gray-300 my-2" />

                    {/* Step 3: System response */}
                    <div className="w-full flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-5 shadow-sm z-10 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-emerald-900 font-mono">System response</h3>
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
                        <p className="text-xs text-purple-600 flex items-center gap-1.5"><Users className="w-3.5 h-3.5 flex-shrink-0" /> <strong>민주적 통제:</strong> 시민 경험·민원·참여 데이터를 상태 관찰의 정당한 데이터 스트림으로 편입</p>
                    </div>

                    {/* The Loop Line (visually connecting bottom to top using absolute positioning) */}
                    <div className="absolute top-14 bottom-14 -left-12 w-20 border-l-2 border-t-2 border-b-2 border-dashed border-gray-300 rounded-l-3xl hidden sm:block opacity-60" />
                    <div className="absolute top-[80px] -left-[54px] w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-45 hidden sm:block" />

                </div>
            </section>
        </div>
    );
}
