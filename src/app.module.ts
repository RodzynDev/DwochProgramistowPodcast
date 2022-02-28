import { Module } from '@nestjs/common';
import { Providers } from './common/providers';
import { UsersModule } from './users/users.module';
import { AppController } from './app/app.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [...Providers, UsersModule, ProductsModule],
  providers: [],
  exports: [],
  controllers: [AppController],
})
export class AppModule {}
