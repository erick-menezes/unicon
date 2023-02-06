import { addDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';

import { db } from "../schemas";
import { PostView } from '../../database/models/post-view';

import { PostViewRepository } from "../../database/repositories/post-views-repository";
import { getAuth } from 'firebase/auth';
import { FirebaseAuthError } from '../errors/FirebaseAuthError';

export class FirestorePostViewRepository implements PostViewRepository {
    private auth;

    constructor() {
        this.auth = getAuth();
    }

    async findByUserAndPostId(postId: string): Promise<PostView | null> {
        const userId = this.auth.currentUser?.uid;

        const postView = await getDocs(
            query(
                db.postViews,
                where("postId", "==", postId ?? ''),
                where("userId", "==", userId ?? ''),
            )
        ).then((query) => ({
            ...query.docs[0]?.data(),
            id: query.docs[0]?.id,
        }));

        if (!postView) {
            return null;
        }

        return postView;
    };

    async countByPostId(postId: string): Promise<number> {
        const views = await getDocs(
            query(
                db.postViews,
                where("postId", "==", postId ?? '')
            )
        ).then((data) => data.size);

        return views;
    };

    async create(postId: string): Promise<string> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            throw new FirebaseAuthError();
        }

        return addDoc(
            db.postViews,
            {
                userId,
                postId,
                viewedAt: serverTimestamp(),
            }
        ).then(data => data.id);
    };
}
