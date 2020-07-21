export class EmployeeController {
  constructor() {}

  sayHello(req, res) {
    return res.send({ message: "Hola mundo empleado" });
  }
}
