import { Timestamp } from "firebase/firestore";

export interface PostLike {
    id?: string;
    likedAt: Timestamp;
    postId: string;
    userId: string;
}
