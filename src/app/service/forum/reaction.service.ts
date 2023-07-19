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
  getAllReactions(): Observable<HttpResponse<Reaction[]>> {
        return this.http.get<Reaction[]>(this.apiUrl,{ observe: 'response' });
      }

    getReactionById(id: string): Observable<HttpResponse<Reaction>> {
          const url = `${this.apiUrl}/${id}`;
          return this.http.get<Reaction>(url,{ observe: 'response' });
      }

    addReaction(reaction: Reaction): Observable<HttpResponse<Reaction>> {
        return this.http.post<Reaction>(this.apiUrl, recation,{ observe: 'response' });
      }

      updateReaction(recation: Reaction): Observable<HttpResponse<Reaction>> {
        const url = `${this.apiUrl}/${reaction.id}`;
        return this.http.put<Reaction>(url, reaction,{ observe: 'response' });
      }

      deleteReaction(id: string): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
      }
}
