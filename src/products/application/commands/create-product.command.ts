export class CreateProductCommand {
  constructor(
    public readonly uuid: string,
    public readonly name: string,
    public readonly quantity: number,
    public readonly description: string,
    public readonly basePrice: string,
    public readonly baseCurrency: string
  ) {}
}