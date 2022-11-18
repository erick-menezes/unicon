import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../..";

class Group {
    public async index() {
        const allGroups = await getDocs(
            query(
                collection(db, "groups"),
                where("isDisabled", "==", false)
            )
        ).then((groups) => groups.docs.map((group) => ({
            id: group.id,
            ...group.data()
        })));

        return allGroups;
    }
    
    public async getPostAmountByGroup(groupId: string) {
        const postAmount = await getDocs(
            query(
                collection(db, "posts"),
                where("groupId", "==", groupId),
                where("isDisabled", "==", false)
            )
        ).then((posts) => posts.docs.length);

        console.log(`olha os amounts do ${groupId}:`, postAmount);

        return postAmount;
    }
}

export const GroupRepository = new Group();