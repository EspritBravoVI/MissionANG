import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../../models/Comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
private apiUrl = 'http://localhost:8090/SpringMVC/comments'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<HttpResponse<Comment[]>> {
        return this.http.get<Comment[]>(this.apiUrl,{ observe: 'response' });
      }

    getCommentById(id: string): Observable<HttpResponse<Comment>> {
          const url = `${this.apiUrl}/${id}`;
          return this.http.get<Comment>(url,{ observe: 'response' });
      }

    addComment(comment: Comment): Observable<HttpResponse<Comment>> {
        return this.http.post<Comment>(this.apiUrl, comment,{ observe: 'response' });
      }

      updateComment(comment: Comment): Observable<HttpResponse<Comment>> {
        const url = `${this.apiUrl}/${comment.id}`;
        return this.http.put<Comment>(url, comment,{ observe: 'response' });
      }

      deleteComment(id: string): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
      }

}
