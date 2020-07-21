import BaseBusiness from "./base.business";
import { ProductUnit } from "./models";

export class ProductUnitBusiness extends BaseBusiness {
  constructor({ ProductUnitRepository }) {
    super(ProductUnitRepository, ProductUnit);
  }
}
