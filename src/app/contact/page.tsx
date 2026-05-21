import { Mail } from "lucide-react";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "Contact — 협업 문의",
    description: "AI 기반 정책 의사결정 시스템, 정책분석·평가 시스템, Policy Methodology Lab 관련 연구 협업, 워크숍, 파일럿 프로젝트 문의.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact — 이석민 | 정책 × AI",
        description: "정책 AI 연구·개발 3축 관련 연구 협업, 워크숍, 파일럿 프로젝트 문의.",
        url: `${SITE_URL}/contact`,
    },
};

export default function ContactPage() {
    return (
        <div className="space-y-16 max-w-2xl mx-auto">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Contact</h1>
                <p className="text-lg text-gray-600">
                    정책 AI 연구·개발 3축과 관련된 협업과 대화를 환영합니다.
                </p>
            </header>

            <section className="grid gap-4">
                {[
                    {
                        axis: "Axis 01",
                        title: "AI 기반 정책 의사결정 시스템",
                        topics: ["SAPD 기반 정책 의사결정 구조 설계", "상태 기반 정책 시스템 프로토타입", "공공 AI 의사결정 구조 검토"],
                    },
                    {
                        axis: "Axis 02",
                        title: "정책분석·평가 시스템",
                        topics: ["인과분석 기반 정책평가 AI agent", "정책 질문의 평가 가능성 진단", "정책평가·성과평가 워크플로우 설계"],
                    },
                    {
                        axis: "Axis 03",
                        title: "Policy Methodology Lab",
                        topics: ["AI 시대 정책연구 방법론 라이브러리", "방법론 카드·루브릭·분석 프로토콜 구축", "연구 세미나, 워크숍, 공동 저술"],
                    },
                ].map((group) => (
                    <div key={group.axis} className="p-4 bg-gray-50 rounded-lg border border-gray-100 space-y-3">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{group.axis}</p>
                            <h2 className="text-base font-bold text-gray-900">{group.title}</h2>
                        </div>
                        <ul className="space-y-2">
                            {group.topics.map((topic) => (
                                <li key={topic} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                                    <span className="text-gray-400 font-bold mt-0.5">-</span>
                                    <span>{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="space-y-4">
                <h2 className="text-base font-bold text-gray-900">기타 협업</h2>
                <ul className="space-y-3">
                    {[
                        "정책문서·회의록 분석 AI 프로토타입",
                        "공공영역 AI의 설명가능성 및 검토 프레임",
                        "공동 연구 및 학술 협업",
                    ].map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="text-gray-400 font-bold mt-0.5">-</span>
                            <span className="text-gray-700 text-sm leading-relaxed">{topic}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="p-8 bg-white border border-gray-200 rounded-xl text-center space-y-4">
                <div className="flex justify-center">
                    <div className="p-3 bg-gray-100 rounded-full">
                        <Mail className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500 mb-2">이석민 · 한신대학교 공공인재빅데이터융합학</p>
                    <a
                        href="mailto:newmind68@hs.ac.kr"
                        className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                        newmind68@hs.ac.kr
                    </a>
                </div>
            </section>
        </div>
    );
}
