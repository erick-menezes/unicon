import { FirestoreUserRepository } from "../../repositories/firestore-user-repository";

interface RegisterAccountRequest {
    email: string;
    name: string;
    courseId: string;
    authUID: string;
    profileUrl?: string | null;
}

interface RegisterAccountResponse {
    userId: string;
}

const firestoreUserRepository = new FirestoreUserRepository();

export async function registerAccount({ courseId, email, name, authUID, profileUrl }: RegisterAccountRequest): Promise<RegisterAccountResponse> {
    const userId = await firestoreUserRepository.create({
        authUID,
        courseId,
        email,
        name,
        profileUrl,
    });

    return { userId };
}
