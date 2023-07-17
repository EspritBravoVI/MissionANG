import {Transport} from "./Transport";
import {CustomUser} from "./CustomUser";

export interface Reservation {
  id: number;
  event: Event;
  customUser: CustomUser;
  transport: Transport;
}
