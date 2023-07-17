import {CustomUser} from "./CustomUser";

export interface Feedback {
  id: number;
  rating: number;
  comments: string;
  customUser: CustomUser;
  event: Event;
}
