import {TypeTrans} from "./TypeTrans";
import {Reservation} from "./Reservation";

export interface Transport {
  id: number;
  type: TypeTrans;
  nomSociete: string;
  event: Event;
  reservations: Reservation[];
}
