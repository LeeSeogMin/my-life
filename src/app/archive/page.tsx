import fs from 'fs';
import path from 'path';

export const metadata = {
    title: "저서/논문 - PSDS",
};

interface Book {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    publisher: string;
    publishDate: string;
    url: string;
}

interface Publication {
    id: string;
    title: string;
    author: string;
    journal: string;
    volume_issue: string;
    year: string;
    filename: string;
}

export default async function ArchivePage() {
    const booksPath = path.join(process.cwd(), 'data', 'books.json');
    const pubsPath = path.join(process.cwd(), 'data', 'publications.json');

    const booksData: Book[] = fs.existsSync(booksPath) ? JSON.parse(fs.readFileSync(booksPath, 'utf-8')) : [];
    const pubsData: Publication[] = fs.existsSync(pubsPath) ? JSON.parse(fs.readFileSync(pubsPath, 'utf-8')) : [];

    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">저서 및 논문 (Publications)</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    PSDS 프레임워크를 뒷받침하는 지적 자산이자 경험적 근거인<br className="hidden sm:block" />
                    주요 저서 및 학술 논문 목록입니다.
                </p>
            </header>

            <section className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-gray-200 pb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                        저서 및 단행본 (Books & Monographs)
                    </span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {booksData.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).map(book => (
                        <article key={book.id} className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white flex flex-col justify-between">
                            <div className="space-y-2 mb-4">
                                <h3 className="text-lg font-bold text-gray-900 leading-snug">{book.title}</h3>
                                {book.subtitle && <p className="text-sm font-medium text-gray-600">{book.subtitle}</p>}
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 space-y-1 mb-4">
                                    <p>출판사: {book.publisher}</p>
                                    <p>출판일: {book.publishDate}</p>
                                </div>
                                <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
                                    교보문고에서 보기 &rarr;
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-gray-200 pb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md tracking-wider uppercase">
                        연구 논문 (Academic Publications)
                    </span>
                </h2>
                <div className="space-y-6">
                    {pubsData.sort((a, b) => parseInt(b.year) - parseInt(a.year)).map(pub => (
                        <article key={pub.id} className="group p-6 border-l-4 border-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{pub.title}</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p className="font-medium text-gray-800">{pub.journal} {pub.volume_issue ? `(${pub.volume_issue})` : ''}</p>
                                <p>연도: {pub.year} / 저자: {pub.author}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
