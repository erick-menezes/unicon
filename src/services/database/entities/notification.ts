import { Post } from "./post";

export interface Notification {
    id: string;
    content: string;
    createdAt: Date;
    groupId: string;
    postId: string;
    post: Post;
}
