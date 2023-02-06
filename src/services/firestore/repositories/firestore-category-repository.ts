import { getDocs, query, where } from "firebase/firestore";
import { Category } from "../../database/entities/category";
import { CategoryRepository } from "../../database/repositories/category-repository";
import { FirebaseCategoryMapper } from "../mappers/category-mapper";

import { db } from "../schemas";

export class FirestoreCategoryRepository implements CategoryRepository {
    async findAll(): Promise<Category[]> {
        const categoriesSnapshot = await getDocs(
            query(
                db.categories,
                where('isDisabled', "==", false)
            )
        );

        const categories = categoriesSnapshot.docs.map((categoryQuery) => ({ ...categoryQuery.data(), id: categoryQuery.id, }));

        return Promise.all(categories.map((category) => FirebaseCategoryMapper.toDomain(category)));
    };
}
