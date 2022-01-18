const controlador = {}
const Destinatario = require('../models/destinatario')
const Transferencia = require('../models/transferencia')

//Usuario
controlador.getUsuario = (req, res) => {}
controlador.createUsuario = (req, res) => {}
controlador.editUsuario = (req, res) => {}
controlador.deleteUsuario = (req, res) => {}
//Destinatario
controlador.getDestinatario = async (req, res) => {
    const destinatarios = await Destinatario.find()
    res.json(destinatarios)
}
controlador.listarDestinatario = async (req, res) => {
    const destinatarios = await Destinatario.findOne( {rut: req.params.rut})
    res.json(destinatarios)
}
controlador.createDestinatario = async (req, res) => {
    const newDestinatario = new Destinatario(req.body)
    console.log(newDestinatario)
    await newDestinatario.save()
    res.send({message: 'Destinatario Creado'})
}
controlador.editDestinatario = (req, res) => {}
controlador.deleteDestinatario = (req, res) => {}
//Transferencia
controlador.getTransferencia = async (req, res) => {
    const transferencias = await Transferencia.find()
    res.json(transferencias)
}
controlador.createTransferencia = async (req, res) => {
    const newTransferencia = new Transferencia(req.body)
    console.log(newTransferencia)
    await newTransferencia.save()
    res.send({message: 'Transferencia Realizada con Exito'})
}
//controlador.editTransferencia = (req, res) => {}
//controlador.deleteTransferencia = (req, res) => {}

module.exports = controlador