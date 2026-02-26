export const metadata = {
    title: "강의 — 딥러닝, 데이터, 정책분석",
    description: "이석민 교수의 학부 강의: 딥러닝자연어처리, 데이터사이언스, 정책분석과 기획, 웹프로그래밍, LLMOPs, geoAI, AI 에이전트 캡스톤, 정책분석평가론.",
    openGraph: {
        title: "강의 — 이석민 | 정책 × AI",
        description: "딥러닝, 데이터분석, 정책분석, 웹프로그래밍 등 학부 강의 안내.",
    },
};

export default function LecturesPage() {
    const semesters = [
        {
            term: "1학기 (Semester 1)",
            courses: [
                { title: "딥러닝자연어처리 (Deep Learning Natural Language Processing)", desc: "정책 신호 추출을 위한 최신 자연어 처리(NLP) 방법론 연구 및 적용." },
                { title: "웹프로그래밍 (Web Programming)", desc: "공공 의사결정 시스템을 시각화하고 상호작용할 수 있는 웹 플랫폼 개발." },
                { title: "정책분석과 기획 (Policy Analysis and Planning)", desc: "정책의 기초 구조 이해 및 전략적 기획 역량 강화." },
                { title: "데이터사이언스 (Data Science)", desc: "계량경제학, 인과추론, 머신러닝, 딥러닝을 결합한 데이터 기반 의사결정 방법론." }
            ]
        },
        {
            term: "2학기 (Semester 2)",
            courses: [
                { title: "LLMOPs & 데이터 엔지니어링 (LLMOPs & Data Engineering)", desc: "상태 기반 적응형 정책을 위한 데이터 파이프라인 및 LLM 운영 구축." },
                { title: "딥러닝 영상데이터분석(geoAI) (Deep Learning Image Data Analysis)", desc: "딥러닝 패러다임을 활용한 위성/항공 등 공간 데이터(geoAI) 분석 전략." },
                { title: "AI 에이전트 캡스톤 (AI Agent Capstone)", desc: "실제 정책 시나리오에 적용가능한 자율형 AI 에이전트 개발 실무 프로젝트." },
                { title: "정책분석평가론 (Policy Analysis and Evaluation Theory)", desc: "지속적인 상태 평가와 적응형 피드백을 위한 정책 프레임워크 학습." }
            ]
        }
    ];

    return (
        <div className="space-y-12">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">강의 코너 (Lectures)</h1>
                <p className="text-xl text-gray-600 font-light">
                    데이터 주도형 정책 통합, 딥러닝 방법론, 상태 기반 적응형 정책 시스템 중심의 학술 교육 콘텐츠를 제공합니다.
                </p>
            </header>

            <div className="space-y-16">
                {semesters.map((semester, i) => (
                    <section key={i} className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 flex items-center gap-3">
                            <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                                {semester.term}
                            </span>
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {semester.courses.map((course, j) => (
                                <article key={j} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2 leading-tight">
                                        {course.title.split("(").map((part, idx) => (
                                            <span key={idx}>
                                                {idx === 0 ? part : <span className="block text-sm text-gray-500 font-normal mt-1">({part}</span>}
                                            </span>
                                        ))}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{course.desc}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
