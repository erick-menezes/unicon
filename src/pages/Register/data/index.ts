import { db } from "../../../services/firestore";
import { collection, getDocs, query } from "firebase/firestore";
import { CourseDataType } from "../types";

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
