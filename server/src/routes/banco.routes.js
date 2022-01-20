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

router.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'../../public/dist/index.html'))
})
module.exports = router