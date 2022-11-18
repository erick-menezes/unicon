export interface User {
    authUID: string;
    courseId: string;
    createdAt: Date;
    disciplines: string[];
    email: string;
    name: string;
    roleId: string;
}

export interface DatabaseUserDataType {
    email: string;
    name: string;
    courseId: string;
    authUID: string;
}