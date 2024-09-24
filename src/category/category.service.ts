import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './presenters/http/dto/create-category.dto';
import { CreateCategoryCommand } from './application/commands/create-category-command';

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
