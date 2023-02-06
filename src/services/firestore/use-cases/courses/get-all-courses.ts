import { Course } from "../../../database/models/course";
import { FirestoreCourseRepository } from "../../repositories/firestore-course-repository";

interface GetAllCoursesResponse {
    courses: Course[];
}

const firestoreCourseRepository = new FirestoreCourseRepository();

export async function getAllCourses(): Promise<GetAllCoursesResponse> {
    const courses = await firestoreCourseRepository.findAll();

    return { courses };
}
