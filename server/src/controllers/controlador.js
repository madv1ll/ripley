const controlador = {}
const Destinatario = require('../models/destinatario')
//Usuario
controlador.getUsuario = (req, res) => {}
controlador.createUsuario = (req, res) => {}
controlador.editUsuario = (req, res) => {}
controlador.deleteUsuario = (req, res) => {}
//Destinatario
controlador.getDestinatario = async (req, res) => {
    //modificar para buscador
    const destinatarios = await Destinatario.find()
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
controlador.getTransferencia = (req, res) => {
    res.send('Historial Transferencias')
}
controlador.createTransferencia = (req, res) => {
    res.send('Crear Transferencia')
}
//controlador.editTransferencia = (req, res) => {}
//controlador.deleteTransferencia = (req, res) => {}

module.exports = controlador