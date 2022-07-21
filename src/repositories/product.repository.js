const Factory = require("../daos/factory.dao")

module.exports = class productoDTO {

    constructor(productoDTO) {
        this.repository = productoDTO
    }

    getDTO(p) {
      try{
        const mostrar = Factory.create(p)
        const mostrarDB = mostrar.mostrar()
        return  mostrarDB
      }catch(e) {
        console.log(e.message);
      }
    }
    
    createDTO(p) {
      try{
        const categoria = p.type

        if(p.precio <=20){
            p.descuento = "precio con descuento"
        }

        const guardado = Factory.create(categoria)
        guardado.guardar(p)
        return guardado
      }catch(e){
        console.log(e.message);
      }
    }

}


// module.exports = { getDao, createDao };
