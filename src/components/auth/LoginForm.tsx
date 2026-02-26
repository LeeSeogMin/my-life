'use client';

import { useState } from 'react';
import { login } from '@/lib/actions/auth';
import Link from 'next/link';

export default function LoginForm({ redirectTo, message }: { redirectTo?: string; message?: string }) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    if (redirectTo) {
      formData.append('redirectTo', redirectTo);
    }
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {message && (
        <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">{message}</p>
      )}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="email@example.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          비밀번호
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="6자 이상"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        {loading ? '로그인 중...' : '로그인'}
      </button>
      <p className="text-center text-sm text-gray-500">
        계정이 없으신가요?{' '}
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          회원가입
        </Link>
      </p>
    </form>
  );
}
