import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './presenters/http/category.controller';
import { CategoryFactory } from './domain/factories/category.factory';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryFactory],
})
export class CategoryModule {}
