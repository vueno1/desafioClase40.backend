const mongoose = require("mongoose")
const { Schema } = mongoose

const mensajeSchema = new Schema({
    nombre: String, 
    avatar: String, 
    mensaje: String,
    type: String
})

const Mensaje = mongoose.model("mensaje", mensajeSchema)
module.exports = Mensaje