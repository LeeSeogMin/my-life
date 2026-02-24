import { Calendar, Briefcase, Code } from "lucide-react";

export const metadata = {
    title: "Research - Decision Systems Lab",
};

export default function ResearchPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 border-b-2 border-gray-900 pb-4 inline-block">Research</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    공공 의사결정 체계와 관련된 학술 연구 및 데이터 기반의 실제적 응용 모델(Applied AI)을 탐구합니다.
                </p>
            </header>

            {/* Applied AI & Development Project */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Code className="w-6 h-6 text-blue-600" />
                    주요 연구 및 개발 프로젝트 (Key Projects)
                </h2>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-8 space-y-4">
                        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-blue-600 mb-2">
                            <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
                                <Calendar className="w-3.5 h-3.5" />
                                2025. 05 - 2025. 09
                            </span>
                            <span className="flex items-center gap-1.5 bg-gray-50 text-gray-600 px-3 py-1 rounded-full">
                                <Briefcase className="w-3.5 h-3.5" />
                                한신대학교 소프트웨어중심대학사업단
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                            AI를 활용한 시니어 정신건강 진단 앱 개발
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            한신대학교 소프트웨어중심대학사업단 프로젝트의 일환으로, 학부생들과 함께 시니어의 정신건강을 선제적으로 진단하고 관리할 수 있는 AI 기반 소프트웨어를 개발하였습니다.
                            이 프로젝트는 실제 사회적 문제를 해결하기 위한 기술적 구현과 정책적 효용성을 동시에 검토한 연구 사례입니다.
                        </p>
                        <div className="pt-4 flex gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 rounded">Applied AI</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 rounded">Public Health</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 rounded">UI/UX for Seniors</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Theoretical Paradigms */}
            <section className="space-y-8 pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">학술적 패러다임 연구 (Academic Focus)</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4 p-8 bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 underline decoration-gray-300 underline-offset-8">
                            공공 의사결정 아키텍처
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            알고리즘 거버넌스 및 스마트시티 도메인 내부의 구조적 경계, 권한 체계, 그리고 적응형 피드백 루프 작동 방식을 분석합니다.
                        </p>
                    </div>
                    <div className="space-y-4 p-8 bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 underline decoration-gray-300 underline-offset-8">
                            AI 지원 의사결정 구조
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            정책 수명 주기 전반에 걸친 패턴 탐지, 생성적 전략 도입 및 실시간 최적화 모델 적용 연구를 수행합니다.
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
                <p className="text-gray-500 font-medium">
                    연구 성과 및 구체적인 데이터 기반 방법론은 본 페이지를 통해 지속적으로 업데이트됩니다.
                </p>
            </div>
        </div>
    );
}
