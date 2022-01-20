require('./database')
const express = require('express')
const cors = require("cors")

const app = express()


app.get('/', (req, res) => {
    res.send('Pagina principal')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/persona", require('./routes/banco.routes'))

//angular
app.use(express.static('public/dist'))

module.exports = app