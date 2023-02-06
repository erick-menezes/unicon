import { Role } from "../models/role";

export interface RoleRepository {
    findByName: (roleName: string) => Promise<Role | null>;
}
