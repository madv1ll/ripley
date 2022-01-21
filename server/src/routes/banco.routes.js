const { Router } = require('express')
const router = Router()
const controlador = require('../controllers/controlador')

//RUTAS

router.post('/nuevoDestinatario', controlador.createDestinatario)
router.get('/contactos', controlador.getDestinatario)
router.get('/contactos/:rut', controlador.listarDestinatario)
//Transferencias
router.post('/nuevaTransferencia', controlador.createTransferencia)
router.get('/historial', controlador.getTransferencia)

module.exports = router