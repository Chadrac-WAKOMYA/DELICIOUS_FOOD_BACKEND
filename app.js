const express = require('express')

const app = express()
const port = 3000

app.get('/delicious_food_api/home', (req, res) => {
    res.json({ msg: 'server runs well'})
})

app.listen(port,()=>console.log(`Notre application Node est demaree sur : http://localhost:${port}`))