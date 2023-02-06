import { Post } from "../../../database/entities/post";
import { FirestorePostRepository } from "../../repositories/firestore-post-repository";

interface GetAllPostsResponse {
    posts: Post[];
};

const firestorePostRepository = new FirestorePostRepository();

export async function getAllPosts(): Promise<GetAllPostsResponse> {
    const posts = await firestorePostRepository.findAllEnabled();

    return { posts };
}
