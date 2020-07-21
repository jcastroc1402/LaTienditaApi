import { Router } from "express";

export default function ({ ProductInventoryController }) {
  const router = Router();

  //Rutas de inventario de producto
  router.get("/hello", ProductInventoryController.sayHello);

  return router;
}
