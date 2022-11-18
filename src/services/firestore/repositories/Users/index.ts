import { db } from "../../../../services/firestore";
import { addDoc, collection, doc, DocumentData, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { DatabaseUserDataType } from "./types";

class User {
    public async store({ courseId, email, name, authUID }: DatabaseUserDataType) {
        const userRoleId = await this.getUserRoleId();

        await addDoc(
            collection(db, "users"),
            {
                email,
                name,
                courseId,
                authUID,
                roleId: userRoleId,
                disciplines: [],
                createdAt: serverTimestamp(),
            }
        );
    }

    public async show(fieldValue: string, fieldName?: string) {
        let user: DocumentData | null;

        if (fieldName === 'id') {
            user = await getDoc(
                doc(db, "users", fieldValue)
            ).then((result) => result.data() ?? null);
        } else {
            user = await getDocs(
                query(
                    collection(db, "users"),
                    where(fieldName ?? "authUID", "==", fieldValue)
                )
            ).then((data) => data.docs.map((uid) => uid.data())[0]);
        }

        return user;
    }

    private async getUserRoleId() {
        const userRoleId = await getDocs(
            query(
                collection(db, "roles"),
                where("name", "==", "User"),
            )
        ).then((data) => data.docs.map((role) => role.id)[0]);
        
        return userRoleId;
    }
}

export const UserRepository = new User();