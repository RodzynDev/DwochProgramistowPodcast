import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from './create-product.command';
import { ProductsRepositoryI } from '../../domain/products.repository';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private repository: ProductsRepositoryI) {}

  async execute(command: CreateProductCommand) {
    await this.repository.createNew(new Product(command.uuid, co))
  }
}
