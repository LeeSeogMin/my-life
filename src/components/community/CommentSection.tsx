'use client';

import { useState } from 'react';
import { createComment } from '@/lib/actions/comments';
import CommentItem from './CommentItem';
import type { CommentWithAuthor } from '@/lib/types/database';

interface CommentSectionProps {
  comments: CommentWithAuthor[];
  postId: string;
  userId: string | null;
  userRole: string | null;
}

export default function CommentSection({ comments, postId, userId, userRole }: CommentSectionProps) {
  const [loading, setLoading] = useState(false);

  const topLevel = comments.filter((c) => !c.parent_id);
  const repliesMap = comments.reduce<Record<string, CommentWithAuthor[]>>((acc, c) => {
    if (c.parent_id) {
      if (!acc[c.parent_id]) acc[c.parent_id] = [];
      acc[c.parent_id].push(c);
    }
    return acc;
  }, {});

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    formData.append('postId', postId);
    await createComment(formData);
    setLoading(false);
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">댓글 {comments.length}개</h2>
      {userId && (
        <form action={handleSubmit} className="mb-6 flex gap-2">
          <input
            name="content"
            required
            placeholder="댓글을 입력하세요"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {loading ? '...' : '등록'}
          </button>
        </form>
      )}
      {!userId && (
        <p className="mb-6 text-sm text-gray-400">댓글을 작성하려면 로그인이 필요합니다.</p>
      )}
      <div>
        {topLevel.length === 0 ? (
          <p className="py-8 text-center text-gray-400 text-sm">아직 댓글이 없습니다.</p>
        ) : (
          topLevel.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              postId={postId}
              userId={userId}
              userRole={userRole}
              replies={repliesMap[comment.id] || []}
            />
          ))
        )}
      </div>
    </div>
  );
}
