import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  try {
    if (code) {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        return NextResponse.redirect(`${origin}/auth/reset-password/update`);
      }
    }
  } catch {
    // Fall through to error redirect
  }

  return NextResponse.redirect(`${origin}/auth/login?message=인증 링크가 만료되었습니다. 다시 시도해주세요.`);
}
