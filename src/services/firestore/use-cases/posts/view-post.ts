import { FirestorePostViewRepository } from "../../repositories/firestore-post-views-repository";

interface ViewPostResponse {
    postViewId: string;
}

const firestorePostViewRepository = new FirestorePostViewRepository();

export async function viewPost(postId: string): Promise<ViewPostResponse> {
    const postViewId = await firestorePostViewRepository.create(postId);

    return { postViewId };
}
