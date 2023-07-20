import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { Transport } from 'src/app/models/Transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private apiUrl = 'http://localhost:8090/SpringMVC/transports'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllTransports(): Observable<HttpResponse<Transport[]>> {
    return this.http.get<Transport[]>(this.apiUrl,{ observe: 'response' });
  }

  getTransportById(id: string): Observable<HttpResponse<Transport>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Transport>(url,{ observe: 'response' });
  }

  addTransport(transport: Transport): Observable<HttpResponse<Transport>> {
    return this.http.post<Transport>(this.apiUrl, transport,{ observe: 'response' });
  }

  updateTransport(transport: Transport): Observable<HttpResponse<Transport>> {
    const url = `${this.apiUrl}/${transport.id}`;
    return this.http.put<Transport>(url, transport,{ observe: 'response' });
  }

  deleteTransport(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
