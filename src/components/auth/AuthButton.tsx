import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { logout } from '@/lib/actions/auth';

export default async function AuthButton() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <Link
        href="/auth/login"
        className="text-sm px-4 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
      >
        로그인
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 hidden sm:inline">
        {user.user_metadata?.display_name || user.email?.split('@')[0]}
      </span>
      <form action={logout}>
        <button
          type="submit"
          className="text-sm px-4 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
        >
          로그아웃
        </button>
      </form>
    </div>
  );
}
