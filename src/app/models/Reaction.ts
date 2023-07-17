import {CustomUser} from "./CustomUser";
import {ReactionType} from "./ReactionType";

export interface Reaction {
  id: number;
  type: ReactionType;
  comment: Comment;
  customUser: CustomUser;
}
