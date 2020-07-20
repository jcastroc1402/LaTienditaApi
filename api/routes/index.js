import { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";

//Se define el mapeo de rutas en un solo archivo
export default function ({ ProductRoutes }) {
  const router = Router();
  const apiRouter = Router();

  apiRouter.use(bodyParser.json()).use(cors()).use(compression());

  //rutas parciales
  apiRouter.use("/product", ProductRoutes);

  router.use("/api", apiRouter);

  return router;
}
