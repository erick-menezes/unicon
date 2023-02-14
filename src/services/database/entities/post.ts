import { User } from "../models/user";

export interface Post {
    id?: string;
    coverImage?: string;
    authorId: string;
    createdAt: Date;
    groupId: string;
    isDisabled: boolean;
    postContent: string;
    postPreview: string;
    postTitle: string;
    author: User | null;
    likes: number;
    views: number;
    interactions: {
        postLikeId: string | null;
        postSaveId: string | null;
        postViewId: string | null;
    }
}
