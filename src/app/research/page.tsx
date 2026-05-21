import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "연구 — 주요 연구·개발 프로젝트",
    description: "이석민의 AI 기반 정책 의사결정, 정책분석·평가 시스템, Policy Methodology Lab 연구 소개.",
    alternates: {
        canonical: `${SITE_URL}/research`,
    },
    openGraph: {
        title: "연구 — 이석민 | 정책 × AI",
        description: "AI 기반 정책 의사결정, 정책분석·평가 시스템, 정책연구 방법론 라이브러리 프로젝트.",
        url: `${SITE_URL}/research`,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "연구 — 이석민 | 정책 × AI",
    description: "이석민의 AI 기반 정책 의사결정, 정책분석·평가 시스템, Policy Methodology Lab 연구 소개.",
    url: `${SITE_URL}/research`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                item: {
                    "@type": "ResearchProject",
                    name: "AI 기반 정책 의사결정 시스템",
                    description: "SAPD Framework를 중심으로 상태 정의, 감지, 전환 판단, 행위 포트폴리오, 학습 환류를 연결하는 AI 기반 정책 의사결정 구조를 연구합니다.",
                    member: { "@id": `${SITE_URL}/#person` },
                    keywords: ["SAPD", "Decision Support", "Digital Twin", "Adaptive Policy", "Policy AI"],
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@type": "ResearchProject",
                    name: "정책분석·평가 시스템",
                    description: "인과추론, 정책평가, 평가 가능성 진단, 정책평가 AI agent를 결합한 정책분석·평가 시스템을 구축합니다.",
                    member: { "@id": `${SITE_URL}/#person` },
                    keywords: ["Policy Evaluation", "Causal Inference", "Causal ML", "AI Agent", "Evaluation Design"],
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                item: {
                    "@type": "ResearchProject",
                    name: "Policy Methodology Lab",
                    description: "AI 시대 정책연구 방법론을 방법론 카드, 분석 프로토콜, 루브릭, 코드 템플릿으로 정리하는 라이브러리 프로젝트입니다.",
                    member: { "@id": `${SITE_URL}/#person` },
                    keywords: ["Research Methods", "Policy Methodology", "RAG", "LLM Evaluation", "Reproducibility"],
                },
            },
        ],
    },
};

export default function ResearchPage() {
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="space-y-16">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 border-b-2 border-gray-900 pb-4 inline-block">Research</h1>
                <p className="text-xl text-gray-600 font-light">
                    AI 기반 정책 의사결정, 정책분석·평가, 정책연구 방법론을 연결하여
                    공공영역에서 신뢰 가능한 정책 AI 시스템을 연구하고 구축합니다.
                </p>
            </header>

            {/* Research Axes */}
            <section className="space-y-12">
                <header>
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                        세 가지 연구축
                    </h2>
                </header>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="flex flex-col gap-5 p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                        <div className="space-y-3">
                            <span className="text-xs font-bold tracking-[0.25em] text-gray-400">01</span>
                            <h3 className="text-xl font-bold text-gray-900">
                                AI 기반 정책 의사결정 시스템
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정책을 고정된 계획이 아니라 상태 변화에 따라 조정되는 의사결정 시스템으로 본다.
                            SAPD Framework를 통해 상태 정의, 감지, 판단, 실행, 학습 환류를 연결하는
                            AI 기반 정책 의사결정 구조를 설계한다.
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2 pt-2">
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">SAPD</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Adaptive Policy</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Decision Loop</span>
                        </div>
                        <Link href="/framework" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600">
                            Framework 보기
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-5 p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                        <div className="space-y-3">
                            <span className="text-xs font-bold tracking-[0.25em] text-gray-400">02</span>
                            <h3 className="text-xl font-bold text-gray-900">
                                정책분석·평가 시스템
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정책 질문이 평가 가능한지, 어떤 자료와 비교 기준이 필요한지,
                            어떤 인과추론 설계가 적절한지를 판단하는 정책분석·평가 시스템을 구축한다.
                            핵심 관심은 평가방법, 식별전략, 해석 가능성, 검증 절차를 갖춘 정책평가 AI agent이다.
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2 pt-2">
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Causal Inference</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Policy Evaluation</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">AI Agent</span>
                        </div>
                        <Link href="/archive/B-006" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600">
                            관련 저서 보기
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-5 p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                        <div className="space-y-3">
                            <span className="text-xs font-bold tracking-[0.25em] text-gray-400">03</span>
                            <h3 className="text-xl font-bold text-gray-900">
                                Policy Methodology Lab
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Policy Methodology Lab은 AI 시대 정책연구 방법론을 재사용 가능한 형태로 정리하는
                            라이브러리 프로젝트이다. 인과추론, 텍스트 분석, RAG, LLM 평가, 혼합방법,
                            연구 재현성 기준을 방법론 카드와 분석 프로토콜로 구축한다.
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2 pt-2">
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Method Library</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Rubric</span>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 border border-gray-200">Research Protocol</span>
                        </div>
                        <Link href="/writings" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600">
                            방법론 글 보기
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <header>
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                        연구축 간 연결
                    </h2>
                </header>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-5 bg-white rounded-lg border border-gray-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Knowledge Base</p>
                        <h3 className="mt-2 text-base font-bold text-gray-900">Policy Methodology Lab</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            방법론 카드, 분석 프로토콜, 루브릭, 코드 템플릿을 축적한다.
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-lg border border-gray-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Evaluation Engine</p>
                        <h3 className="mt-2 text-base font-bold text-gray-900">정책분석·평가 시스템</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            축적된 방법론을 바탕으로 정책 질문, 자료, 식별전략, 해석 가능성을 검토한다.
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-lg border border-gray-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Decision System</p>
                        <h3 className="mt-2 text-base font-bold text-gray-900">AI 기반 정책 의사결정 시스템</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            평가 결과와 상태 정보를 정책 판단, 실행, 학습 환류 구조로 연결한다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 관련 저서·논문·칼럼 교차 링크 */}
            <section className="space-y-6 pt-12 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    관련 저서·논문·칼럼
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Link href="/archive/J-009" className="p-4 bg-gray-50 rounded-lg border border-amber-200 hover:border-amber-400 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">SSCI Q1 투고중</span>
                        <p className="text-sm font-semibold text-gray-900">Measuring Adaptive Governance Without Accumulation Bias</p>
                        <p className="text-xs text-gray-500">Policy Sciences (Springer Nature)</p>
                    </Link>
                    <Link href="/archive/B-006" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">저서</span>
                        <p className="text-sm font-semibold text-gray-900">인과 데이터 사이언스</p>
                    </Link>
                    <Link href="/archive/B-003" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">저서</span>
                        <p className="text-sm font-semibold text-gray-900">데이터사이언스 방법론</p>
                    </Link>
                    <Link href="/archive/B-001" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">저서</span>
                        <p className="text-sm font-semibold text-gray-900">AI 시대의 정책분석론</p>
                    </Link>
                    <Link href="/writing/intro" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">칼럼</span>
                        <p className="text-sm font-semibold text-gray-900">상태 기반 적응형 정책 개론</p>
                    </Link>
                    <Link href="/writing/sapd-palantir-convergence" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">칼럼</span>
                        <p className="text-sm font-semibold text-gray-900">SAPD와 팔란티어의 구조적 동형성</p>
                    </Link>
                    <Link href="/projects" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors block space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">프로젝트</span>
                        <p className="text-sm font-semibold text-gray-900">프로토타입 및 연구·개발</p>
                    </Link>
                    <Link href="/writings" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center gap-2">
                        <span className="text-sm font-medium text-gray-600">전체 저서·논문 보기</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}
