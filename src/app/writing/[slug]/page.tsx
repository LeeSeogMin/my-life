import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

interface Props {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params, searchParams }: Props) {
    const slug = (await params)?.slug;
    if (!slug) return { title: "Not Found" };
    const post = getPostBySlug(slug);
    if (!post) return { title: "Not Found" };

    const canonicalUrl = `${SITE_URL}/writing/${slug}`;

    return {
        title: post.meta.title,
        description: post.meta.description || `이석민의 칼럼: ${post.meta.title}`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${post.meta.title} — 이석민 | 정책 × AI`,
            description: post.meta.description || `이석민의 칼럼: ${post.meta.title}`,
            type: "article",
            url: canonicalUrl,
            publishedTime: post.meta.date,
            authors: ["이석민"],
        },
    };
}

function buildJsonLd(post: { meta: { title: string; date: string; description: string; slug: string }; content: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.meta.title,
        description: post.meta.description || `이석민의 칼럼: ${post.meta.title}`,
        datePublished: post.meta.date,
        dateModified: post.meta.date,
        url: `${SITE_URL}/writing/${post.meta.slug}`,
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "ko-KR",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/writing/${post.meta.slug}`,
        },
    };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
    const slug = (await params)?.slug;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = buildJsonLd(post);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                            <time dateTime={post.meta.date}>{post.meta.date}</time>
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
        </>
    );
}
