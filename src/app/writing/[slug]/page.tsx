import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params, searchParams }: Props) {
    // Access params and searchParams properly using await 
    // Next 15 requires params and searchParams to be treated as async
    const slug = (await params)?.slug;
    if (!slug) return { title: "Not Found" };
    const post = getPostBySlug(slug);
    if (!post) return { title: "Not Found" };

    return {
        title: post.meta.title,
        description: post.meta.description || `이석민의 칼럼: ${post.meta.title}`,
        openGraph: {
            title: `${post.meta.title} — 이석민 | 정책 × AI`,
            description: post.meta.description || `이석민의 칼럼: ${post.meta.title}`,
            type: "article",
        },
    };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
    const slug = (await params)?.slug;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="space-y-12 max-w-3xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/writing"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    목록으로 돌아가기
                </Link>
                <header className="space-y-4 border-b border-gray-200 pb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        {post.meta.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
                        <time>{post.meta.date}</time>
                    </div>
                    {post.meta.description && (
                        <p className="text-xl text-gray-600 font-light mt-4">
                            {post.meta.description}
                        </p>
                    )}
                </header>
            </div>

            <div className="prose prose-gray prose-base max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-md">
                <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>
        </article>
    );
}
