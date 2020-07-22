import { BaseRepository } from "./base.repository";

export class ProductInventoryRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Product");
  }
}
