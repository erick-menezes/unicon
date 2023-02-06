import { collection, getDocs, query, where } from "firebase/firestore";

import { GroupRepository } from "../../database/repositories/group-repository";

import { Group } from "../../database/models/group";

import { db } from "../schemas";

export class FirestoreGroupRepository implements GroupRepository {
    async findAllEnabled(): Promise<Group[]> {
        const groupSnapshot = await getDocs(
            query(
                db.groups,
                where("isDisabled", "==", false),
            )
        );

        const groups = groupSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, }));

        return groups;
    };

    async findByCategoryId(categoryId: string): Promise<Group[] | null> {
        const groupsByCategory = await getDocs(
            query(
                db.groups,
                where("categoryId", "==", categoryId)
            )
        );

        if (!groupsByCategory) {
            return null;
        }

        const groups = groupsByCategory.docs.map((group) => ({ ...group.data(), id: group.id }));

        console.log('categoryId', categoryId);
        console.log('query', groups);

        return groups;
    };

    async findByUserIdNot(userId: string): Promise<Group[]> {
        const groupSnapshot = await getDocs(
            query(
                db.groups,
                where("isDisabled", "==", false),
            )
        );

        const groups = groupSnapshot.docs.filter(async (doc) => {
            const membersQuery = await getDocs(
                query(
                    collection(doc.ref, "members"),
                    where("userId", "!=", userId),
                )
            );

            return membersQuery.size > 0;
        }).map(doc => ({ ...doc.data(), id: doc.id, }));

        return groups;
    };
}
