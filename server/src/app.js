require('./database')
const express = require('express')
const cors = require('cors');

const app = express()


app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('API Kevin Tobar Moore')
=======
    res.send('')
>>>>>>> 4248459f89ca0b261c3e891506036f7a80a7c2e8
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/persona", require('./routes/banco.routes'))

module.exports = app
