const Factory = require("../daos/factory.dao")

async function getProducts() {
  try{
    // return await objeto.mostrar()
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
