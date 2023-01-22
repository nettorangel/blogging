import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostResponse } from '../models/postResponse.model';
import posts from '../mock/rawPost';

@Injectable({ providedIn: 'root' })
export class MyPostService {
  constructor() {}

  getPost(id: number): Observable<PostResponse> {
    return of(posts);
  }
}
