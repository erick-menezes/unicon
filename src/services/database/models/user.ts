import { Timestamp } from "firebase/firestore";

export interface User {
    id?: string;
    authUID: string;
    courseId: string;
    createdAt: Timestamp;
    disciplines: string[];
    email: string;
    name: string;
    roleId: string;
    profileUrl?: string | null;
}
