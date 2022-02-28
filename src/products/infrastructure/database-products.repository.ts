import { Product } from '../domain/product.entity';
import { ProductsRepositoryI } from '../domain/products.repository';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Product)
export class DatabaseProductsRepository extends Repository<Product> implements ProductsRepositoryI {
  public async createNew(product: Product): Promise<Product> {
    await this.save(product)

    return await this.findOne(product.uuid)
  }
}