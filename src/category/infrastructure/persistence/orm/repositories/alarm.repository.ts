import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/category/application/ports/category.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from 'src/category/domain/category';

@Injectable()
export class PrismaCategoryRepository extends CategoryRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(category: Category): Promise<void> {
    await this.prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
        isActive: category.isActive,
      },
    });
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();
    return categories.map(
      (category) => new Category(category.id, category.name, category.isActive),
    );
  }
}
