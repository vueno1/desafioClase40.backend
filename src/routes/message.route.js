const { Router } = require("express")

const {
    postMessageController
    } = require("../controllers/message.controller")

const messageRouter = new Router()

// routerProduct.get("/", getProductsController)
messageRouter.post("/api/message", postMessageController)

module.exports = messageRouter


