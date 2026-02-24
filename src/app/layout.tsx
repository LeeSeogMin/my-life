import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PSDS - 공공 전략 및 의사결정 시스템",
  description: "전략, 정책, 데이터, 평가, 그리고 AI를 통합하는 공공 의사결정 시스템의 연구 및 설계",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col`}>
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-600 transition-colors">
              Decision Systems Lab
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">Main</Link>
              <Link href="/framework" className="hover:text-black transition-colors">PSDS</Link>
              <Link href="/research" className="hover:text-black transition-colors">연구</Link>
              <Link href="/writing" className="hover:text-black transition-colors">칼럼</Link>
              <Link href="/archive" className="hover:text-black transition-colors">아카이브</Link>
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
            <p className="mt-2">공공 전략 및 정책 의사결정 시스템 연구자 (한신대학교 공공인재빅데이터융합학부)</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
