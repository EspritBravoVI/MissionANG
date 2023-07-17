import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/user/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8040/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    return this.http.post<Login>(`${this.apiUrl}/authenticate`, login);
  }
}