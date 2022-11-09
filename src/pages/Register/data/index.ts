import { db } from "../../../services/firestore";
import { addDoc, collection, getDocs, limit, query, serverTimestamp, where } from "firebase/firestore";
import { CourseDataType, RegisterUserFormDataType } from "../types";

export async function getAllCourses() {
    const courseCollection = query(collection(db, 'courses'));
    const courseDocs = await getDocs(courseCollection);

    const allCourses: CourseDataType[] = [];

    courseDocs.forEach((doc) => allCourses.push({
        ...doc.data() as CourseDataType,
        id: doc.id
    }));

    return allCourses;
}

export async function storeUserOnDatabase({ course, email, name }: RegisterUserFormDataType) {
    const userRoleId = await getUserRoleId();

    await addDoc(collection(db, "users"), {
        email,
        name,
        courseId: course,
        roleId: userRoleId,
        disciplines: [],
        createdAt: serverTimestamp(),
    });
}

async function getUserRoleId() {
    const userRole = query(collection(db, "roles"), where("name", "==", "User"), limit(1));

    const userRoleDoc = await getDocs(userRole);

    let userRoleId: string = "";

    userRoleDoc.forEach((userRole) => userRoleId = userRole.id)

    return userRoleId;
}