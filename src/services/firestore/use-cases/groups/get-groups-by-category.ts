import { Group } from "../../../database/models/group";
import { FirestoreGroupRepository } from "../../repositories/firestore-group-repository";

interface GetGroupsByCategoryResponse {
    groups: Group[] | null;
}

const firestoreGroupRepository = new FirestoreGroupRepository();

export async function getGroupsByCategory(categoryId: string): Promise<GetGroupsByCategoryResponse> {
    const groups = await firestoreGroupRepository.findByCategoryId(categoryId);

    return { groups };
}
