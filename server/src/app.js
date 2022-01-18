require('./database')
const express = require('express')
const cors = require("cors")

const app = express()

app.set('port', process.env.PORT || 3000)


app.get('/', (req, res) => {
    res.send('Pagina principal')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/persona", require('./routes/banco.routes'))


module.exports = app