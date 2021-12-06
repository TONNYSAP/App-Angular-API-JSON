import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3004/posts';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  savePhoto(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, JSON.stringify(post), this.httpOptions);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${id}`, this.httpOptions);
  }
}
