import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "About — 이석민",
    description: "정치학과 정책연구를 출발점으로, 통계·인과추론·AI를 결합하여 SAPD Framework 기반의 실시간 적응형 정책 의사결정 시스템을 연구하는 연구자.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About — 이석민 | 정책 × AI",
        description: "정치학과 정책연구를 출발점으로, 통계·인과추론·AI를 결합하여 SAPD Framework 기반의 실시간 적응형 정책 의사결정 시스템을 연구합니다.",
        url: `${SITE_URL}/about`,
    },
};

export default function AboutPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">About</h1>
            </header>

            {/* 왜 이 교차점에 서 있는가 */}
            <section className="space-y-6 max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                    왜 이 교차점에 서 있는가
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        정치학과 정책연구를 출발점으로, 통계·인과추론·AI를 결합하여
                        공공영역에서 신뢰 가능한 AI 활용 방식을 연구하고 설계하고 있습니다.
                    </p>
                    <p>
                        사회과학적 문제의식에서 출발하여 방법론을 확장하고, 다시 그 방법론을 실제 작동하는 시스템으로 구현하는 것 —
                        이론과 실천의 순환이 제 연구의 핵심 원리입니다.
                    </p>
                    <p>
                        이러한 방법론적 기반 위에 SAPD Framework를 설계하여,
                        정책을 실시간 상태 데이터 기반으로 적응하는 의사결정 시스템으로 구현합니다.
                        강화학습, 디지털 트윈, 에이전트 기반 시뮬레이션은 이 시스템의 방법론적 엔진입니다.
                    </p>
                    <p>
                        &ldquo;공공 의사결정은 어떻게 더 나은 시스템이 될 수 있는가&rdquo;라는 질문이
                        모든 연구와 개발의 출발점입니다.
                    </p>
                </div>
            </section>

            {/* 학문적 궤적 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                    학문적 궤적
                </h2>
                <div className="max-w-3xl flex flex-col sm:flex-row items-center gap-3">
                    <div className="flex-1 w-full p-4 bg-white border border-gray-200 rounded-lg text-center shadow-sm">
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">사회과학 기반</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            서울대 인류학(학사) → 정치학(석사) → 과학기술정책(박사)
                        </p>
                    </div>
                    <div className="flex-shrink-0 text-gray-300">
                        <ArrowRight className="hidden sm:block w-5 h-5" />
                        <svg className="block sm:hidden w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                    <div className="flex-1 w-full p-4 bg-white border border-gray-200 rounded-lg text-center shadow-sm">
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">방법론 확장</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            통계학/계량경제학/빅데이터분석
                        </p>
                    </div>
                    <div className="flex-shrink-0 text-gray-300">
                        <ArrowRight className="hidden sm:block w-5 h-5" />
                        <svg className="block sm:hidden w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                    <div className="flex-1 w-full p-4 bg-white border border-gray-200 rounded-lg text-center shadow-sm">
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">기술 융합</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            데이터사이언스 + AI 설계/응용 + SAPD 시스템 설계
                        </p>
                    </div>
                </div>
            </section>

            {/* 강의 요약 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                    강의 영역
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                    {[
                        { area: "정책 분석·기획·평가", courses: "정책분석과 기획, 정책분석평가론" },
                        { area: "딥러닝·AI", courses: "딥러닝자연어처리, 딥러닝 영상데이터분석(geoAI)" },
                        { area: "개발·엔지니어링", courses: "웹프로그래밍, LLMOPs & 데이터 엔지니어링, AI 에이전트 캡스톤" },
                        { area: "데이터 분석", courses: "데이터분석과 시각화" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium text-gray-900 text-sm">{item.area}</p>
                                <p className="text-xs text-gray-500 mt-1">{item.courses}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link
                    href="/lectures"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                    강의 상세 보기
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

            {/* 저서·논문 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3">
                    저서·논문
                </h2>
                <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
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
                </div>
                <Link
                    href="/archive"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                    전체 저서·논문 보기
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </section>
        </div>
    );
}
