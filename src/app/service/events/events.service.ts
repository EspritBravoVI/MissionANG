import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../../models/Event';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'http://localhost:8090/SpringMVC/events'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllEvent(): Observable<HttpResponse<Event[]>> {
    return this.http.get<Event[]>(this.apiUrl,{ observe: 'response' });
  }

  getEventById(id: string): Observable<HttpResponse<Event>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Event>(url,{ observe: 'response' });
  }

  createEvent(event: Event): Observable<HttpResponse<Event>> {
    return this.http.post<Event>(this.apiUrl, event,{ observe: 'response' });
  }

  updateEvent(event: Event): Observable<HttpResponse<Event>> {
    const url = `${this.apiUrl}/${event.id}`;
    return this.http.put<Event>(url, event,{ observe: 'response' });
  }

  deleteEvent(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
