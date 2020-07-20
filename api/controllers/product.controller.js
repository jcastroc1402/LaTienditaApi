export class ProductController {
  constructor() {}

  sayHello(req, res) {
    return res.send({ message: "Hola Mundo" });
  }
}
