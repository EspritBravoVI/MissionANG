import {Quantity} from "./Quantity";
import {Command} from "./Command";
import {CustomUser} from "./CustomUser";

export interface Cart {
  id?: number;
  item: string;
  total: number;
  price: number;
  customUser?: string;
  command?: string;
  quantity?: number;
}

