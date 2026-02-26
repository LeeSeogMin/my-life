import { Suspense } from 'react';
import { createClient } from '@/lib/supabase/server';
import CategoryTabs from '@/components/community/CategoryTabs';
import PostList from '@/components/community/PostList';
import type { PostWithAuthor } from '@/lib/types/database';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '커뮤니티',
};

export default async function CommunityPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category || 'research';

  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  let userRole: string | null = null;
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    userRole = profile?.role || null;
  }

  const { data: posts } = await supabase
    .from('posts_with_author')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">커뮤니티</h1>
        <p className="mt-2 text-gray-500">연구자 간 소통과 수강생 질의응답 공간입니다.</p>
      </div>
      <Suspense fallback={null}>
        <CategoryTabs />
      </Suspense>
      <PostList
        posts={(posts as PostWithAuthor[]) || []}
        userId={user?.id || null}
        userRole={userRole}
      />
    </div>
  );
}
