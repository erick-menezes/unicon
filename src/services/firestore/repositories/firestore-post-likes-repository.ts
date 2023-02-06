import { addDoc, deleteDoc, doc, getDocs, query, serverTimestamp, where, } from 'firebase/firestore';

import { db } from "../schemas";

import { PostLikeRepository } from "../../database/repositories/post-likes-repository";
import { PostLike } from '../../database/models/post-like';
import { getAuth } from 'firebase/auth';
import { FirebaseAuthError } from '../errors/FirebaseAuthError';

export class FirestorePostLikeRepository implements PostLikeRepository {
    private auth;

    constructor() {
        this.auth = getAuth();
    }

    async findByUserAndPostId(postId: string): Promise<PostLike | null> {
        const userId = this.auth.currentUser?.uid;

        const postLike = await getDocs(
            query(
                db.postLikes,
                where("postId", "==", postId?.trim() ?? ''),
                where("userId", "==", userId?.trim() ?? ''),
            )
        ).then((query) => ({
            ...query.docs[0]?.data(),
            id: query.docs[0]?.id,
        }));

        if (!postLike) {
            return null;
        }

        return postLike;
    };

    async countByPostId(postId: string): Promise<number> {
        const likes = await getDocs(
            query(
                db.postLikes,
                where("postId", "==", postId ?? '')
            )
        ).then((data) => data.size);

        return likes;
    };

    async create(postId: string): Promise<string> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            throw new FirebaseAuthError();
        }

        return addDoc(
            db.postLikes,
            {
                userId,
                postId,
                likedAt: serverTimestamp(),
            }
        ).then(data => data.id);
    };

    async deleteByReference(likeReference: string): Promise<void> {
        await deleteDoc(
            doc(
                db.postLikes,
                likeReference,
            )
        );
    };
}
