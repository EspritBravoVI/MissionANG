import {Cart} from "./Cart";
import {Product} from "./Product";

export interface Quantity {
  id: number;
  quantite: number;
  product: Product;
  cart: Cart;
}
