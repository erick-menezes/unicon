import { Timestamp } from "firebase/firestore";
import { Category } from "./category";
import { User } from "./user";

export interface Group {
    id?: string;
    name: string;
    description: string;
    createdAt: Timestamp;
    creatorId: string;
    creator: User;
    categoryId: string;
    category: Category;
}
