export const metadata = {
    title: "About - PSDS",
};

export default function AboutPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">연구자 소개 (About)</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    이석민(Seog-Min Lee)은 공공 전략 및 정책 의사결정 시스템을 연구합니다.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">정체성 및 연구 궤적 (Identity & Trajectory)</h2>
                <div className="prose prose-gray max-w-none prose-lg text-gray-700 leading-relaxed font-medium">
                    <p>
                        저의 연구는 전략, 정책, 데이터, 평가, 그리고 인공지능(AI)을 통합하는 공공 의사결정의 구조적 아키텍처 설계에 중점을 두고 있습니다.
                    </p>
                    <p>
                        정치학, 공공정책, 전략 기획, 평가 체계, 데이터 기반 의사결정 등 다양한 영역에 걸쳐 연구 궤적을 발전시켜 왔으며, 이러한 경험을 바탕으로 개별적인 정책 현상을 넘어 '의사결정 시스템 자체가 어떻게 작동하고, 적응하며, 진화하는지'를 분석합니다.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">현재 연구 초점 (Current Research Focus)</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 font-medium">
                    <li>공공 의사결정 시스템 아키텍처 (Public decision system architecture)</li>
                    <li>전략 및 정책의 구조적 통합 (Strategy and policy structural integration)</li>
                    <li>적응형 의사결정 시스템 (Adaptive decision systems)</li>
                    <li>데이터 통합 정책 시스템 (Data-integrated policy systems)</li>
                    <li>AI 지원 의사결정 구조 (AI-supported decision structures)</li>
                </ul>
            </section>

            <section className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4">연구 임무 (Mission)</h2>
                <p className="text-lg font-light text-gray-300">
                    본 연구의 핵심 미션은 데이터가 풍부하고 자동화된 AI 환경에서도 안정적이고 기민하게 작동할 수 있는 적응형 공공 의사결정 시스템의 구조적 기반(Structural foundations)을 확립하는 것입니다.
                </p>
            </section>
        </div>
    );
}
