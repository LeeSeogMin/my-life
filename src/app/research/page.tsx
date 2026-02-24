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

            {/* Ongoing Research Projects */}
            <section className="space-y-6 pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                    현재 진행 중인 연구 (Ongoing Research)
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Project 1: Forecasting */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <h3 className="text-lg font-bold text-gray-900">AI 기반 국제관계 통합 분석 파이프라인 (Forecasting)</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            동아시아 국제관계의 변동이 국내에 미치는 영향을 과학적으로 분석하기 위해 AI 기반 통합 파이프라인 및 DSLM(Domain Specific Language Model) 방법론을 탐구합니다. LLM Router 패턴과 인과 추론 모듈을 결합하여 합리적인 국가 전략 대응 방안을 도출하는 데 주력하고 있습니다.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Forecasting</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">International Relations</span>
                        </div>
                    </div>

                    {/* Project 2: Decision Making */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <h3 className="text-lg font-bold text-gray-900">지능형 정책 의사결정 지원 시스템 (Decision Making)</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            인공지능, 강화학습, 디지털 트윈 등 최신 방법론을 통합한 계산사회과학(Computational Social Science) 기반의 정책 지원 체계를 구축합니다. Causal ML을 통한 정책 인과효과 추정과 에이전트 기반 시뮬레이션을 통해 정책 생애주기 전반을 지능화합니다.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Decision Support</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Digital Twin</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Theoretical Paradigms */}
            <section className="space-y-12 pt-12 border-t border-gray-100">
                <header>
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                        학술적 패러다임 연구 (Academic Focus)
                    </h2>
                </header>

                {/* Ongoing Research Focus */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        현재 진행형 (Ongoing Paradigms)
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                            <h4 className="text-lg font-bold text-gray-900 underline decoration-gray-300 underline-offset-4">
                                공공 의사결정 아키텍처
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                알고리즘 거버넌스 및 스마트시티 도메인 내부의 구조적 경계, 권한 체계, 그리고 적응형 피드백 루프 작동 방식을 분석합니다.
                            </p>
                        </div>
                        <div className="space-y-3 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                            <h4 className="text-lg font-bold text-gray-900 underline decoration-gray-300 underline-offset-4">
                                AI 지원 의사결정 구조
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                정책 수명 주기 전반에 걸친 패턴 탐지, 생성적 전략 도입 및 실시간 최적화 모델 적용 연구를 수행합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Past Programs */}
                <div className="space-y-6 pt-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 text-opacity-80">
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        과거 진행 프로그램 (Past Programs)
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-3 p-6 bg-white rounded-xl border border-dashed border-gray-200">
                            <h4 className="text-lg font-bold text-gray-600">
                                [업데이트 예정]
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                과거 진행되었던 주요 학술 프로그램 및 연구 프로젝트 내역이 이곳에 구조화되어 정리될 예정입니다.
                            </p>
                        </div>
                        <div className="space-y-3 p-6 bg-white rounded-xl border border-dashed border-gray-200 hidden md:block">
                            <div className="h-full w-full flex items-center justify-center">
                                <span className="text-gray-300 text-sm font-medium italic">Reserved for archive</span>
                            </div>
                        </div>
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
