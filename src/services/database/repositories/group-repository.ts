import { Group } from "../models/group";

export interface GroupRepository {
    findAllEnabled: () => Promise<Group[]>;
    findByUserIdNot: (userId: string) => Promise<Group[]>;
    findByCategoryId: (categoryId: string) => Promise<Group[] | null>;
}
