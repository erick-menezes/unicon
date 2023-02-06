import { User } from "../../../database/models/user";
import { UserFields } from "../../../database/repositories/user-repository";
import { FirestoreUserRepository } from "../../repositories/firestore-user-repository";

interface GetUserAccountResponse {
    user: User | null;
}

const firestoreUserRepository = new FirestoreUserRepository();

export async function getUserAccount(fieldValue: string, fieldName?: UserFields): Promise<GetUserAccountResponse> {
    const user = await firestoreUserRepository.findBy(fieldValue, fieldName);

    return { user };
}
