import { User } from "../models/user";

export type UserRecordFormat = Omit<User, "createdAt" | "id" | "roleId" | "disciplines">;
export type UserFields = keyof User;

export interface UserRepository {
    findBy(fieldValue: any, fieldName?: UserFields): Promise<User | null>;
    create(user: UserRecordFormat): Promise<string>;
}
