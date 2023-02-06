import { Timestamp } from "firebase/firestore";

export interface Course {
    id?: string;
    createdAt: Timestamp;
    name: string;
}
