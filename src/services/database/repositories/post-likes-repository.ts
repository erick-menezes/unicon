import { PostLike } from "../models/post-like";

export type PostLikeRecordFormat = Omit<PostLike, "likedAt" | "id">;

export interface PostLikeRepository {
    findByUserAndPostId: (userId: string, postId: string) => Promise<PostLike | null>;
    countByPostId: (postId: string) => Promise<number>;
    create: (postId: string) => Promise<string>;
    deleteByReference: (likeReference: string) => Promise<void>;
}
