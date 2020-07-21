export class ProductUnitController {
  constructor() {}

  sayHello(req, res) {
    return res.send({ message: "Hola mundo unidad de producto" });
  }
}
