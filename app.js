const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

app
    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()
    
// Ici nous placerons nos futurs point de terminaison
require('./src/routes/client/createClient')(app)
require('./src/routes/client/findAllClients')(app)


app.get('/delicious_food_api/home', (req, res) => {
    res.json({ msg: 'server runs well'})
})

app.listen(port,()=>console.log(`Notre application Node est demaree sur : http://localhost:${port}`))