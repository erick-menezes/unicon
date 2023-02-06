import { FirestorePostLikeRepository } from "../../repositories/firestore-post-likes-repository";

interface LikePostResponse {
    postLikeId: string;
}

const firestorePostLikeRepository = new FirestorePostLikeRepository();

export async function likePost(postId: string): Promise<LikePostResponse> {
    const postLikeId = await firestorePostLikeRepository.create(postId);

    return { postLikeId };
}
