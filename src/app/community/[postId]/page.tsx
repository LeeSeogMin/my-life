import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Lock, Trash2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { deletePost } from '@/lib/actions/posts';
import CommentSection from '@/components/community/CommentSection';
import type { PostWithAuthor, CommentWithAuthor } from '@/lib/types/database';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}): Promise<Metadata> {
  const { postId } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from('posts_with_author')
    .select('title')
    .eq('id', postId)
    .single();

  return {
    title: post?.title || '게시글',
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  let userRole: string | null = null;
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    userRole = profile?.role || null;
  }

  const { data: post } = await supabase
    .from('posts_with_author')
    .select('*')
    .eq('id', postId)
    .single();

  if (!post) {
    notFound();
  }

  const typedPost = post as PostWithAuthor;

  const { data: comments } = await supabase
    .from('comments')
    .select('*, profiles:author_id(display_name, role)')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  const commentsWithAuthor: CommentWithAuthor[] = (comments || []).map((c: Record<string, unknown>) => ({
    id: c.id as string,
    content: c.content as string,
    post_id: c.post_id as string,
    author_id: c.author_id as string,
    parent_id: c.parent_id as string | null,
    created_at: c.created_at as string,
    updated_at: c.updated_at as string,
    author_name: (c.profiles as Record<string, string>)?.display_name || '알 수 없음',
    author_role: (c.profiles as Record<string, string>)?.role || 'user',
  }));

  const canDelete = user?.id === typedPost.author_id || userRole === 'admin';
  const categoryLabel = typedPost.category === 'research' ? '연구' : '강의';
  const date = new Date(typedPost.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const deleteWithId = deletePost.bind(null, postId);

  return (
    <div className="space-y-8">
      <Link
        href={`/community?category=${typedPost.category}`}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        목록으로
      </Link>

      <article className="p-6 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-xs font-semibold rounded bg-gray-100 text-gray-600">
                {categoryLabel}
              </span>
              {typedPost.is_secret && (
                <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded bg-yellow-50 text-yellow-700">
                  <Lock className="w-3 h-3" />
                  비밀글
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold tracking-tight">{typedPost.title}</h1>
            <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
              <span className="font-medium">{typedPost.author_name}</span>
              {typedPost.author_role === 'admin' && (
                <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-semibold">관리자</span>
              )}
              <span>{date}</span>
            </div>
          </div>
          {canDelete && (
            <form action={deleteWithId}>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                삭제
              </button>
            </form>
          )}
        </div>
        <div className="prose prose-gray max-w-none whitespace-pre-wrap">
          {typedPost.content}
        </div>
      </article>

      <CommentSection
        comments={commentsWithAuthor}
        postId={postId}
        userId={user?.id || null}
        userRole={userRole}
      />
    </div>
  );
}
