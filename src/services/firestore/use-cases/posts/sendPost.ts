import { CreatePostProps } from "../../../database/repositories/post-repository";
import { FirestorePostRepository } from "../../repositories/firestore-post-repository";

interface SendPostRequest extends CreatePostProps {}

const firestorePostRepository = new FirestorePostRepository();

export async function sendPost({ groupIds, postContent, postTitle, postPreview }: SendPostRequest) {
    await firestorePostRepository.create({
        groupIds,
        postContent,
        postPreview,
        postTitle
    });
}
