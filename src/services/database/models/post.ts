import { Timestamp } from "firebase/firestore";

export interface Post {
    id?: string;
    coverImage?: string;
    authorId: string;
    createdAt: Timestamp;
    groupId: string;
    isDisabled: boolean;
    postContent: string;
    postPreview: string;
    postTitle: string;
}
