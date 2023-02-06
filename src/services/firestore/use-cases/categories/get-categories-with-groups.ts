import { FirestoreCategoryRepository } from "../../repositories/firestore-category-repository";
import { Category } from "../../../database/entities/category";

interface GetAllCategoriesWithGroupsResponse {
    categories: Category[];
}

const firestoreCategoryRepository = new FirestoreCategoryRepository();

export async function getAllCategoriesWithGroups(): Promise<GetAllCategoriesWithGroupsResponse> {
    const categories = await firestoreCategoryRepository.findAll();

    return { categories };
}
