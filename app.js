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
    
// Ici nos futurs point de terminaison
require('./src/routes/client/createClient')(app)
require('./src/routes/client/findAllClients')(app)
require('./src/routes/client/updateClient')(app)
require('./src/routes/client/findClientByPK')(app)
require('./src/routes/client/deleteClient')(app)

require('./src/routes/bareme/createBareme')(app)
require('./src/routes/bareme/findAllBaremes')(app)
require('./src/routes/bareme/findAllBaremeByPK')(app)


app.get('/delicious_food_api/home', (req, res) => {
    res.json({ msg: 'server runs well'})
})

app.listen(port,()=>console.log(`Notre application Node est demaree sur : http://localhost:${port}`))