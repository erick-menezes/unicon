import { addDoc, deleteDoc, doc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';

import { db } from "../schemas";
import { PostSave } from '../../database/models/post-save';

import { PostSaveRepository } from "../../database/repositories/post-saves-repository";
import { getAuth } from 'firebase/auth';
import { FirebaseAuthError } from '../errors/FirebaseAuthError';

export class FirestorePostSaveRepository implements PostSaveRepository {
    private auth;

    constructor() {
        this.auth = getAuth();
    }

    async findByUserId(userId: string): Promise<PostSave> {
        return {} as PostSave;
    };

    async findByUserAndPostId(postId: string): Promise<PostSave | null> {
        const userId = this.auth.currentUser?.uid;

        const postSave = await getDocs(
            query(
                db.postSaves,
                where("postId", "==", postId ?? ''),
                where("userId", "==", userId ?? ''),
            )
        ).then((query) => ({
            ...query.docs[0]?.data(),
            id: query.docs[0]?.id,
        }));

        if (!postSave) {
            return null;
        }

        return postSave;
    };

    async countByPostId(postId: string): Promise<number> {
        const saves = getDocs(
            query(
                db.postSaves,
                where("postId", "==", postId ?? '')
            )
        ).then((data) => data.size);

        return saves;
    };

    async create(postId: string): Promise<string> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            throw new FirebaseAuthError();
        }

        return addDoc(
            db.postSaves,
            {
                userId,
                postId,
                savedAt: serverTimestamp(),
            }
        ).then(data => data.id);
    };

    async deleteByReference(saveReference: string): Promise<void> {
        await deleteDoc(
            doc(
                db.postSaves,
                saveReference,
            )
        );
    };
}
