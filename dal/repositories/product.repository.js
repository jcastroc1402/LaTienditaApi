import { BaseRepository } from "./base.repository";

export class ProductRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Product");
  }
}
