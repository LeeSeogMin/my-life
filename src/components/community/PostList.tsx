import Link from 'next/link';
import { Plus } from 'lucide-react';
import PostCard from './PostCard';
import type { PostWithAuthor } from '@/lib/types/database';

interface PostListProps {
  posts: PostWithAuthor[];
  userId: string | null;
  userRole: string | null;
}

export default function PostList({ posts, userId, userRole }: PostListProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        {userId && (
          <Link
            href="/community/new"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            글쓰기
          </Link>
        )}
      </div>
      {posts.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          아직 게시글이 없습니다.
        </div>
      ) : (
        <div className="space-y-2">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              canView={
                !post.is_secret ||
                post.author_id === userId ||
                userRole === 'admin'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
