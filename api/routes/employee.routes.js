import { Router } from "express";

export default function ({ EmployeeController }) {
  const router = Router();

  //Rutas de empleado
  router.get("/hello", EmployeeController.sayHello);
  router.get("/", EmployeeController.getEmployees.bind(EmployeeController));
  router.get("/:id", EmployeeController.getEmployee.bind(EmployeeController));
  router.post("/", EmployeeController.createEmployee.bind(EmployeeController));
  router.put(
    "/:id",
    EmployeeController.updateEmployee.bind(EmployeeController)
  );
  router.delete(
    "/:id",
    EmployeeController.deleteEmployee.bind(EmployeeController)
  );

  return router;
}
