import { addDoc, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { User } from "../../database/models/user";
import { UserFields, UserRecordFormat, UserRepository } from "../../database/repositories/user-repository";
import { db } from "../schemas";
import { FirestoreRoleRepository } from "./firestore-role-repository";

export class FirestoreUserRepository implements UserRepository {
    private firestoreRoleRepository: FirestoreRoleRepository;

    constructor() {
        this.firestoreRoleRepository = new FirestoreRoleRepository();
    }

    async findBy(fieldValue: any, fieldName?: UserFields): Promise<User | null> {
        let user;

        if (fieldName === 'id' || !fieldName) {
            user = await getDoc(
                doc(db.users, fieldValue)
            ).then((result) => result.data());
        } else {
            user = await getDocs(
                query(
                    db.users,
                    where(fieldName, "==", fieldValue ?? '')
                )
            ).then((userQuery) => userQuery.docs[0]?.data());
        }

        if (!user) {
            return null;
        }

        return user;
    }

    async create({ authUID, courseId, email, name, profileUrl }: UserRecordFormat): Promise<string> {
        const roleId = await this.firestoreRoleRepository.findByName('User');

        if (!roleId?.id) {
            throw new Error('Error: User role not found on database.');
        }

        return addDoc(
            db.users,
            {
                email,
                name,
                courseId,
                authUID,
                roleId: roleId.id,
                disciplines: [],
                createdAt: serverTimestamp(),
                profileUrl: profileUrl ?? null,
            }
        ).then((data) => data.id);
    }
}
