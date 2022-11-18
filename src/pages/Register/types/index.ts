// Firebase data types

export interface CourseDataType {
    id: string;
    name: string;
}

// Form data types

export interface UserSignUpDataType {
    email: string;
    name: string;
    courseId: string;
    password: string;
}