const Factory = require("../daos/factory.dao")

async function getProducts(p) {
  try{
    const categoria = p
    const mostrar = await Factory.create(categoria)
    const mostrarDB = await mostrar.mostrar()
    return  mostrarDB
  }catch(e) {
    console.log(e.message);
  }
}

async function createProducts(p) {
  try{
    const categoria = p.type
    const guardado = await Factory.create(categoria)
    await guardado.guardar(p)
    return guardado
  }catch(e){
    console.log(e.message);
  }
}

module.exports = { getProducts, createProducts };
