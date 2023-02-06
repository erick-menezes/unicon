import { PostSave } from "../models/post-save";

export type PostSaveRecordFormat = Omit<PostSave, "savedAt" | "id">;

export interface PostSaveRepository {
    countByPostId: (postId: string) => Promise<number>;
    findByUserAndPostId: (userId: string, postId: string) => Promise<PostSave | null>;
    findByUserId: (userId: string) => Promise<PostSave>;
    create: (postId: string) => Promise<string>;
    deleteByReference: (saveReference: string) => Promise<void>;
}
