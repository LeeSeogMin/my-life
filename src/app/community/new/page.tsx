import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PostForm from '@/components/community/PostForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '새 글 작성',
};

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="space-y-6">
      <Link
        href="/community"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        목록으로
      </Link>
      <h1 className="text-2xl font-bold tracking-tight">새 글 작성</h1>
      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <PostForm defaultCategory={params.category} />
      </div>
    </div>
  );
}
