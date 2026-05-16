import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "프로젝트 — 진행 중인 연구·개발",
    description: "SAPD doctrine · Policy Methodology Lab · 정부 정책 평가 AI · 선거 캠프 플랫폼 · 한국 정책 시뮬레이션 · Senior MHealth · 입지 분석 등 진행 중인 연구·개발 프로젝트.",
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
    openGraph: {
        title: "프로젝트 — 이석민 | 진행 중인 연구·개발",
        description: "진행 중인 연구·개발 프로젝트.",
        url: `${SITE_URL}/projects`,
    },
};

export default function ProjectsPage() {
    return (
        <div className="space-y-16">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Projects</h1>
                <p className="text-xl text-gray-600 font-light">
                    SAPD doctrine · Policy Methodology Lab · 정부 정책 평가 AI · 선거 캠프 플랫폼 · 한국 정책 시뮬레이션 · Senior MHealth · 입지 분석
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

            {/* 진행 중인 프로젝트 7 카드 */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">진행 중인 프로젝트</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* 1. SAPD doctrine */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">SAPD doctrine — 상태 기반 적응형 정책 설계</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 증거 기반 정책(EBP)의 시간 지연·맥락 의존성·복잡성·적응성 한계를 진단하고, 정책 환경의 상태 변화에 따라 판단과 대응이 함께 전환되는 정책 설계 원리를 제시하는 데 있다. 본 사이트는 doctrine 의 외부 공개 인터페이스이다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 사이버네틱스(피드백 제어·필요다양성·VSM) 위에 정책 시스템을 정의·감지·판단·실행·학습 다섯 기능으로 분해하고, 자동화 차등·감사 가능성·법적 정박을 가로지르는 통제 차원을 함께 명시하는 것이다.
                        </p>
                        <Link href="/framework" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800">
                            Framework 자세히 <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Policy Design</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Cybernetics</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">AI Governance</span>
                        </div>
                    </div>

                    {/* 2. policy-methodology-lab */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Policy Methodology Lab — AI 시대 정책 연구방법론 라이브러리</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 정책 분석과 적응형 의사결정 시스템 설계에 사용되는 방법론들을 공통 라이브러리로 체계화하여, 응용 프로젝트들이 매번 새로 정리하지 않고 참조할 수 있게 만드는 데 있다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 각 방법을 개념·적용 조건·정책 생애주기 연결·도구·사례·다른 방법과의 조합의 여섯 차원으로 정리하는 실무형 가이드 형식을 따른다. 전문 교과서가 아니라 작업 중에 바로 인용할 수 있는 형태를 지향한다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-0.5 rounded uppercase">Methodology</span>
                            <span className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-0.5 rounded uppercase">Research Library</span>
                            <span className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-0.5 rounded uppercase">SADD Core</span>
                        </div>
                    </div>

                    {/* 3. 정부 정책 평가 AI (policy-analysis) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">기획·설계</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">정부 정책 평가 AI — 인과분석 기반 효과성평가 자동화</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 정부의 다양한 정책평가에서 효과성 판단이 전문가의 주관에 크게 의존하는 구조를 진단하고, 정책의 실제 효과를 과학적으로 추정하는 객관적 평가 체계로 전환하는 데 있다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 인과추론 기반 효과성 평가(이중차분·합성통제·성향점수매칭·이중강건 추정)를 정책 데이터 수집부터 보고서 생성까지의 AI 자동화 파이프라인 안에 배치하는 것이다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Causal Inference</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Policy Evaluation</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Automation</span>
                        </div>
                    </div>

                    {/* 4. war-room-platform (candidate-agnostic) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">war-room-platform — 모든 선거의 캠프 분석 플랫폼</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 대선·총선·지방선거 등 어떤 선거든 캠프 분석을 매번 새로 만드는 비효율을 제거하고, 후보·선거에 무관하게 동일한 분석 frame 으로 재사용 가능한 베이스 플랫폼을 구축하는 데 있다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 캠프 운영의 핵심 상태변수와 공간 분석을 결합한 SADD 파이프라인을 candidate-agnostic 베이스로 두고, 후보별 인스턴스는 데이터·설정·임계값만 채워서 인스턴스화하되 베이스와의 회귀 검증을 강제하는 것이다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">Election Analytics</span>
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">SADD</span>
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">Spatial</span>
                        </div>
                    </div>

                    {/* 5. ko-sim */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">방법론 검증</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">ko-sim — 한국 공공정책 사전 탐색 시뮬레이션</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 정책을 실제 시행하기 전에 인구 세그먼트별 반응을 시뮬레이션으로 미리 살펴보는 도구의 한국 도메인 타당성을 검증하는 데 있다. 서비스 MVP 가 아니라 방법론 자체가 어디서 작동하고 어디서 무너지는지를 측정한다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 LLM 기반 페르소나 시뮬레이션(silicon sampling)을 실제 여론조사 시계열과 백테스트로 비교하는 것이다. 단순 LLM·후층화·PPI hybrid 등 여러 baseline 의 정확도와 실패 모드를 함께 보고한다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Policy Pretest</span>
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Persona Simulation</span>
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Backtest</span>
                        </div>
                    </div>

                    {/* 6. Senior MHealth */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Senior MHealth — AI 기반 시니어 정신건강 모니터링</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 고령자의 정신건강 위험, 특히 우울증을 임상 진단 이전 단계에서 일상 행동 신호로 조기 감지하는 데 있다. 임상 접근만으로는 닿기 어려운 인구를 대상으로 한 비침습적 모니터링 체계를 지향한다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 음성을 비롯한 행동 데이터를 AI(음향·언어 멀티모달 모델)로 분석하고, 결과를 임상 표준 척도와 상관 검증한 뒤 모바일 앱·웹 대시보드를 통해 시니어와 관리자에게 전달하는 것이다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">mHealth</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Voice AI</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Early Detection</span>
                        </div>
                    </div>

                    {/* 7. location-analysis — 공통 입지 분석 + 특허 자동화 (col-span-2) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Location Analysis — 공통 입지 분석 엔진 + 특허 출원 자동화</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">목적</strong>은 &quot;어디에 시설을 둘 것인가&quot; 라는 공통 입지 의사결정 문제를 시설 종류에 무관한 범용 frame 으로 객관화하는 데 있다. 특정 도메인(예: 상담센터·물류·소매·공공시설 등)에 묶이지 않고, 어떤 시설이든 동일한 분석 절차로 후보지를 평가할 수 있는 베이스를 지향한다. 부속 트랙으로 본 입지 분석 도구를 비롯한 발명의 한국 특허 출원 자동화 Agent 를 함께 개발한다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">방법론</strong>은 두 갈래다. 입지 분석 측은 지리공간 데이터·정책 신호·시장 신호·법령 적격성을 다차원 점수(수요·접근성·경쟁·경제성·입지 적합성)와 공간 분석으로 통합하고, 시설 종류별 가중치만 바꿔서 재사용 가능하도록 설계한다. 특허 측은 발명 설명에서 출발해 선행기술 검색·서류 작성·도면 제작·전자출원 직전 단계까지의 과정을 변리사 수준 품질로 자동화하되, 최종 법률 판단은 변리사에 귀속됨을 명시한다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Site Selection</span>
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Geospatial</span>
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Patent Automation</span>
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
                    <Link href="/writings" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                        저서 및 논문
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
