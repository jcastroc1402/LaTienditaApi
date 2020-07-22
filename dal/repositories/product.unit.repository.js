import { BaseRepository } from "./base.repository";

export class ProductUnitRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "ProductUnit");
  }
}
