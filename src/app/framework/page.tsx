export const metadata = {
    title: "Framework - PSDS",
};

export default function FrameworkPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">PSDS 프레임워크</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    적응형 공공 의사결정 시스템(Adaptive public decision systems)을 위한 구조적 아키텍처 (PSDS: Public Strategy and Decision System Framework)
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">프레임워크 구조 (Framework Layers)</h2>
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
                        <p className="text-gray-600">실황 데이터와 AI(인공지능)를 의사결정 시스템 내부로 통합합니다.</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute top-1.5 -left-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-lg font-bold text-gray-900">Layer 5: 평가 및 적응형 피드백 (Evaluation & Adaptive Feedback)</h3>
                        <p className="text-gray-600">지속적인 평가와 최적화를 위한 피드백 루프를 제공합니다.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6 bg-gray-50 border border-gray-200 rounded-lg p-8">
                <h2 className="text-xl font-bold border-b border-gray-300 pb-2">시스템 작동 구조 (Operational Layer Structure)</h2>
                <div className="font-mono text-sm bg-gray-800 text-gray-100 p-6 rounded-md">
                    <p>State(t)  <span className="text-gray-400 font-sans ml-4">// 시스템 상태 관찰</span></p>
                    <p className="text-gray-400">   ↓</p>
                    <p>Decision(t) = f(State(t)) <span className="text-gray-400 font-sans ml-4">// 의사결정 규칙 적용</span></p>
                    <p className="text-gray-400">   ↓</p>
                    <p>System response <span className="text-gray-400 font-sans ml-4">// 시스템 반응 및 실행</span></p>
                    <p className="text-gray-400">   ↓</p>
                    <p>State(t+1) <span className="text-gray-400 font-sans ml-4">// 변화된 상태 재관찰</span></p>
                </div>
                <p className="text-sm font-medium text-gray-700">이 연속적인 순환 구조가 바로 적응형 의사결정 시스템(Adaptive Decision System)의 본질입니다.</p>
            </section>
        </div>
    );
}
