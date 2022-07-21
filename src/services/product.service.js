const productoDTO = require("../repositories/product.repository")
const producto = new productoDTO()

async function getProducts(p) {
  try{
    console.log(p)
    return await producto.getDTO(p)
  
  }catch(e) {
    console.log(e.message);
  }
}

async function createProducts(p) {
  try{
    return await producto.createDTO(p)
 
  }catch(e){
    console.log(e.message);
  }
}

module.exports = { getProducts, createProducts };
