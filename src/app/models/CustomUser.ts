import {Feedback} from "./Feedback";
import {Reaction} from "./Reaction";
import {Reclamation} from "./Reclamation";
import {Post} from "./Post";
import {Cart} from "./Cart";
import {Reservation} from "./Reservation";

export interface CustomUser {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  email: string;
  feedbacks: Feedback[];
  comments: Comment[];
  reactions: Reaction[];
  reclamations: Reclamation[];
  events: Event[];
  posts: Post[];
  cart: Cart;
  reservations: Reservation[];
}
