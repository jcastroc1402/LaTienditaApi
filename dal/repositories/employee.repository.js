import { BaseRepository } from "./base.repository";

export class EmployeeRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Employee");
  }
}
