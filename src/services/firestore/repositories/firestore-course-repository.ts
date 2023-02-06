import { getDocs } from "firebase/firestore";
import { Course } from "../../database/models/course";
import { CourseRepository } from "../../database/repositories/course-repository";
import { db } from "../schemas";

export class FirestoreCourseRepository implements CourseRepository {
    async findAll(): Promise<Course[]> {
        const coursesSnapshot = await getDocs(
            db.courses,
        )

        const courses = coursesSnapshot.docs.map((courseQuery) => ({ ...courseQuery.data(), id: courseQuery.id, }));

        return courses;
    };
}
