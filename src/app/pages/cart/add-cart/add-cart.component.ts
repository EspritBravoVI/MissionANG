import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { CartService } from '../../../service/cart/cart.service';
import { Cart } from '../../../models/Cart';

@Component({
  selector: 'app-add-cart',
  templateUrl: 'add-cart.component.html',
  styleUrls: ['add-cart.component.scss'],
})
export class AddCartComponent {
  newCart: Cart = { item: '', total: 0, price: 0 };

  constructor(private cartService: CartService) {}

  onSubmit(): void {
    console.log(this.newCart)
    this.cartService.addCart(this.newCart).subscribe(
      (res: HttpResponse<Cart>) => {
        console.log('Cart added successfully:', res.body);
      },
      (error: any) => {
        console.error('Error adding cart:', error);
      }
    );
  }
}
