import { Timestamp } from "firebase/firestore";

export interface PostView {
    id?: string;
    viewedAt: Timestamp;
    postId: string;
    userId: string;
}
