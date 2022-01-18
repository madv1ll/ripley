const { Schema, model } = require('mongoose')

const transferenciaSchema = new Schema({
    rut_destinatario: {type: String, required: true},
    monto: {type: Number, required: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('transferencia', transferenciaSchema)