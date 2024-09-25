import { Injectable } from '@nestjs/common';
import { CreateCategoryCommand } from './commands/create-category-command';

@Injectable()
export class CategoryService {
  create(createCategoryDto: CreateCategoryCommand) {
    console.log(createCategoryDto);

    return 'This action adds a new category }';
  }

  findAll() {
    return `This action returns all category`;
  }
}
