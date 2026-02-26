'use client';

import { useState } from 'react';
import { createPost } from '@/lib/actions/posts';
import { Lock } from 'lucide-react';

export default function PostForm({ defaultCategory }: { defaultCategory?: string }) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await createPost(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
      )}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          카테고리
        </label>
        <select
          id="category"
          name="category"
          defaultValue={defaultCategory || 'research'}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="research">연구</option>
          <option value="lectures">강의</option>
        </select>
      </div>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          제목
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          내용
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={12}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
          placeholder="내용을 입력하세요"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          id="isSecret"
          name="isSecret"
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300"
        />
        <label htmlFor="isSecret" className="flex items-center gap-1.5 text-sm text-gray-600">
          <Lock className="w-4 h-4" />
          비밀글
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        {loading ? '등록 중...' : '등록'}
      </button>
    </form>
  );
}
