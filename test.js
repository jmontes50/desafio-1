import { ProductManager } from "./index.js";

const productManager = new ProductManager();

console.log({ productManager });

const product1 = {
    title: "Producto prueba",
    description: "Este es un producto de prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc1234",
    stock: 25,
}

const product2 = {
    title: "Producto prueba 2",
    description: "Este es un producto de prueba 2",
    price: 400,
    thumbnail: "Sin imagen",
    code: "abc1235",
    stock: 5,
}

productManager.addProduct(product1);
productManager.addProduct(product2);

const products = productManager.getProducts();

const product3 = {
    title: "Producto prueba",
    description: "Este es un producto de prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc1234",
    stock: 25,
}

productManager.addProduct(product3);

const product4 = {
    title: "Producto prueba 2",
}

productManager.addProduct(product4);

console.log({ products });

const productSearched = productManager.getProductById(1);
console.log({ productSearched });

const productNotFounded = productManager.getProductById(5);
console.log({ productNotFounded });