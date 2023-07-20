import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { Reservation } from 'src/app/models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8090/SpringMVC/reservations'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllReservations(): Observable<HttpResponse<Reservation[]>> {
    return this.http.get<Reservation[]>(this.apiUrl,{ observe: 'response' });
  }

  getReservationById(id: string): Observable<HttpResponse<Reservation>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reservation>(url,{ observe: 'response' });
  }

  addReservation(reservation: Reservation): Observable<HttpResponse<Reservation>> {
    return this.http.post<Reservation>(this.apiUrl, reservation,{ observe: 'response' });
  }

  updateReservation(reservation: Reservation): Observable<HttpResponse<Reservation>> {
    const url = `${this.apiUrl}/${reservation.id}`;
    return this.http.put<Reservation>(url, reservation,{ observe: 'response' });
  }

  deleteReservation(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
