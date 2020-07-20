import { Router } from "express";

export default function ({ ProductController }) {
  const router = Router();

  //Rutas de product
  router.get("/hello", ProductController.sayHello);

  return router;
}
