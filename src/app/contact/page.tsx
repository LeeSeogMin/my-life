import { Mail } from "lucide-react";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "Contact — 협업 문의",
    description: "이석민 교수와의 연구 협업, 정책 AI 프로토타입, 워크숍, 파일럿 프로젝트 문의.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact — 이석민 | 정책 × AI",
        description: "연구 협업, 정책 AI 프로토타입, 워크숍, 파일럿 프로젝트 문의.",
        url: `${SITE_URL}/contact`,
    },
};

export default function ContactPage() {
    return (
        <div className="space-y-16 max-w-2xl mx-auto">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Contact</h1>
                <p className="text-lg text-gray-600">
                    다음과 같은 주제의 협업과 대화를 환영합니다.
                </p>
            </header>

            <section className="space-y-4">
                <ul className="space-y-3">
                    {[
                        "정책문서·회의록 분석 AI 프로토타입",
                        "생성형 AI 기반 정책분석 워크플로우 설계",
                        "공공영역 AI의 설명가능성 및 검토 프레임",
                        "연구 세미나, 소규모 워크숍, 파일럿 프로젝트",
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
