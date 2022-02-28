import { Product } from './product.entity';

export interface ProductsRepositoryI {
  createNew(product: Product): Promise<Product>;
}