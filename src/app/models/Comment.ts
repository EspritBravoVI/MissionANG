import {Post} from "./Post";
import {CustomUser} from "./CustomUser";
import {Reaction} from "./Reaction";

export interface Comment {
  id: number;
  contenu: string;
  post: Post;
  customUser: CustomUser;
  reactions: Reaction[];
}
