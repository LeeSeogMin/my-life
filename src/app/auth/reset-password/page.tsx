import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비밀번호 찾기',
};

export default function ResetPasswordPage() {
  return (
    <div className="max-w-sm mx-auto py-12">
      <h1 className="text-2xl font-bold tracking-tight text-center mb-8">비밀번호 찾기</h1>
      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
