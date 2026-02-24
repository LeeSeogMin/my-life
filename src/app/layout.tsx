import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://my-life-six-pi.vercel.app";
const SITE_NAME = "이석민 | 정책 × AI";
const SITE_DESCRIPTION =
  "이석민 — 한신대학교 공공인재빅데이터융합학부 교수. 정책 기획·분석·평가, AI·딥러닝 응용, 데이터 분석, 공공 의사결정 시스템 연구 및 개발.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "이석민 | 정책 × AI — 한신대학교",
    template: "%s | 이석민 · 정책 × AI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "이석민",
    "한신대학교",
    "공공인재빅데이터융합학부",
    "정책분석",
    "정책평가",
    "정책기획",
    "AI",
    "인공지능",
    "딥러닝",
    "NLP",
    "데이터분석",
    "공공정책",
    "의사결정시스템",
    "빅데이터",
    "geoAI",
    "LLMOps",
    "웹개발",
    "정책 자문",
    "Seog-Min Lee",
  ],
  authors: [{ name: "이석민 (Seog-Min Lee)", url: SITE_URL }],
  creator: "이석민",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "이석민 | 정책 × AI — 한신대학교 공공인재빅데이터융합학부",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "이석민 | 정책 × AI",
    description: SITE_DESCRIPTION,
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
      email: "newmind68@hs.ac.kr",
      jobTitle: "교수",
      worksFor: {
        "@type": "Organization",
        name: "한신대학교 공공인재빅데이터융합학부",
        url: "https://www.hs.ac.kr",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "서울대학교",
      },
      knowsAbout: [
        "정책분석",
        "정책평가",
        "정책기획",
        "인공지능",
        "딥러닝",
        "자연어처리(NLP)",
        "데이터분석",
        "빅데이터",
        "공공 의사결정 시스템",
        "geoAI",
        "LLMOps",
        "웹 개발",
      ],
      description:
        "정책학·행정학의 이론적 기반 위에 데이터 분석, 딥러닝, AI 시스템 개발 역량을 결합하여 공공 정책의 기획부터 평가까지 전 과정을 연구하고 구현하는 연구자.",
      sameAs: [],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "이석민 | 정책 × AI",
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
              이석민 | 정책 × AI
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">Main</Link>
              <Link href="/framework" className="hover:text-black transition-colors">PSDS</Link>
              <Link href="/research" className="hover:text-black transition-colors">연구</Link>
              <Link href="/writing" className="hover:text-black transition-colors">칼럼</Link>
              <Link href="/archive" className="hover:text-black transition-colors">저서/논문</Link>
              <Link href="/lectures" className="hover:text-black transition-colors">강의</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-white py-10 mt-auto">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Seog-Min Lee. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              공공 전략 및 정책 의사결정 시스템 연구자 (한신대학교 공공인재빅데이터융합학부) |{' '}
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
