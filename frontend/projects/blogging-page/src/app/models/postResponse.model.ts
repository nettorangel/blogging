export interface PostResponse {
  id: number;
  timestamp: string;
  author: Author;
  title: string;
  subtitle: string;
  content: string;
  comments: Comments[];
}

export interface Author {
  id: number;
  username: string;
}

export interface Comments {
  id: number;
  respondsTo: RespondsTo | null;
  author: Author;
  timestamp: string;
  content: string;
  comments?: Comments[];
}

export interface RespondsTo {
  id: number;
}
