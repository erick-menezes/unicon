import { FirestoreUserRepository } from "../../repositories/firestore-user-repository";

interface RegisterAccountRequest {
    email: string;
    name: string;
    courseId: string;
    authUID: string;
}

interface RegisterAccountResponse {
    userId: string;
}

const firestoreUserRepository = new FirestoreUserRepository();

export async function registerAccount({ courseId, email, name, authUID }: RegisterAccountRequest): Promise<RegisterAccountResponse> {
    const userId = await firestoreUserRepository.create({
        authUID,
        courseId,
        email,
        name,
    });

    return { userId };
}
