import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostResponse } from '../models/postResponse.model';
import posts from '../mock/rawPost';
import users from '../mock/users';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class MyPostService {

  constructor() { }

  getPost(id: number): Observable<PostResponse> {
    return of(posts);
  }

  getUser(id: number): Observable<User> {
    const user: User = users
      .find(response => response.id === id) || {} as User;

    return of(user);
  }

  getAllUsers(): Observable<User[]> {
    return of(users);
  }
}
