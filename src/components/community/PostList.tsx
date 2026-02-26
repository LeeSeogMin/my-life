import Link from 'next/link';
import { Plus, Lock } from 'lucide-react';
import type { PostWithAuthor } from '@/lib/types/database';

interface PostListProps {
  posts: PostWithAuthor[];
  userId: string | null;
  userRole: string | null;
}

export default function PostList({ posts, userId, userRole }: PostListProps) {
  return (
    <div className="space-y-4">
      {/* 게시글 테이블 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* 테이블 헤더 */}
        <div className="hidden sm:grid grid-cols-[1fr_100px_100px] gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs text-gray-500 font-medium">
          <span>제목</span>
          <span className="text-center">작성자</span>
          <span className="text-center">작성일</span>
        </div>

        {posts.length === 0 ? (
          <div className="px-6 py-16 text-center text-gray-400 text-sm">
            아직 게시글이 없습니다.
          </div>
        ) : (
          posts.map((post, index) => {
            const date = new Date(post.created_at).toLocaleDateString('ko-KR');
            const isSecret = post.is_secret;
            const canView = !isSecret || post.author_id === userId || userRole === 'admin';

            if (isSecret && !canView) {
              return (
                <div
                  key={post.id}
                  className={`grid sm:grid-cols-[1fr_100px_100px] gap-2 sm:gap-4 px-6 py-4 ${
                    index < posts.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <Lock className="w-3.5 h-3.5" />
                    비밀글입니다
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 sm:text-center">{post.author_name}</span>
                  <span className="text-xs sm:text-sm text-gray-400 sm:text-center">{date}</span>
                </div>
              );
            }

            return (
              <Link
                key={post.id}
                href={`/community/${post.id}`}
                className={`grid sm:grid-cols-[1fr_100px_100px] gap-2 sm:gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ${
                  index < posts.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="text-sm text-gray-900 font-medium flex items-center gap-2">
                  {isSecret && <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                  <span className="truncate">{post.title}</span>
                  {post.author_role === 'admin' && (
                    <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-semibold shrink-0">관리자</span>
                  )}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 sm:text-center">{post.author_name}</span>
                <span className="text-xs sm:text-sm text-gray-500 sm:text-center">{date}</span>
              </Link>
            );
          })
        )}
      </div>

      {/* 글쓰기 버튼 */}
      {userId && (
        <div className="flex justify-end">
          <Link
            href="/community/new"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            글쓰기
          </Link>
        </div>
      )}
    </div>
  );
}
