export interface User {
  id: number;
  username: string;
  memberSince: string;
  friendIds: number[];
  posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}
