const { Router } = require("express")

const {
    postProductsController
    } = require("../controllers/products.controller")

const routerProduct = new Router()

// routerProduct.get("/", getProductsController)
routerProduct.post("/api/productos", postProductsController)

module.exports = routerProduct


