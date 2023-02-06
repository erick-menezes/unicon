import { FirestorePostSaveRepository } from "../../repositories/firestore-post-saves-repository";

interface SavePostResponse {
    postSaveId: string;
}

const firestorePostSaveRepository = new FirestorePostSaveRepository();

export async function savePost(postId: string): Promise<SavePostResponse> {
    const postSaveId = await firestorePostSaveRepository.create(postId);

    return { postSaveId };
}
