import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reaction } from '../../models/Reaction';
@Injectable({
  providedIn: 'root'
})
export class ReactionService {
private apiUrl = 'http://localhost:8090/SpringMVC/reactions'; // Replace with your API URL

  constructor(private http: HttpClient) { }
  getAllReactions(): Observable<Reaction[]> {
        return this.http.get<Reaction[]>(this.apiUrl);
      }

    getReactionById(id: any): Observable<HttpResponse<Reaction>> {
          const url = `${this.apiUrl}/getReactionById/${id}`;
          return this.http.get<Reaction>(url,{ observe: 'response' });
      }
    getReactionByCommentId(commentId: any): Observable<HttpResponse<Reaction>> {
          const url = `${this.apiUrl}/getReactionByCommentId/${commentId}`;
          return this.http.get<Reaction>(url,{ observe: 'response' });
      }
    getReactionByUserId(userId: any): Observable<HttpResponse<Reaction[]>> {
          const url = `${this.apiUrl}/getReactionByUserId/${userId}`;
          return this.http.get<Reaction[]>(url,{ observe: 'response' });
      }

    addReaction(reaction: Reaction): Observable<HttpResponse<Reaction>> {
        return this.http.post<Reaction>(this.apiUrl, reaction,{ observe: 'response' });
      }
    addReactionAndAssignToCommentAndUser(reaction: Reaction,commentId: any ,userId : any  ): Observable<HttpResponse<Reaction>> {
    const url = `${this.apiUrl}/${commentId}/${userId}`;
         return this.http.post<Reaction>(this.apiUrl, reaction,{ observe: 'response' });
       }

      updateReaction(reaction: Reaction): Observable<HttpResponse<Reaction>> {
        const url = `${this.apiUrl}/updateReaction`;
        return this.http.put<Reaction>(url, reaction,{ observe: 'response' });
      }

      deleteReaction(id: string): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
      }
}
