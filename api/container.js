import { asClass, createContainer, asFunction, asValue } from "awilix";
import { StartUp } from "./startup";
import { Server } from "./server";

//Importar Controladores
import { ProductController } from "./controllers";

//Importar Rutas
import Routes from "./routes";
import ProductRoutes from "./routes/product.routes";

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
  })
  .register({
    router: asFunction(Routes).singleton(),
    ProductRoutes: asFunction(ProductRoutes).singleton(),
    config: asValue(Config),
  });

export default container;
