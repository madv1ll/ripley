const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ripley')
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log(err))