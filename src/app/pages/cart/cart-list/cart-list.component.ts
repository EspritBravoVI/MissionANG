import { Component, OnInit } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import { CartService } from '../../../service/cart/cart.service';
import { Cart } from '../../../models/Cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: 'cart-list.component.html',
  styleUrls: ['cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  carts!: Cart[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getAllCarts().subscribe((res:HttpResponse<Cart[]>) => {
      this.carts = res.body!;
    });
  }
}
