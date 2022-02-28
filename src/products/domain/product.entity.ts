import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {

  @PrimaryColumn()
  uuid: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @Column()
  basePrice: string;

  @Column()
  baseCurrency: string;
}