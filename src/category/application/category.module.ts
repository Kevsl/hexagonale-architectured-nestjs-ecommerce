import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from '../presenters/http/category.controller';
import { CategoryFactory } from '../domain/factories/category.factory';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaCategoryRepository } from '../infrastructure/persistence/orm/repositories/alarm.repository';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryFactory,
    PrismaService,
    PrismaCategoryRepository,
  ],
  exports: [PrismaCategoryRepository],
})
export class CategoryModule {}
