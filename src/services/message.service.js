const Factory = require("../daos/factory.dao")

async function getMessage(m) {
  try{
    const mostrar = await Factory.create(m)
    const mostrarDB = await mostrar.mostrar()
    return  mostrarDB
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
