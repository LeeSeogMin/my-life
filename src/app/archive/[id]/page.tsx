import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import {
  getAllArchiveItems,
  getArchiveItemById,
  type ArchiveItem,
} from "@/lib/archive";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export async function generateStaticParams() {
  return getAllArchiveItems().map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getArchiveItemById(id);
  if (!item) return { title: "Not Found" };

  if (item.type === "book") {
    const desc =
      item.description ||
      `${item.title} — ${item.author} (${item.publisher}, ${item.publishDate})`;
    return {
      title: item.title,
      description: desc,
      openGraph: {
        title: `${item.title} — 이석민 | 정책 × AI`,
        description: desc,
        type: "book" as const,
        url: `${SITE_URL}/archive/${item.id}`,
      },
      alternates: { canonical: `${SITE_URL}/archive/${item.id}` },
    };
  }

  if (item.type === "publication") {
    const desc =
      item.description || `${item.title} — ${item.journal} (${item.year})`;
    return {
      title: item.title,
      description: desc,
      openGraph: {
        title: `${item.title} — 이석민 | 정책 × AI`,
        description: desc,
        type: "article",
        url: `${SITE_URL}/archive/${item.id}`,
      },
      alternates: { canonical: `${SITE_URL}/archive/${item.id}` },
    };
  }

  // conference
  const desc =
    item.description || `${item.title} — ${item.conference} (${item.date})`;
  return {
    title: item.title,
    description: desc,
    openGraph: {
      title: `${item.title} — 이석민 | 정책 × AI`,
      description: desc,
      type: "article",
      url: `${SITE_URL}/archive/${item.id}`,
    },
    alternates: { canonical: `${SITE_URL}/archive/${item.id}` },
  };
}

function buildJsonLd(item: ArchiveItem) {
  const personRef = { "@type": "Person", name: "이석민", "@id": `${SITE_URL}/#person` };

  if (item.type === "book") {
    return {
      "@context": "https://schema.org",
      "@type": "Book",
      name: item.title,
      author: personRef,
      publisher: { "@type": "Organization", name: item.publisher },
      datePublished: item.publishDate,
      description: item.description,
      inLanguage: "ko",
      url: `${SITE_URL}/archive/${item.id}`,
    };
  }

  if (item.type === "publication") {
    return {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: item.title,
      author: personRef,
      isPartOf: { "@type": "Periodical", name: item.journal },
      ...(item.volume_issue && { volumeNumber: item.volume_issue }),
      datePublished: item.year,
      description: item.description,
      inLanguage: "ko",
      url: `${SITE_URL}/archive/${item.id}`,
    };
  }

  // conference
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: item.title,
    author: personRef,
    isPartOf: { "@type": "Event", name: item.conference },
    datePublished: item.date,
    description: item.description,
    inLanguage: "ko",
    url: `${SITE_URL}/archive/${item.id}`,
  };
}

export default async function ArchiveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getArchiveItemById(id);
  if (!item) notFound();

  const jsonLd = buildJsonLd(item);

  return (
    <article className="space-y-10 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/writings"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        글과 연구로 돌아가기
      </Link>

      <header className="space-y-4 border-b border-gray-200 pb-8">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-gray-900 text-white">
          {item.type === "book" ? "저서" : item.type === "publication" ? "논문" : "학술대회"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
          {item.title}
        </h1>
        {item.type === "book" && item.subtitle && (
          <p className="text-xl text-gray-600 font-light">{item.subtitle}</p>
        )}
      </header>

      {item.type === "book" && (
        <div className="space-y-6">
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <dt className="font-semibold text-gray-500">저자</dt>
            <dd className="text-gray-900">{item.author}</dd>
            <dt className="font-semibold text-gray-500">출판사</dt>
            <dd className="text-gray-900">{item.publisher}</dd>
            <dt className="font-semibold text-gray-500">출판일</dt>
            <dd className="text-gray-900">{item.publishDate}</dd>
          </dl>
          {item.description && (
            <div className="prose prose-gray max-w-none">
              <p>{item.description}</p>
            </div>
          )}
          {item.tableOfContents && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">목차</h2>
              <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {item.tableOfContents.split("\n").map((line, i) => {
                  const isChapter = line.startsWith("제") && (line.includes("장") || line.includes("부") || line.includes("편"));
                  return (
                    <p key={i} className={isChapter ? "font-semibold text-gray-900 mt-3" : "pl-4 text-gray-600"}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </section>
          )}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              서점에서 보기
            </a>
          )}
        </div>
      )}

      {item.type === "publication" && (
        <div className="space-y-6">
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <dt className="font-semibold text-gray-500">저자</dt>
            <dd className="text-gray-900">{item.author}</dd>
            <dt className="font-semibold text-gray-500">학술지</dt>
            <dd className="text-gray-900">{item.journal}</dd>
            {item.volume_issue && (
              <>
                <dt className="font-semibold text-gray-500">권호</dt>
                <dd className="text-gray-900">{item.volume_issue}</dd>
              </>
            )}
            <dt className="font-semibold text-gray-500">연도</dt>
            <dd className="text-gray-900">{item.year}</dd>
          </dl>
          {item.description && (
            <div className="prose prose-gray max-w-none">
              <p>{item.description}</p>
            </div>
          )}
          {item.abstract && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">초록 (Abstract)</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{item.abstract}</p>
            </section>
          )}
          {item.filename && (
            <a
              href={`/journal/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              PDF 보기
            </a>
          )}
        </div>
      )}

      {item.type === "conference" && (
        <div className="space-y-6">
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <dt className="font-semibold text-gray-500">저자</dt>
            <dd className="text-gray-900">{item.author}</dd>
            <dt className="font-semibold text-gray-500">학술대회</dt>
            <dd className="text-gray-900">{item.conference}</dd>
            <dt className="font-semibold text-gray-500">발표일</dt>
            <dd className="text-gray-900">{item.date}</dd>
            {item.location && (
              <>
                <dt className="font-semibold text-gray-500">장소</dt>
                <dd className="text-gray-900">{item.location}</dd>
              </>
            )}
          </dl>
          {item.description && (
            <div className="prose prose-gray max-w-none">
              <p>{item.description}</p>
            </div>
          )}
        </div>
      )}

      {/* 관련 콘텐츠 교차 링크 */}
      <nav className="border-t border-gray-200 pt-8 space-y-4">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">관련 콘텐츠</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/research" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
            연구 프로젝트
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/writings" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
            글과 연구
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/framework" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
            SAPD Framework
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>
    </article>
  );
}
