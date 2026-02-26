'use client';

import { useState } from 'react';
import { Trash2, Reply } from 'lucide-react';
import { deleteComment, createComment } from '@/lib/actions/comments';
import type { CommentWithAuthor } from '@/lib/types/database';

interface CommentItemProps {
  comment: CommentWithAuthor;
  postId: string;
  userId: string | null;
  userRole: string | null;
  replies: CommentWithAuthor[];
  depth?: number;
}

export default function CommentItem({ comment, postId, userId, userRole, replies, depth = 0 }: CommentItemProps) {
  const [showReply, setShowReply] = useState(false);
  const [replyLoading, setReplyLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const canDelete = userId === comment.author_id || userRole === 'admin';
  const date = new Date(comment.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  async function handleDelete() {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;
    setDeleteLoading(true);
    await deleteComment(comment.id, postId);
    setDeleteLoading(false);
  }

  async function handleReply(formData: FormData) {
    setReplyLoading(true);
    formData.append('postId', postId);
    formData.append('parentId', comment.id);
    await createComment(formData);
    setReplyLoading(false);
    setShowReply(false);
  }

  return (
    <div className={depth > 0 ? 'ml-6' : ''}>
      <div className="py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-gray-700">{comment.author_name}</span>
          {comment.author_role === 'admin' && (
            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-semibold">관리자</span>
          )}
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <p className="text-sm text-gray-700 whitespace-pre-wrap">{comment.content}</p>
        <div className="mt-2 flex items-center gap-3">
          {userId && depth === 0 && (
            <button
              onClick={() => setShowReply(!showReply)}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Reply className="w-3.5 h-3.5" />
              답글
            </button>
          )}
          {canDelete && (
            <button
              onClick={handleDelete}
              disabled={deleteLoading}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              삭제
            </button>
          )}
        </div>
        {showReply && (
          <form action={handleReply} className="mt-3 flex gap-2">
            <input
              name="content"
              required
              placeholder="답글을 입력하세요"
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={replyLoading}
              className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {replyLoading ? '...' : '등록'}
            </button>
          </form>
        )}
      </div>
      {replies.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          postId={postId}
          userId={userId}
          userRole={userRole}
          replies={[]}
          depth={depth + 1}
        />
      ))}
    </div>
  );
}
