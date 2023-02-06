import { Post } from "../../../database/entities/post";
import { FirestorePostRepository } from "../../repositories/firestore-post-repository";

interface GetPostResponse {
    post: Post | null;
};

const firestorePostRepository = new FirestorePostRepository();

export async function getPostDetails(postId: string): Promise<GetPostResponse> {
    const post = await firestorePostRepository.findById(postId);

    return { post };
}
