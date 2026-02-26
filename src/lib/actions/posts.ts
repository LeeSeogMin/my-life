'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function createPost(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: '로그인이 필요합니다.' };
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const isSecret = formData.get('isSecret') === 'on';

  const { error } = await supabase.from('posts').insert({
    title,
    content,
    category,
    is_secret: isSecret,
    author_id: user.id,
  });

  if (error) {
    return { error: error.message };
  }

  redirect(`/community?category=${category}`);
}

export async function deletePost(postId: string): Promise<void> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  await supabase.from('posts').delete().eq('id', postId);

  redirect('/community');
}
