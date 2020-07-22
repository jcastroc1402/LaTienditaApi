import mapper from "automapper-js";
import { EmployeeDto } from "../dtos";

export class EmployeeController {
  constructor({ EmployeeService }) {
    this._employeeService = EmployeeService;
  }

  sayHello(req, res) {
    return res.send({ message: "Hola mundo empleado" });
  }

  async getEmployees(req, res) {
    let employees = await this._employeeService.getAll();
    employees = employees.map((employee) => mapper(EmployeeDto, employee));
    return res.send({
      payload: employees,
    });
  }

  async getEmployee(req, res) {
    const { id } = req.params;
    let employee = await this._employeeService.get(id);
    if (!employee) {
      return res.status(404).send();
    }
    employee = mapper(EmployeeDto, employee);
    return res.send({
      payload: employee,
    });
  }

  async createEmployee(req, res) {
    const { body } = req;
    const createdEmployee = await this._employeeService.create(body);
    const employee = mapper(EmployeeDto, createdEmployee);
    return res.status(201).send({
      payload: employee,
    });
  }

  async updateEmployee(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._employeeService.update(id, body);
    return res.status(204).send();
  }

  async deleteEmployee(req, res) {
    const { id } = req.params;

    await this._employeeService.delete(id);
    return res.status(204).send();
  }
}
