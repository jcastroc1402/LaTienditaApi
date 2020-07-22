import { BaseBusiness } from "./base.business";
import { Product } from "./models";

export class ProductBusiness extends BaseBusiness {
  constructor({ ProductRepository }) {
    super(ProductRepository, Product);
  }
}
