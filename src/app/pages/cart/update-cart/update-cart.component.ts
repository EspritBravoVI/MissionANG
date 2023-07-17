import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpResponse} from "@angular/common/http";
import { CartService } from '../../../service/cart/cart.service';
import { Cart } from '../../../models/Cart';

@Component({
  selector: 'app-update-cart',
  templateUrl: 'update-cart.component.html',
  styleUrls: ['update-cart.component.scss'],
})
export class UpdateCartComponent implements OnInit {
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

  onSubmit(): void {
    this.cartService.updateCart(this.cart).subscribe((res:HttpResponse<Cart>) => {
      console.log('Cart updated successfully:', res.body!);
      // Reset the form or navigate to the cart detail page
    });
  }
}
