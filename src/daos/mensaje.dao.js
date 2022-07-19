const Mensaje = require("../models/message.model")
const Container = require("./classFather")

class ClassMensaje extends Container {
    constructor() {
        super(Mensaje)
    }
}

module.exports = ClassMensaje