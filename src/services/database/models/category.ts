import { Timestamp } from "firebase/firestore";

export interface Category {
    id?: string;
    createdAt: Timestamp;
    creatorId: string;
    description: string;
    isDisabled: boolean;
    name: string;
};
