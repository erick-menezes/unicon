import { Post } from "../../database/entities/post";

export interface CreatePostProps {
    postTitle: string;
    postContent: string;
    postPreview: string | null,
    groupIds: string[],
}

export interface PostRepository {
    findAllEnabled: (userId: string) => Promise<Post[]>;
    findById: (postId: string, userId: string) => Promise<Post | null>;
    countByGroupId: (groupId: string) => Promise<number>;
    create: (post: CreatePostProps) => Promise<void>;
}
