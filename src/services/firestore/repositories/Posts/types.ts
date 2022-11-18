import { User } from "../Users/types";

export interface Post {
    id: string;
    authorId: string;
    author: User;
    createdAt: Date;
    groupId: string;
    group: string;
    postContent: string;
    postPreview: string;
    postTitle: string;
    likes: number;    
    views: number;    
}

export interface DatabasePostLikeDataType {
    userId: string;
    postId: string;
}

export interface DatabasePostViewDataType extends DatabasePostLikeDataType {}

export interface DatabasePostSaveDataType extends DatabasePostLikeDataType {}