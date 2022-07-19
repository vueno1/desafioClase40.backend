const { getMessage, createMessage } = require("../services/message.service");

async function getMessageController(req, res) {
  const m = req.query
  const categoria = m.categoria
  const message = await getMessage(categoria);
  res.send(message)

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