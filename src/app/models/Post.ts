import {CustomUser} from "./CustomUser";

export interface Post {
  id: number;
  description: string;
  image: string; // You can change the type to match your specific requirement (e.g., string, Blob, or File)
  customUser: CustomUser;
  comments: Comment[];
}
