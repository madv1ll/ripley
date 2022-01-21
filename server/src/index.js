const app = require('./app')
require('dotenv').config({path: 'variables.env'})

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server on port', port)
})
