export const metadata = {
    title: "Writing - PSDS",
};

export default function WritingPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">글쓰기 및 인사이트 (Writing & Insight)</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    PSDS 프레임워크를 기반으로 한 공공 의사결정 시스템의 개념적 확장, 아키텍처 분석, 에세이 모음입니다.
                </p>
            </header>

            <section className="space-y-8 border-l border-gray-200 pl-6">
                <div className="relative">
                    <div className="absolute top-2 -left-8 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">적응형 거버넌스 개론 (Introduction to Adaptive Governance)</h2>
                    <div className="text-gray-500 text-sm font-mono mb-3">작성일: 2026-03-01 (예정)</div>
                    <p className="text-gray-600 font-medium leading-relaxed max-w-2xl mb-4">
                        데이터가 폭발적으로 생성되고 급변하는 현대 사회에서, 과거 사후 평가식의 증거 기반 모델(Evidence-based Policy)이 갖는
                        구조적인 한계점과 적응형 모델로의 전환 필요성을 모색하는 개념적 에세이입니다.
                    </p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors border-b border-transparent hover:border-blue-800">
                        글 읽기 &rarr;
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute top-2 -left-8 w-4 h-4 rounded-full bg-gray-100 border-2 border-gray-400" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">공공 보건 시스템과 데이터 동학 (Data Dynamics in Public Health Systems)</h2>
                    <div className="text-gray-500 text-sm font-mono mb-3">작성일: 2026-04-15 (예정)</div>
                    <p className="text-gray-600 font-medium leading-relaxed max-w-2xl mb-4">
                        시간에 따라 분절적으로 투입되는 개입형 정책 모델과 지속적으로 시스템 상태(State)를 갱신하는
                        적응형 모델의 성과 차이를 비교하여, 보건 시스템의 데이터 병목현상을 분석한 사례 연구입니다.
                    </p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors border-b border-transparent hover:border-blue-800">
                        사례 연구 열람 &rarr;
                    </button>
                </div>
            </section>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-6 my-10 text-center">
                <p className="text-gray-500 font-medium">분석적이고 개념적인 학술 에세이들이 이곳에 지속적으로 게시될 예정입니다.</p>
            </div>
        </div>
    );
}
