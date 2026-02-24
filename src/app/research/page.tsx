export const metadata = {
    title: "Research - PSDS",
};

export default function ResearchPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">연구 분야 (Research Focus)</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    공공 의사결정 체계와 관련된 학술 연구 및 응용 모델을 소개합니다.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">진행 중인 패러다임 연구 (Ongoing Paradigms)</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">공공 의사결정 아키텍처 (Public Decision Architecture)</h3>
                        <p className="text-gray-600 font-medium">알고리즘 거버넌스 및 스마트시티 도메인 내부의 구조적 경계, 권한 체계, 그리고 적응형 피드백 루프 작동 방식을 분석합니다.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">AI 지원 의사결정 구조 (AI-Supported Decision Structures)</h3>
                        <p className="text-gray-600 font-medium">정책 수명 주기 전반에 걸친 패턴 탐지, 생성적 전략 도입 및 실시간 최적화 모델 적용 연구를 수행합니다.</p>
                    </div>
                </div>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-6 my-10 text-center">
                <p className="text-gray-500 font-medium">진행 중인 연구 프로젝트와 구체적인 적용 방법론은 본 페이지를 통해 지속적으로 업데이트됩니다.</p>
            </div>
        </div>
    );
}
