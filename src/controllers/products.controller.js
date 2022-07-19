const { getProducts, createProducts } = require("../services/product.service");

async function getProductsController(req, res) {
  const p = req.query
  const categoria = p.categoria
  const products = await getProducts(categoria);
  res.send(products)
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