import { PostView } from "../models/post-view";

export type PostViewRecordFormat = Omit<PostView, "viewedAt" | "id">;

export interface PostViewRepository {
    countByPostId: (postId: string) => Promise<number>;
    findByUserAndPostId: (userId: string, postId: string) => Promise<PostView | null>;
    create: (postId: string) => Promise<string>;
}
