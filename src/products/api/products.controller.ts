import { Controller, Logger, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid'
import { CreateProductCommand } from '../application/commands/create-product.command';

@Controller('products')
export class ProductsController {}
