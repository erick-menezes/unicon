import { Timestamp } from "firebase/firestore";

export interface PostSave {
    id?: string;
    savedAt: Timestamp;
    postId: string;
    userId: string;
}
