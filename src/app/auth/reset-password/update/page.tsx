import UpdatePasswordForm from '@/components/auth/UpdatePasswordForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비밀번호 재설정',
};

export default function UpdatePasswordPage() {
  return (
    <div className="max-w-sm mx-auto py-12">
      <h1 className="text-2xl font-bold tracking-tight text-center mb-8">비밀번호 재설정</h1>
      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <UpdatePasswordForm />
      </div>
    </div>
  );
}
