import {Quantity} from "./Quantity";

export interface Product {
  id: number;
  description: string;
  image: string; // You can change the type to match your specific requirement (e.g., string, Blob, or File)
  event: Event;
  quantities: Quantity[];
}
