import { FirestorePostSaveRepository } from "../../repositories/firestore-post-saves-repository";

const firestorePostSaveRepository = new FirestorePostSaveRepository();

export async function unsavePost(saveReference: string): Promise<void> {
    await firestorePostSaveRepository.deleteByReference(saveReference);
}
