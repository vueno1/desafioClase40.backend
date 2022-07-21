const messageDTO = require("../repositories/message.repository")
const mensaje = new messageDTO()

async function getMessage(m) {
  try{
    return await mensaje.getDTO(m)
  }catch(e) {
    console.log(e.message);
  }
}

async function createMessage(m) {
  try{
    return await mensaje.createDTO(m)
  }catch(e){
    console.log(e.message);
  }
}

module.exports = { getMessage, createMessage };
