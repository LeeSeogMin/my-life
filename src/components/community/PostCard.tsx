import Link from 'next/link';
import { Lock, MessageCircle } from 'lucide-react';
import type { PostWithAuthor } from '@/lib/types/database';

export default function PostCard({ post, canView }: { post: PostWithAuthor; canView: boolean }) {
  const date = new Date(post.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  if (post.is_secret && !canView) {
    return (
      <div className="p-5 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center gap-2 text-gray-400">
          <Lock className="w-4 h-4" />
          <span className="font-medium">비밀글입니다</span>
        </div>
        <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
          <span>{post.author_name}</span>
          <span>{date}</span>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/community/${post.id}`}>
      <div className="p-5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {post.is_secret && <Lock className="w-4 h-4 text-gray-400 shrink-0" />}
              <h3 className="font-semibold text-gray-900 truncate">{post.title}</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 line-clamp-1">{post.content}</p>
          </div>
          {post.comment_count > 0 && (
            <div className="flex items-center gap-1 text-sm text-gray-400 shrink-0">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comment_count}</span>
            </div>
          )}
        </div>
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
          <span className="font-medium text-gray-500">{post.author_name}</span>
          {post.author_role === 'admin' && (
            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-semibold">관리자</span>
          )}
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}
