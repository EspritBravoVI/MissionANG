import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../../models/user/register";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createAccount(data:RegisterRequest):Observable<RegisterRequest>{
    return this.http.post<RegisterRequest>(this.apiUrl+'/register', data);
  }
}
