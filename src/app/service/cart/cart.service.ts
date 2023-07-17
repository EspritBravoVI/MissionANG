import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8090/SpringMVC/carts'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllCarts(): Observable<HttpResponse<Cart[]>> {
    return this.http.get<Cart[]>(this.apiUrl,{ observe: 'response' });
  }

  getCartById(id: string): Observable<HttpResponse<Cart>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cart>(url,{ observe: 'response' });
  }

  addCart(cart: Cart): Observable<HttpResponse<Cart>> {
    return this.http.post<Cart>(this.apiUrl, cart,{ observe: 'response' });
  }

  updateCart(cart: Cart): Observable<HttpResponse<Cart>> {
    const url = `${this.apiUrl}/${cart.id}`;
    return this.http.put<Cart>(url, cart,{ observe: 'response' });
  }

  deleteCart(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
