import SignupForm from '@/components/auth/SignupForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
};

export default function SignupPage() {
  return (
    <div className="max-w-sm mx-auto py-12">
      <h1 className="text-2xl font-bold tracking-tight text-center mb-8">회원가입</h1>
      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <SignupForm />
      </div>
    </div>
  );
}
