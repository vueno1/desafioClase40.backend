const ClaseProducto = require("./product.dao")
const ClaseMensaje = require("./mensaje.dao")

class Singleton {
    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}

let obj = Singleton.getInstance()

class ClaseFactory {
    
    create(type) {
  
        switch(type) {
            case "producto": 
                obj = new ClaseProducto()
                return obj

            case "mensaje": 
                obj = new ClaseMensaje()
                return obj
        }
    }
}

const Factory = new ClaseFactory()
module.exports = Factory