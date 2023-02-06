import { FirestorePostViewRepository } from "../../repositories/firestore-post-views-repository";

interface CountPostViewsResponse {
    viewAmount: number;
}

const firestorePostViewRepository = new FirestorePostViewRepository();

export async function countPostViews(postId: string): Promise<CountPostViewsResponse> {
    const viewAmount = await firestorePostViewRepository.countByPostId(postId);

    return { viewAmount };
}
