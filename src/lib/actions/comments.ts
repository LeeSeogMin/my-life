'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';

export async function createComment(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: '로그인이 필요합니다.' };
  }

  const content = formData.get('content') as string;
  const postId = formData.get('postId') as string;
  const parentId = formData.get('parentId') as string | null;

  const { error } = await supabase.from('comments').insert({
    content,
    post_id: postId,
    author_id: user.id,
    parent_id: parentId || null,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/community/${postId}`);
}

export async function deleteComment(commentId: string, postId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: '로그인이 필요합니다.' };
  }

  const { error } = await supabase.from('comments').delete().eq('id', commentId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/community/${postId}`);
}
