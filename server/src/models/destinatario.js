const { Schema, model } = require('mongoose')

const destinatarioSchema = new Schema({
    nombre: {type: String, required: true},
    rut: {type: String, required: true},
    correo: {type: String, required: false},
    telefono: {type: Number, required: false},
    banco: {type: String, required: true},
    tipo_cuenta: {type: String, required: true},
    numero_cuenta: {type: Number, required: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('destinatario', destinatarioSchema)