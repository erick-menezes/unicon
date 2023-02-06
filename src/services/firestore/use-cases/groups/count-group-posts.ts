import { FirestorePostRepository } from "../../repositories/firestore-post-repository";

interface CountGroupPosts {
    postAmount: number;
}

const firestorePostRepository = new FirestorePostRepository();

export async function countGroupPosts(groupId: string): Promise<CountGroupPosts> {
    const postAmount = await firestorePostRepository.countByGroupId(groupId);

    return { postAmount };
}
