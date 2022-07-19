const { Router } = require("express")

const {
    getMessageController,
    postMessageController
    } = require("../controllers/message.controller")

const messageRouter = new Router()

messageRouter.get("/api", getMessageController)
messageRouter.post("/api/message", postMessageController)

module.exports = messageRouter


