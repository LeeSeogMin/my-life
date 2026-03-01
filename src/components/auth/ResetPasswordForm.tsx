'use client';

import { useState } from 'react';
import { resetPassword } from '@/lib/actions/auth';
import Link from 'next/link';

export default function ResetPasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await resetPassword(formData);
    if (result?.error) {
      setError(result.error);
    } else if (result?.success) {
      setSuccess(true);
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
          비밀번호 재설정 링크를 이메일로 보냈습니다. 이메일을 확인해주세요.
        </p>
        <p className="text-center text-sm text-gray-500">
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            로그인으로 돌아가기
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
      )}
      <p className="text-sm text-gray-600">
        가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다.
      </p>
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
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        {loading ? '전송 중...' : '재설정 링크 보내기'}
      </button>
      <p className="text-center text-sm text-gray-500">
        비밀번호가 기억나셨나요?{' '}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          로그인
        </Link>
      </p>
    </form>
  );
}
