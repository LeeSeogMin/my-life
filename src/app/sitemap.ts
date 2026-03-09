import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { getAllBooks, getAllPublications } from "@/lib/archive";

const SITE_URL = "https://my-life-six-pi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/framework`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/archive`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/lectures`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 동적 칼럼 페이지
  const posts = getAllPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 개별 아카이브 항목 페이지
  const books = getAllBooks();
  const publications = getAllPublications();

  const archivePages: MetadataRoute.Sitemap = [
    ...books.map((book) => ({
      url: `${SITE_URL}/archive/${book.id}`,
      lastModified: new Date(book.publishDate),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...publications.map((pub) => ({
      url: `${SITE_URL}/archive/${pub.id}`,
      lastModified: new Date(`${pub.year}-01-01`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...postPages, ...archivePages];
}
