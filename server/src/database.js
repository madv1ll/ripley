const mongoose = require('mongoose')
//VARIABLE DE ENTORNO
require('dotenv').config({path: 'variables.env'})

mongoose.connect(process.env.DB_URL)
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log(err))