import { Category } from 'src/category/domain/category';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract findAll(): Promise<Category[]>;
}
