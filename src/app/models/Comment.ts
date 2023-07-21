import {Post} from "./Post";
import {CustomUser} from "./CustomUser";
import {Reaction} from "./Reaction";

export class Comment {
  id?: number;
  contenu: string;
  post?: Post;
  customUser?: CustomUser;
  reactions?: Reaction[];
}
