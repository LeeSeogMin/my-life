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
                            <span className="text-xs text-gray-400 font-mono">단계 3γ · 2026-05-16</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">SAPD doctrine — 상태 기반 적응형 정책 설계</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            State-based Adaptive Policy Design — SADD 메타 frame 의 공공정책 도메인 패키지이다. 증거 기반 정책(EBP)의 시간 지연·맥락 의존성·복잡성·적응성 한계를 진단하고, 사이버네틱스(Wiener·Ashby·Conant-Ashby·Beer VSM) 위에 5 층 본체 — L1 상태 정의 · L2 감지 네트워크 · L3 전환 판단 · L4 행위 포트폴리오 · L5 학습 환류 — 와 5 번째 횡단 차원(Cross-layer Governance Overlay: 자동화 차등 · 감사 가능성 · 법적 정박 · 무의사결정 가시화)을 결합한 정책 설계 doctrine 이다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            두 라이브 인스턴스 — sapd-care (한국 고령자 돌봄 행정 DSS, micro·meso) · sapd-policy (거시 정책 분석, macro) — 와 통합 facade(sapd-gateway, Phase D) 로 구성되며, 본 사이트는 doctrine 의 외부 공개 인터페이스(publication interface) 이다.
                        </p>
                        <Link href="/framework" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800">
                            Framework 자세히 <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Doctrine</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">Cybernetics · VSM</span>
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase">AI Governance</span>
                        </div>
                    </div>

                    {/* 2. policy-methodology-lab */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                            <span className="text-xs text-gray-400 font-mono">17 methods · book-maker</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Policy Methodology Lab — AI 시대 정책 연구방법론 라이브러리</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            SADD doctrine 에서 분리된 방법론 코어. 정책 문제를 분석하고 적응형 의사결정 시스템을 설계할 때 필요한 방법론을 체계화하여, SADD · SAPD · decision-making · policy-analysis 등 응용 프로젝트가 공통으로 참조할 수 있는 학술 라이브러리를 구축한다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            현재 17 개 방법론 챕터 (method1~method17) 진행. 각 챕터는 개념·적용 조건·정책 생애주기 연결·도구·사례·다른 방법론과의 조합을 다룬다. 전문 교과서가 아닌 <strong className="text-gray-700">실무형 연구방법론 가이드</strong> 를 지향. book-maker 트랙으로 단행본 집필 동시 진행.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-0.5 rounded uppercase">Methodology</span>
                            <span className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-0.5 rounded uppercase">SADD Core</span>
                            <span className="text-[10px] font-bold bg-teal-50 text-teal-600 px-2 py-0.5 rounded uppercase">Research Library</span>
                        </div>
                    </div>

                    {/* 3. 정부 정책 평가 AI (policy-analysis) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Phase 0 — 기획·설계</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">정부 정책 평가 AI — 인과분석 기반 효과성평가 자동화</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정부의 다양한 정책평가 — 정부업무평가 · 공공기관경영평가 · 지방공기업경영평가 · 기관 자체평가 — 에서 현재 전문가의 주관적 판단에 의존하는 효과성평가를 <strong className="text-gray-700">과학적 인과분석 기반의 객관적 평가</strong> 로 전환하는 AI 기반 통합 평가 시스템.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            핵심 방법론은 Method3 — DiD (Difference-in-Differences) · SCM (Synthetic Control Method) · PSM (Propensity Score Matching) · Doubly Robust DiD-SCM (기본값). 데이터 수집 → 정책 분석 → 인과효과 추정 → 효과성 평가 → 보고서 생성의 자동화 파이프라인을 설계한다. 정부업무평가·공공기관경영평가(self_eval) 와 기획재정부 재정사업 자율평가(moef) 두 트랙으로 진행.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Causal Inference</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">Policy Evaluation</span>
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase">DiD · SCM · PSM</span>
                        </div>
                    </div>

                    {/* 4. war-room-platform (candidate-agnostic) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                            <span className="text-xs text-gray-400 font-mono">candidate-agnostic platform</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">war-room-platform — 모든 선거의 캠프 분석 플랫폼</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            대선·총선·지방선거를 포괄하는 <strong className="text-gray-700">후보 무관(candidate-agnostic) 선거 캠프 분석 플랫폼</strong>. 7 대 상태변수 (S1~S7) 와 S8 공간 분석을 결합한 SADD 파이프라인을 베이스로, 후보별 캠프는 platform 을 복사하고 후보 config · 지역 데이터 · 임계값만 채워서 인스턴스화하는 구조이다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            PLATFORM_VERSION 파일에 platform git SHA 를 기록하여 인스턴스 간 회귀 검증(bit-equal 출력)을 보장하고, 어떤 선거에서도 동일 분석 frame 이 재사용되도록 설계되었다. 7 상태변수는 의제 · 지지 · 동원 · 미디어 · 자금 · 지역 · 일정 같은 캠프 운영 차원에 대응한다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">SADD</span>
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">Election Analytics</span>
                            <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2 py-0.5 rounded uppercase">Spatial</span>
                        </div>
                    </div>

                    {/* 5. ko-sim */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Phase 1 완료</span>
                            <span className="text-xs text-gray-400 font-mono">방법론 검증 MVP</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">ko-sim — 한국 공공정책 사전 탐색 시뮬레이션</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            정책 설명과 타겟 집단을 입력하면 <strong className="text-gray-700">Nemotron 기반 페르소나 + LLM</strong> 이 인구 세그먼트별 정책 반응을 예측하고, 갤럽·NBS·KEEP 의 실제 여론조사 시계열과 백테스트로 비교하여 페르소나 모델의 정확도를 측정한다. silicon sampling 문헌의 후속 연구.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">서비스 MVP 가 아닌 방법론 검증 MVP</strong> — Phase 2 결정 4 건(백테스트 케이스 4 개 확정 · LLM/MRP/PPI hybrid baseline 4 종 · 프롬프트 전략 · 산출물 형식 사전 정의)을 거쳐 어느 조건에서 작동하고 어디서 무너지는지를 측정하는 백테스트 리포트를 산출한다. subgroup distortion · variance collapse · 시간 불안정성 같은 실패 모드를 명시한다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Persona Simulation</span>
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">LLM · MRP · PPI</span>
                            <span className="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded uppercase">Policy Pretest</span>
                        </div>
                    </div>

                    {/* 6. Senior MHealth */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                            <span className="text-xs text-gray-400 font-mono">음성 분석 우울증 조기 발견</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Senior MHealth — AI 기반 시니어 정신건강 모니터링</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            고령자의 <strong className="text-gray-700">음성 패턴을 AI 로 분석하여 우울증 등 정신건강 위험을 조기 감지</strong> 하는 통합 헬스케어 플랫폼. 현재 운영 단계는 Librosa + GPT-4 / Gemini + SincNet 기반 분석(정확도 70-80%), 2025-26 목표는 Wav2Vec2 + KoBERT 멀티모달 모델(정확도 90-95%) 로 Cross-Modal Fusion 으로 음성-텍스트 동시 학습 + 한국 노인 특화 최적화.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            5 대 정신건강 지표 — DRI · SDI · CFL · ES · OV — 를 측정하며 임상 표준 척도와 상관계수 0.79-0.87 수준. Flutter 기반 모바일 앱 + Next.js 15 관리자 대시보드 + 실시간 위험 알림 구성. 한신대 소프트웨어중심대학사업단의 학부생 협업 프로젝트에서 출발하여 시니어 mHealth 본격 연구로 확장.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">mHealth</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Voice AI · Wav2Vec2</span>
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">Depression Detection</span>
                        </div>
                    </div>

                    {/* 7. location-analysis — site-selection-engine + patent (col-span-2) */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">진행 중</span>
                            <span className="text-xs text-gray-400 font-mono">site-selection-engine + patent</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Location Analysis — 입지 평가 엔진 + 한국 특허 출원 자동화</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            지리공간 데이터 · 정책 신호 · 시장 신호 · 법령 적격성을 결합하여 공공·민간 입지 의사결정을 보조하는 분석 시스템. 두 sub-project 로 구성된다.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">site-selection-engine</strong> — 상담센터 등 시설 후보지의 5 차원 점수(수요 · 접근성 · 경쟁 · 경제성 · 입지 적합성)를 산출하고, 법령 적격성 prefilter + 건축물대장 API 기반 건물 속성 보강 + NLP 리뷰 분석 + 지역 단위 discovery 를 수행한다. Python 분석 엔진 + 로컬 FastAPI 웹 UI 로 CSV 업로드 → 보고서 · 차트 · 지도 · 공간분석 결과를 즉시 확인 가능.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-gray-700">patent</strong> — 한국 특허청(KIPO) 출원을 위한 범용 자동화 Agent. 발명 설명 입력 → 선행기술 검색 → 출원 서류 작성 → 변리사 수준의 품질 강화 → 도면 실물 제작 → 전자출원 직전 단계까지 전 과정을 지원한다. 변리사 수탁 경로와 본인 출원 경로(특허법 §3) 양쪽을 지원하며, 최종 법률 판단은 변리사·특허법인에 귀속됨을 명시한다.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Geospatial · GIS</span>
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Site Selection</span>
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">KIPO Patent Automation</span>
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
