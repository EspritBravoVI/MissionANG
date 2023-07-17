import {Cart} from "./Cart";

export interface Command {
  id: number;
  item: string;
  total: number;
  price: number;
  carts: Cart[];
}
