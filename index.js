export class ProductManager {
  products;
  constructor() {
    this.products = [];
  }

  #findBiggerId() {
    let biggerId = 0;
    this.products.forEach((product) => {
      if (product.id > biggerId) {
        biggerId = product.id;
      }
    });
    return biggerId;
  }

  #productExists(code) {
    return this.products.find((product) => product.code === code);
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Faltan datos");
      return;
    }
    if (this.#productExists(code)) {
      console.log("El producto ya existe")
      return;
    }
    const id = this.#findBiggerId() + 1;
    this.products.push({
      id: id,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    });
  }

  getProducts() {
    if (this.products.length === 0) {
        console.log("No hay productos cargados");
      return;
    }
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === parseInt(id));
    if (!product) {
      return { error: "Not found" };
    }
    return product;
  }
}
