import { Router } from "express";

export default function ({ ProductController }) {
  const router = Router();

  //Rutas de producto
  router.get("/hello", ProductController.sayHello);

  return router;
}
