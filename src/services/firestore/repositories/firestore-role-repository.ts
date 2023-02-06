import { getDocs, query, where } from "firebase/firestore";
import { Role } from "../../database/models/role";
import { RoleRepository } from "../../database/repositories/role-repository";
import { db } from "../schemas";

export class FirestoreRoleRepository implements RoleRepository {
    async findByName(roleName: string): Promise<Role | null> {
        const role = await getDocs(
            query(
                db.roles,
                where("name", "==", roleName ?? ''),
            )
        ).then((data) => ({
            ...data.docs[0]?.data(),
            id: data.docs[0]?.id,
        }));

        if (!role) {
            return null;
        }

        return role;
    };
}
