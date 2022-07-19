const Factory = require("../daos/factory.dao")

async function getMessage() {
  try{
    // return await objeto.mostrar()
  }catch(e) {
    console.log(e.message);
  }
}

async function createMessage(m) {
  try{
    const categoria = m.type
    const guardado = await Factory.create(categoria)
    await guardado.guardar(m)
    return guardado
  }catch(e){
    console.log(e.message);
  }
}

module.exports = { getMessage, createMessage };
