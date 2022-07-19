const mongoose = require("mongoose")
const { Schema } = mongoose

const productoSchema = new Schema({
    nombre: String, 
    foto: String, 
    precio: Number,
    type: String
})

const Producto = mongoose.model("producto", productoSchema)
module.exports = Producto