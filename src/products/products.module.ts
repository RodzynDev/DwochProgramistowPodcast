import { Module } from '@nestjs/common';
import { ProductsController } from './api/products.controller';

@Module({
  controllers: [ProductsController],
})
export class ProductsModule {}
