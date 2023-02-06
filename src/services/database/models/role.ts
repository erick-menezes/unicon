import { Timestamp } from "firebase/firestore";

export interface Role {
    id?: string;
    createdAt: Timestamp;
    name: string;
    permissions: string[];
}
