import {ReqStatus} from "./ReqStatus";
import {Feedback} from "./Feedback";
import {Reservation} from "./Reservation";
import {Product} from "./Product";
import {CustomUser} from "./CustomUser";
import {Transport} from "./Transport";

export interface Event {
  id: number;
  hostId?: number;
  supplierId?: number;
  location: string;
  dateEvent: Date;
  maxParticipants: number;
   requestStatus?: ReqStatus;
  description: string;
  participantsCount?: number;
  feedbacks?: Feedback[];
  reservations?: Reservation[];
  products?: Product[];
  customUser?: CustomUser;
  transport?: Transport;
}
