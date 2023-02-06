import { FirestorePostLikeRepository } from "../../repositories/firestore-post-likes-repository";
import { FirestorePostSaveRepository } from "../../repositories/firestore-post-saves-repository";
import { FirestorePostViewRepository } from "../../repositories/firestore-post-views-repository";

interface GetPostInteractionsResponse {
    postLikeId: string | null;
    postViewId: string | null;
    postSaveId: string | null;
}

const firestorePostLikeRepository = new FirestorePostLikeRepository();
const firestorePostViewRepository = new FirestorePostViewRepository();
const firestorePostSaveRepository = new FirestorePostSaveRepository();

export async function getPostInteractions(postId: string): Promise<GetPostInteractionsResponse> {
    const postLike = await firestorePostLikeRepository.findByUserAndPostId(postId);
    const postView = await firestorePostViewRepository.findByUserAndPostId(postId);
    const postSave = await firestorePostSaveRepository.findByUserAndPostId(postId);

    return {
        postLikeId: postLike?.id ?? null,
        postSaveId: postSave?.id ?? null,
        postViewId: postView?.id ?? null,
    };
}
