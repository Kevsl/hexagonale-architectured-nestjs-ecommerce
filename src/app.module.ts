import { Module } from '@nestjs/common';
import { CategoryModule } from './category/application/category.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoryModule, PrismaModule],
})
export class AppModule {}
