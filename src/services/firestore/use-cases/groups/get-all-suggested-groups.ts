import { FirestoreGroupRepository } from "../../repositories/firestore-group-repository";

import { Group } from "../../../database/models/group";

interface GetAllGroupsResponse {
    groups: Group[];
}

const firestoreGroupRepository = new FirestoreGroupRepository();

export async function getAllSuggestedGroups(userId: string): Promise<GetAllGroupsResponse> {
    const groups = await firestoreGroupRepository.findByUserIdNot(userId);

    return { groups };
}
