const Factory = require("../daos/factory.dao")

module.exports = class messageDTO {

    constructor(messageDTO) {
        this.repository = messageDTO
    }

    getDTO(m) {
      try{
        const mostrar = Factory.create(m)
        const mostrarDB = mostrar.mostrar()
        return  mostrarDB
      }catch(e) {
        console.log(e.message);
      }
    }
    
    createDTO(m) {
      try{
        const categoria = m.type
        m.sorteo = Math.floor(Math.random()*20)
        const guardado = Factory.create(categoria)
        guardado.guardar(m)
        return guardado
      }catch(e){
        console.log(e.message);
      }
    }
}
