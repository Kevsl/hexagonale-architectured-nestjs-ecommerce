import { Injectable } from '@nestjs/common';
import { Category } from '../category';

@Injectable()
export class CategoryFactory {
  create(id: string, name: string, isActive: boolean) {
    return new Category(id, name, isActive);
  }
}
