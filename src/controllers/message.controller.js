const { getMessage, createMessage } = require("../services/message.service");

async function getMessageController(req, res) {
  const message = await getMessage();
  res.render("index", {
    products: message
  })
}

async function postMessageController(req, res) {
    try {
        const message = await req.body;
        await createMessage(message);
        res.send(message)

    } catch (e) {
        console.log(e);
    }
}

module.exports = { getMessageController, postMessageController };