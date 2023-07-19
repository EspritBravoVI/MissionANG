import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private apiUrl = 'http://localhost:8090/SpringMVC/posts'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<HttpResponse<Post[]>> {
      return this.http.get<Post[]>(this.apiUrl,{ observe: 'response' });
    }

  getPostById(id: string): Observable<HttpResponse<Post>> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Post>(url,{ observe: 'response' });
    }

  addPost(post: Post): Observable<HttpResponse<Post>> {
      return this.http.post<Post>(this.apiUrl, post,{ observe: 'response' });
    }

    updatePost(post: Post): Observable<HttpResponse<Post>> {
      const url = `${this.apiUrl}/${post.id}`;
      return this.http.put<Post>(url, post,{ observe: 'response' });
    }

    deletePost(id: string): Observable<void> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<void>(url);
    }
}
