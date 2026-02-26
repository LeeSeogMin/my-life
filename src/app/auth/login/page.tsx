import LoginForm from '@/components/auth/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="max-w-sm mx-auto py-12">
      <h1 className="text-2xl font-bold tracking-tight text-center mb-8">로그인</h1>
      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <LoginForm redirectTo={params.redirectTo} message={params.message} />
      </div>
    </div>
  );
}
