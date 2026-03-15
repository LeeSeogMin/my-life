import { ArrowRight, Clock, Briefcase, Wrench } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "프로젝트 — 프로토타입 및 연구·개발",
    description: "정책문서 분석 AI, 정책분석 질문 검토 AI 등 Working Prototype과 진행 중인 연구·개발 프로젝트.",
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
    openGraph: {
        title: "프로젝트 — 이석민 | 정책 × AI",
        description: "정책 AI 프로토타입 및 연구·개발 프로젝트.",
        url: `${SITE_URL}/projects`,
    },
};

export default function ProjectsPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Projects</h1>
                <p className="text-xl text-gray-600 font-light">
                    정책 AI 프로토타입과 진행 중인 연구·개발
                </p>
            </header>

            {/* 협업 제안 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2">
                <h3 className="text-base font-bold text-gray-900">함께 연구할 파트너를 찾습니다</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    아래의 연구 주제에 관심이 있는 <strong className="text-gray-800">연구자, 공공기관, 지방자치단체</strong>와의 공동 연구·협력을 환영합니다.
                </p>
                <p className="text-sm text-gray-700">
                    관심 있으신 분은{" "}
                    <a href="mailto:newmind68@hs.ac.kr" className="font-semibold text-blue-600 hover:underline">
                        newmind68@hs.ac.kr
                    </a>
                    로 편하게 연락 주십시오.
                </p>
            </div>

            {/* Working Prototypes */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Working Prototypes</h2>
                </div>
                <p className="text-gray-600 text-sm max-w-3xl">
                    정책분석용 생성형 AI를 실제 작동하는 도구로 구현합니다. 단순 요약이 아니라 정책 쟁점 구조화와 분석 질문 검토에 초점을 맞추며,
                    각 프로토타입은 SAPD Validation Module의 검증 기준(분석 결과 타당성, 설명가능성, 추적 가능성)을 내장하여 설계합니다.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "국회 회의록 분석 AI",
                            desc: "회의록 요약, 쟁점 추출, 문서 간 비교, 정책 대안 표 생성, 핵심 인용 근거 정리를 수행하는 정책문서 구조화 도구.",
                            tags: ["NLP", "Document Analysis", "Policy"],
                        },
                        {
                            title: "정책분석 질문 검토 AI",
                            desc: "사용자의 분석 질문을 심문합니다 — 효과 정의, 비교집단 설정, 인과해석 가능성, 필요 데이터, 분석 한계를 구조적으로 검토.",
                            tags: ["Causal Inference", "Methodology", "Review"],
                        },
                        {
                            title: "정책문서 비교·쟁점 추출 도구",
                            desc: "복수의 정책보고서, 법안, 보도자료를 입력받아 쟁점별 비교 표와 입장 차이를 자동으로 구조화.",
                            tags: ["Comparison", "Issue Extraction", "NLP"],
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white border-2 border-dashed border-gray-300 rounded-xl space-y-3 relative"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    Coming Soon
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ongoing Research Projects */}
            <section className="space-y-6 pt-12 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Ongoing Research</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">AI 기반 국제관계 통합 분석 파이프라인</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            동아시아 국제관계의 변동이 국내에 미치는 영향을 과학적으로 분석하기 위해 AI 기반 통합 파이프라인 및 DSLM(Domain Specific Language Model) 방법론을 탐구합니다.
                            LLM Router 패턴과 인과 추론 모듈을 결합하여 합리적인 국가 전략 대응 방안을 도출하는 데 주력하고 있습니다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Forecasting</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">International Relations</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">지능형 정책 의사결정 지원 시스템</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            인공지능, 강화학습, 디지털 트윈 등 최신 방법론을 통합한 계산사회과학(Computational Social Science) 기반의 정책 지원 체계를 구축합니다.
                            Causal ML을 통한 정책 인과효과 추정과 에이전트 기반 시뮬레이션을 통해 정책 생애주기 전반을 지능화합니다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Decision Support</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Digital Twin</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">완료</span>
                            <span className="text-xs text-gray-400 font-mono">2025. 05 – 2025. 09</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">AI를 활용한 시니어 정신건강 진단 앱 개발</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            한신대학교 소프트웨어중심대학사업단 프로젝트의 일환으로, 학부생들과 함께 시니어의 정신건강을 선제적으로 진단하고 관리할 수 있는 AI 기반 소프트웨어를 개발하였습니다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Applied AI</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Public Health</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 관련 콘텐츠 */}
            <nav className="border-t border-gray-200 pt-8 space-y-4">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">관련 콘텐츠</h2>
                <div className="flex flex-wrap gap-3">
                    <Link href="/framework" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        SAPD Framework
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
