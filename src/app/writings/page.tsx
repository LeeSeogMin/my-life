import Link from "next/link";
import { getAllBooks, getAllPublications, getAllConferences } from "@/lib/archive";
import { getAllPosts } from "@/lib/mdx";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export const metadata = {
    title: "글과 연구 — 학술대회·학회지·저서·칼럼",
    description: "이석민의 학술대회 발표, 학회지 논문, 저서, 칼럼 모음. 정책분석, AI, 데이터 기반 공공 의사결정 관련 학술 자료.",
    alternates: {
        canonical: `${SITE_URL}/writings`,
    },
    openGraph: {
        title: "글과 연구 — 이석민 | 정책 × AI",
        description: "학술대회 발표, 학회지 논문, 저서, 칼럼 등 학술 자료 모음.",
        url: `${SITE_URL}/writings`,
    },
};

export default function WritingsPage() {
    const conferences = getAllConferences().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const publications = getAllPublications().sort((a, b) => parseInt(b.year) - parseInt(a.year));
    const books = getAllBooks().sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    const columns = getAllPosts();

    return (
        <div className="space-y-16">
            <header className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">글과 연구</h1>
            </header>

            <nav className="sticky top-[57px] z-[5] -mx-6 px-6 py-3 bg-gray-50/95 backdrop-blur-sm border-b border-gray-200 flex justify-center flex-wrap gap-3">
                <a href="#conferences" className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-900 hover:text-white transition-colors">학술대회</a>
                <a href="#journals" className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-900 hover:text-white transition-colors">학회지</a>
                <a href="#books" className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-900 hover:text-white transition-colors">저서</a>
                <a href="#columns" className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-900 hover:text-white transition-colors">칼럼</a>
            </nav>

            {/* 학술대회 */}
            <section id="conferences" className="space-y-8 scroll-mt-28">
                <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-gray-200 pb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                        학술대회 (Conferences)
                    </span>
                </h2>
                {conferences.length > 0 ? (
                    <div className="space-y-6">
                        {conferences.map(conf => (
                            <article key={conf.id} className="group p-6 border-l-4 border-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{conf.title}</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p className="font-medium text-gray-800">{conf.conference}</p>
                                    <p>발표일: {conf.date} {conf.location && `/ ${conf.location}`}</p>
                                    <p>저자: {conf.author}</p>
                                </div>
                                {conf.description && (
                                    <p className="text-sm text-gray-600 leading-relaxed mt-3">{conf.description}</p>
                                )}
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
                        <p className="text-gray-500 font-medium">학술대회 발표 자료가 준비 중입니다.</p>
                    </div>
                )}
            </section>

            {/* 학회지 */}
            <section id="journals" className="space-y-8 scroll-mt-28">
                <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-gray-200 pb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                        학회지 (Journals)
                    </span>
                </h2>
                {publications.length > 0 ? (
                    <div className="space-y-6">
                        {publications.map(pub => (
                            <article key={pub.id} className="group p-6 border-l-4 border-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                                    <Link href={`/archive/${pub.id}`} className="hover:text-blue-700 transition-colors">
                                        {pub.title}
                                    </Link>
                                </h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p className="font-medium text-gray-800">{pub.journal} {pub.volume_issue ? `(${pub.volume_issue})` : ''}</p>
                                    <p>연도: {pub.year} / 저자: {pub.author}</p>
                                </div>
                                {pub.description && (
                                    <p className="text-sm text-gray-600 leading-relaxed mt-3">{pub.description}</p>
                                )}
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
                        <p className="text-gray-500 font-medium">학회지 논문 목록이 준비 중입니다.</p>
                    </div>
                )}
            </section>

            {/* 저서 */}
            <section id="books" className="space-y-8 scroll-mt-28">
                <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-gray-200 pb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                        저서 (Books)
                    </span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {books.map(book => (
                        <article key={book.id} className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white flex flex-col justify-between">
                            <div className="space-y-2 mb-4">
                                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                    <Link href={`/archive/${book.id}`} className="hover:text-blue-700 transition-colors">
                                        {book.title}
                                    </Link>
                                </h3>
                                {book.subtitle && <p className="text-sm font-medium text-gray-600">{book.subtitle}</p>}
                                {book.description && (
                                    <p className="text-sm text-gray-600 leading-relaxed mt-2">{book.description}</p>
                                )}
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 space-y-1 mb-4">
                                    <p>출판사: {book.publisher}</p>
                                    <p>출판일: {book.publishDate}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Link href={`/archive/${book.id}`} className="text-blue-600 font-medium text-sm hover:underline">
                                        상세 보기 &rarr;
                                    </Link>
                                    {book.url && (
                                        <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 font-medium text-sm hover:underline inline-flex items-center gap-1">
                                            서점에서 보기 &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 칼럼 */}
            <section id="columns" className="space-y-8 scroll-mt-28">
                <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-gray-200 pb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                        칼럼 (Columns)
                    </span>
                </h2>
                {columns.length > 0 ? (
                    <div className="space-y-8 border-l border-gray-200 pl-6">
                        {columns.map((post, index) => (
                            <div key={post.slug} className="relative">
                                <div
                                    className={`absolute top-2 -left-8 w-4 h-4 rounded-full border-2 ${index % 2 === 0
                                        ? 'bg-blue-100 border-blue-500'
                                        : 'bg-gray-100 border-gray-400'
                                    }`}
                                />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    <Link href={`/writings/columns/${post.slug}`} className="hover:text-blue-700 transition-colors">
                                        {post.title}
                                    </Link>
                                </h3>
                                <div className="text-gray-500 text-sm font-mono mb-3">작성일: {post.date}</div>
                                <p className="text-gray-600 font-medium leading-relaxed max-w-2xl mb-4">
                                    {post.description}
                                </p>
                                <Link
                                    href={`/writings/columns/${post.slug}`}
                                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors border-b border-transparent hover:border-blue-800"
                                >
                                    자세히 보기 &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
                        <p className="text-gray-500 font-medium">
                            상태 기반 적응형 정책과 SAPD 프레임워크를 기반으로 한 칼럼이 준비 중입니다.
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}
