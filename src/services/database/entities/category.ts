import { Group } from "../models/group";

export interface Category {
    id?: string;
    createdAt: Date;
    creatorId: string;
    description: string;
    isDisabled: boolean;
    name: string;
    groups: Group[] | null;
};
