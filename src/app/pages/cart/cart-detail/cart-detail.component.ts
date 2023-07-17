import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpResponse} from "@angular/common/http";
import { CartService } from '../../../service/cart/cart.service';
import { Cart } from '../../../models/Cart';

@Component({
  selector: 'app-cart-detail',
  templateUrl: 'cart-detail.component.html',
  styleUrls: ['cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {
  cart!: Cart;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const cartId = this.route.snapshot.paramMap.get('id');
    this.cartService.getCartById(cartId!).subscribe((res:HttpResponse<Cart>) => {
      this.cart = res.body!;
    });
  }
}
