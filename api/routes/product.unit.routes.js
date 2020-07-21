import { Router } from "express";

export default function ({ ProductUnitController }) {
  const router = Router();

  //Rutas de unidad de producto
  router.get("/hello", ProductUnitController.sayHello);

  return router;
}
