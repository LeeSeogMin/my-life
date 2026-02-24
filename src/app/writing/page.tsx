import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
    title: "Writing - PSDS",
};

export default function WritingPage() {
    const posts = getAllPosts();

    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">칼럼 및 인사이트 (Column & Insight)</h1>
                <p className="text-xl text-gray-600 font-light max-w-2xl">
                    PSDS 프레임워크를 기반으로 한 공공 의사결정 시스템의 개념적 확장, 아키텍처 분석, 에세이 모음입니다.
                </p>
            </header>

            {posts.length > 0 ? (
                <section className="space-y-8 border-l border-gray-200 pl-6">
                    {posts.map((post, index) => (
                        <div key={post.slug} className="relative">
                            <div
                                className={`absolute top-2 -left-8 w-4 h-4 rounded-full border-2 ${index % 2 === 0
                                    ? 'bg-blue-100 border-blue-500'
                                    : 'bg-gray-100 border-gray-400'
                                    }`}
                            />
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                <Link href={`/writing/${post.slug}`} className="hover:text-blue-700 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="text-gray-500 text-sm font-mono mb-3">작성일: {post.date}</div>
                            <p className="text-gray-600 font-medium leading-relaxed max-w-2xl mb-4">
                                {post.description}
                            </p>
                            <Link
                                href={`/writing/${post.slug}`}
                                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors border-b border-transparent hover:border-blue-800"
                            >
                                자세히 보기 &rarr;
                            </Link>
                        </div>
                    ))}
                </section>
            ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-md p-6 my-10 text-center">
                    <p className="text-gray-500 font-medium">분석적이고 개념적인 학술 에세이들이 이곳에 지속적으로 게시될 예정입니다.</p>
                </div>
            )}
        </div>
    );
}
