import { Timestamp } from "firebase/firestore";

export interface Notification {
    id?: string;
    content: string;
    createdAt: Timestamp;
    groupId: string;
    postId: string;
}
