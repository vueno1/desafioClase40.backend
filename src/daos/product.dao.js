const Producto = require("../models/producto.model")
const Container = require("./classFather")

class ClassProducto extends Container {
    constructor() {
        super(Producto)
    }   
}

module.exports = ClassProducto
