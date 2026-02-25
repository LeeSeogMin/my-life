import { ArrowDown, Database, Cpu, Activity, RefreshCw } from "lucide-react";

export const metadata = {
    title: "SAPD Framework — 상태 기반 적응형 정책 설계 아키텍처",
    description: "상태 기반 적응형 정책(State-based Adaptive Policy)을 구현하기 위한 5단계 구조적 아키텍처. 문제 구조화, 전략 설계, 의사결정 아키텍처, 데이터 통합, 평가 및 적응형 피드백.",
    openGraph: {
        title: "SAPD Framework — 이석민 | 상태 기반 적응형 정책",
        description: "상태 기반 적응형 정책(State-based Adaptive Policy)을 구현하기 위한 SAPD 프레임워크 상세 구조.",
    },
};

export default function FrameworkPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 shadow-sm inline-block">SAPD Framework</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    상태 기반 적응형 정책(State-based Adaptive Policy)을 구현하기 위한 구조적 아키텍처
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">Framework 5대 구조 (Layers)</h2>
                <div className="space-y-8 pl-4 border-l border-gray-200">
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 1: 문제 구조화 (Problem Structuring)</h3>
                        <p className="text-gray-600">시스템의 경계와 정책 문제를 명확하게 정의합니다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 2: 전략 구조화 (Strategy Structuring)</h3>
                        <p className="text-gray-600">전략적 구조와 성과 생성 논리를 모델링합니다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 3: 의사결정 아키텍처 (Decision Architecture)</h3>
                        <p className="text-gray-600">의사결정 노드, 권한, 기준을 기획하고 설계합니다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 4: 데이터 통합 (Data Integration)</h3>
                        <p className="text-gray-600">실시간 데이터와 AI(인공지능)를 의사결정 시스템 내부로 통합합니다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 5: 평가 및 적응형 피드백 (Evaluation & Adaptive Feedback)</h3>
                        <p className="text-gray-600">지속적인 평가와 최적화를 위한 피드백 루프를 제공합니다.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-8 bg-white border border-gray-200 shadow-sm rounded-xl p-8 relative overflow-hidden">
                {/* Background purely aesthetic gradient */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

                <header>
                    <h2 className="text-2xl font-bold text-gray-900">시스템 작동 구조 (Operational Layer Structure)</h2>
                    <p className="text-gray-500 mt-2 font-medium">이 연속적인 순환 피드백 루프가 상태 기반 적응형 정책(State-based Adaptive Policy)의 작동 원리입니다.</p>
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
                                <p className="text-sm text-blue-700 font-medium">단기 시스템 상태 관찰 및 데이터 수집</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-100 px-2 py-1 rounded">Observation</span>
                    </div>

                    <ArrowDown className="w-6 h-6 text-gray-300 my-2" />

                    <div className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-5 shadow-sm z-10 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-200 rounded-full text-slate-700">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 font-mono">Decision(t) = f(State(t))</h3>
                                <p className="text-sm text-slate-600 font-medium">상태값을 바탕으로 한 동태적 의사결정 규칙 연산</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-200 px-2 py-1 rounded">Computation</span>
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
                                <p className="text-sm text-emerald-700 font-medium">결정 실행에 따른 시스템 물리/사회적 반응 촉발</p>
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
                                <p className="text-sm text-purple-700 font-medium">변화된 새로운 시스템 상태로 갱신 (리셋 및 반복)</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-100 px-2 py-1 rounded">Feedback Update</span>
                    </div>

                    {/* The Loop Line (visually connecting bottom to top using absolute positioning) */}
                    <div className="absolute top-14 bottom-14 -left-12 w-20 border-l-2 border-t-2 border-b-2 border-dashed border-gray-300 rounded-l-3xl hidden sm:block opacity-60" />
                    <div className="absolute top-[80px] -left-[54px] w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-45 hidden sm:block" />

                </div>
            </section>
        </div>
    );
}
