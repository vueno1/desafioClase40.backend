const { Router } = require("express")

const {
    getProductsController,
    postProductsController
    } = require("../controllers/products.controller")

const routerProduct = new Router()

routerProduct.get("/api", getProductsController)
routerProduct.post("/api/productos", postProductsController)

module.exports = routerProduct


