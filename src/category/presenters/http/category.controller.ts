import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from 'src/category/category.service';
import { CreateCategoryCommand } from 'src/category/application/commands/create-category-command';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(
      new CreateCategoryCommand(
        createCategoryDto.name,
        createCategoryDto.isActive,
      ),
    );
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
}
