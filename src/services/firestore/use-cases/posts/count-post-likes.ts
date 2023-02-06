import { FirestorePostLikeRepository } from "../../repositories/firestore-post-likes-repository";

interface CountPostLikesResponse {
    likeAmount: number;
}

const firestorePostLikeRepository = new FirestorePostLikeRepository();

export async function countPostLikes(postId: string): Promise<CountPostLikesResponse> {
    const likeAmount = await firestorePostLikeRepository.countByPostId(postId);

    return { likeAmount };
}
