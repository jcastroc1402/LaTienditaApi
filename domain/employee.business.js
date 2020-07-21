import BaseBusiness from "./base.business";
import { Employee } from "./models";

export class EmployeeBusiness extends BaseBusiness {
  constructor({ EmployeeRepository }) {
    super(EmployeeRepository, Employee);
  }
}
