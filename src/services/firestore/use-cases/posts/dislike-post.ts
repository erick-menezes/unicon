import { FirestorePostLikeRepository } from "../../repositories/firestore-post-likes-repository";

const firestorePostLikeRepository = new FirestorePostLikeRepository();

export async function dislikePost(likeReference: string): Promise<void> {
    await firestorePostLikeRepository.deleteByReference(likeReference);
}
