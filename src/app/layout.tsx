import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import AuthButton from "@/components/auth/AuthButton";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://my-life-six-pi.vercel.app";
const SITE_NAME = "이석민 교수 | 한신대학교";
const SITE_DESCRIPTION =
  "이석민 교수 — 한신대학교 공공인재빅데이터융합학과. AI 기반 정책 의사결정 시스템, 정책분석·평가 시스템, Policy Methodology Lab을 연결하여 공공영역에서 신뢰 가능한 정책 AI를 연구합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "이석민 교수 | 한신대학교 공공인재빅데이터융합학 — 정책 × AI",
    template: "%s | 이석민 교수 · 한신대학교",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "이석민",
    "한신대학교",
    "공공인재빅데이터융합학",
    "정책 기획",
    "정책분석",
    "정책평가",
    "전략기획",
    "데이터사이언스",
    "인과추론",
    "예측 모델링",
    "정책분석용 생성형 AI",
    "공공 AI 설계",
    "공공 AI 검토",
    "정책 AI 설명가능성",
    "정책문서 분석 AI",
    "회의록 분석",
    "공공 AI 평가 프레임워크",
    "정책분석·평가 시스템",
    "Policy Methodology Lab",
    "SAPD framework",
    "상태 기반 적응형 정책",
    "Seog-Min Lee",
    "policy analysis",
    "strategic planning",
    "causal data science",
    "AI policy research",
    "policy AI design",
    "explainable AI for public policy",
    "adaptive policy design",
  ],
  authors: [{ name: "이석민 (Seog-Min Lee)", url: SITE_URL }],
  creator: "이석민",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "이석민 교수 | 한신대학교 공공인재빅데이터융합학 — 정책 × AI 연구",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "이석민 교수 — 한신대학교 공공인재빅데이터융합학, 정책 × AI 연구",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이석민 교수 | 한신대학교 — 정책 × AI",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "nfUKLFcz6yx8TR90vLjn4kBUEqaYHS-dxhWjAYHvBLA",
  },
};

// JSON-LD 구조화된 데이터 — Person + ProfilePage 스키마
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "이석민",
      alternateName: "Seog-Min Lee",
      url: SITE_URL,
      image: `${SITE_URL}/profile.jpg`,
      email: "newmind68@hs.ac.kr",
      jobTitle: "교수",
      worksFor: {
        "@type": "Organization",
        name: "한신대학교 공공인재빅데이터융합학과",
        url: "https://www.hs.ac.kr/kor/10504/subview.do?enc=Zm5jdDF8QEB8JTJGaHNQcm9mJTJGa29yJTJGMzE1JTJGMjAyMDAwMzQlMkZhcnRjbFZpZXcuZG8lM0Y%3D",
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "한신대학교",
          url: "https://www.hs.ac.kr",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "서울대학교",
      },
      knowsAbout: [
        "정책 기획·분석·평가",
        "데이터사이언스",
        "인과추론",
        "예측 모델링",
        "정책분석용 생성형 AI 설계",
        "정책분석·평가 시스템",
        "Policy Methodology Lab",
        "공공 AI 설명가능성",
        "공공 AI 검토·평가",
        "정책문서·회의록 분석",
        "정책 쟁점 구조화",
        "SAPD Framework",
      ],
      description:
        "정책 기획·분석·평가와 데이터사이언스·인과추론을 기반으로, AI 기반 정책 의사결정 시스템, 정책분석·평가 시스템, Policy Methodology Lab을 연구하는 융합 연구자.",
      sameAs: [
        "https://scholar.google.com/citations?user=P1uz0l8AAAAJ&hl=ko",
        "https://orcid.org/0009-0009-0754-8523",
        "https://www.researchgate.net/profile/Seog-Min-Lee",
        "https://app.rndcircle.io/lab/a5671ecb-4a41-4135-8d4d-9084bec8dca5",
        "https://www.hs.ac.kr/kor/10504/subview.do?enc=Zm5jdDF8QEB8JTJGaHNQcm9mJTJGa29yJTJGMzE1JTJGMjAyMDAwMzQlMkZhcnRjbFZpZXcuZG8lM0Y%3D",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "이석민 교수 | 한신대학교 — 정책 × AI",
      description: SITE_DESCRIPTION,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "ko-KR",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-600 transition-colors">
              이석민 교수 | 한신대학교
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6 text-base font-semibold text-gray-700">
                <Link href="/" className="hover:text-black transition-colors">홈</Link>
                <Link href="/framework" className="hover:text-black transition-colors">Framework</Link>
                <Link href="/projects" className="hover:text-black transition-colors">프로젝트</Link>
                <Link href="/writings" className="hover:text-black transition-colors">글과 연구</Link>
                <Link href="/about" className="hover:text-black transition-colors">About</Link>
                <Link href="/community" className="hover:text-black transition-colors">커뮤니티</Link>
              </nav>
              <AuthButton />
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-white py-10 mt-auto">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
            <nav className="flex justify-center gap-6 mb-4 text-gray-400">
              <Link href="/research" className="hover:text-gray-600 transition-colors">연구</Link>
              <Link href="/writings" className="hover:text-gray-600 transition-colors">글과 연구</Link>
              <Link href="/lectures" className="hover:text-gray-600 transition-colors">강의</Link>
              <Link href="/community" className="hover:text-gray-600 transition-colors">커뮤니티</Link>
            </nav>
            <p>© {new Date().getFullYear()} Seog-Min Lee. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              한신대학교 공공인재빅데이터융합학 |{' '}
              <a href="mailto:newmind68@hs.ac.kr" className="hover:text-blue-600 transition-colors">
                newmind68@hs.ac.kr
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
