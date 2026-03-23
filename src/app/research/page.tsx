import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "연구 — 주요 연구·개발 프로젝트",
    description: "이석민의 AI 기반 정책 분석, 계산사회과학 기반 정책 의사결정 지원 시스템, 국제관계 예측 파이프라인 등 주요 연구·개발 프로젝트 소개.",
    alternates: {
        canonical: `${SITE_URL}/research`,
    },
    openGraph: {
        title: "연구 — 이석민 | 정책 × AI",
        description: "AI 기반 정책 분석, 국제관계 예측, 정책 의사결정 지원 시스템 등 연구·개발 프로젝트.",
        url: `${SITE_URL}/research`,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "연구 — 이석민 | 정책 × AI",
    description: "이석민의 AI 기반 정책 분석, 계산사회과학 기반 정책 의사결정 지원, 국제관계 예측 파이프라인 등 주요 연구·개발 프로젝트.",
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
                    name: "AI 기반 국제관계 통합 분석 파이프라인",
                    description: "동아시아 국제관계의 변동이 국내에 미치는 영향을 과학적으로 분석하기 위해 AI 기반 통합 파이프라인 및 DSLM 방법론을 탐구합니다.",
                    member: { "@id": `${SITE_URL}/#person` },
                    keywords: ["Forecasting", "International Relations", "DSLM", "LLM Router", "Causal Inference"],
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@type": "ResearchProject",
                    name: "지능형 정책 의사결정 지원 시스템",
                    description: "인공지능, 강화학습, 디지털 트윈 등 최신 방법론을 통합한 계산사회과학 기반의 정책 지원 체계를 구축합니다.",
                    member: { "@id": `${SITE_URL}/#person` },
                    keywords: ["Decision Support", "Digital Twin", "Causal ML", "Agent-based Simulation"],
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                item: {
                    "@type": "ResearchProject",
                    name: "AI를 활용한 시니어 정신건강 진단 앱 개발",
                    description: "한신대학교 소프트웨어중심대학사업단 프로젝트의 일환으로 시니어의 정신건강을 선제적으로 진단하고 관리할 수 있는 AI 기반 소프트웨어를 개발.",
                    member: { "@id": `${SITE_URL}/#person` },
                    funder: {
                        "@type": "Organization",
                        name: "한신대학교 소프트웨어중심대학사업단",
                    },
                    startDate: "2025-05",
                    endDate: "2025-09",
                    keywords: ["Applied AI", "Public Health", "UI/UX for Seniors"],
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
                    데이터분석과 AI를 활용한 정책 기획·분석·평가 시스템을 설계하고,
                    계산사회과학 방법론으로 정책 의사결정을 지능화하며,
                    분석 결과의 타당성과 시스템 자체의 검증 가능성을 함께 연구합니다.
                </p>
            </header>

            {/* Theoretical Paradigms (Academic Focus) - First Priority */}
            <section className="space-y-12">
                <header>
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                        학술적 패러다임 연구 (Academic Focus)
                    </h2>
                </header>

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
                            계산사회과학 기반 의사결정 지원
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            강화학습, 디지털 트윈, Causal ML, 에이전트 기반 시뮬레이션 등 계산사회과학 방법론을 통합하여
                            정책 생애주기 전반의 의사결정을 데이터 기반으로 지능화하는 시스템을 연구합니다.
                        </p>
                    </div>
                    <div className="space-y-3 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                        <h4 className="text-lg font-bold text-gray-900 underline decoration-gray-300 underline-offset-4">
                            SAPD Framework — 이론층
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정책을 실시간 상태 데이터에 기반해 지속적으로 적응하는 시스템으로 재설계하는 상태 기반 적응형 정책(State-based Adaptive Policy) 패러다임을 연구합니다.
                        </p>
                    </div>
                    <div className="space-y-3 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                        <h4 className="text-lg font-bold text-gray-900 underline decoration-gray-300 underline-offset-4">
                            SAPD Validation Module — 실무층
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            AI 기반 분석·평가 결과의 타당성 검증과 설계 시스템 자체의 검증 가능성을 평가하는 실무 프레임워크를 설계합니다. 설명가능성 진단, 검토 체크리스트, 평가 루브릭을 포함합니다.
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
                    <Link href="/archive" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center gap-2">
                        <span className="text-sm font-medium text-gray-600">전체 저서·논문 보기</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}
