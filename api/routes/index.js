import { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";

//Se define el mapeo de rutas en un solo archivo
export default function ({
  ProductRoutes,
  EmployeeRoutes,
  ProductInventoryRoutes,
  ProductUnitRoutes,
}) {
  const router = Router();
  const apiRouter = Router();

  apiRouter.use(bodyParser.json()).use(cors()).use(compression());

  //rutas parciales
  apiRouter.use("/product", ProductRoutes);
  apiRouter.use("/employee", EmployeeRoutes);
  apiRouter.use("/productinventory", ProductInventoryRoutes);
  apiRouter.use("/productunit", ProductUnitRoutes);

  router.use("/api", apiRouter);

  return router;
}
