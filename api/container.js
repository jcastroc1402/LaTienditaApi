import { asClass, createContainer, asFunction, asValue } from "awilix";
import { StartUp } from "./startup";
import { Server } from "./server";

//Importar Controladores
import {
  ProductController,
  EmployeeController,
  ProductInventoryController,
  ProductUnitController,
} from "./controllers";

//Importar Rutas
import Routes from "./routes";
import ProductRoutes from "./routes/product.routes";
import EmployeeRoutes from "./routes/employee.routes";
import ProductInventoryRoutes from "./routes/product.inventory.routes";
import ProductUnitRoutes from "./routes/product.unit.routes";

import Config from "../config/env";

const container = createContainer();

//Inyeccion de dependencias
container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    ProductController: asClass(ProductController).singleton(),
    EmployeeController: asClass(EmployeeController).singleton(),
    ProductInventoryController: asClass(ProductInventoryController).singleton(),
    ProductUnitController: asClass(ProductUnitController).singleton(),
  })
  .register({
    router: asFunction(Routes).singleton(),
    ProductRoutes: asFunction(ProductRoutes).singleton(),
    EmployeeRoutes: asFunction(EmployeeRoutes).singleton(),
    ProductInventoryRoutes: asFunction(ProductInventoryRoutes).singleton(),
    ProductUnitRoutes: asFunction(ProductUnitRoutes).singleton(),
    config: asValue(Config),
  });

export default container;
