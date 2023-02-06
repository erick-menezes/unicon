import { Course } from "../models/course";

export interface CourseRepository {
    findAll: () => Promise<Course[]>;
}
