import { BaseBusiness } from "./base.business";
import { ProductInventory } from "./models";

export class ProductInventoryBusiness extends BaseBusiness {
  constructor({ ProductInventoryRepository }) {
    super(ProductInventoryRepository, ProductInventory);
  }
}
