const { getProducts, createProducts } = require("../services/product.service");

async function getProductsController(req, res) {
  const products = await getProducts();
  res.render("index", {
    products: products
  })
}

async function postProductsController(req, res) {
    try {
        const products = await req.body;
        await createProducts(products);
        res.send(products)

    } catch (e) {
        console.log(e);
    }
}

module.exports = { getProductsController, postProductsController };