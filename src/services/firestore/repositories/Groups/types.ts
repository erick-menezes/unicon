import { Category } from "../Categories/types";
import { User } from "../Users/types";

export interface Group {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    creatorId: string;
    creator: User;
    categoryId: string;
    category: Category;
}