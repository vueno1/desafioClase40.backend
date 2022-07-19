const ClaseProducto = require("./product.dao")
const ClaseMensaje = require("./mensaje.dao")

class ClaseFactory {
    
    create(type) {
          
        switch(type) {
            case "producto": 
                return new ClaseProducto()

            case "mensaje": 
                return new ClaseMensaje()
        }
    }
}

const Factory = new ClaseFactory()

module.exports = Factory