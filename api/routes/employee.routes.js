import { Router } from "express";

export default function ({ EmployeeController }) {
  const router = Router();

  //Rutas de empleado
  router.get("/hello", EmployeeController.sayHello);

  return router;
}
