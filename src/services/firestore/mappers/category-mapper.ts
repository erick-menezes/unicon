import { Category } from "../../database/entities/category";
import { Category as CategoryModel } from "../../database/models/category";
import { getGroupsByCategory } from "../use-cases/groups/get-groups-by-category";

export class FirebaseCategoryMapper {
    static async toDomain(category: CategoryModel): Promise<Category> {
        const { groups } = await getGroupsByCategory(category.id!);

        return {
            ...category,
            createdAt: new Date(category.createdAt.seconds * 1000),
            groups,
        }
    }
}
