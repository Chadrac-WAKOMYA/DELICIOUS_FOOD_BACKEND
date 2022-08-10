const { ValidationError, UniqueConstraintError } = require('sequelize')
const { Client } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/clients', (req, res) => {
    Client.create(req.body)
      .then(client => {
        const message = `Le client ${req.body.name} a bien été crée.`
        res.json({ message, data: client })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le client n\'a pas pu etre ajoute, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}