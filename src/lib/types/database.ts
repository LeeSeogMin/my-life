export interface Profile {
  id: string;
  email: string;
  display_name: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: 'research' | 'lectures';
  is_secret: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface PostWithAuthor extends Post {
  author_name: string;
  author_role: string;
  comment_count: number;
}

export interface Comment {
  id: string;
  content: string;
  post_id: string;
  author_id: string;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface CommentWithAuthor extends Comment {
  author_name: string;
  author_role: string;
}
