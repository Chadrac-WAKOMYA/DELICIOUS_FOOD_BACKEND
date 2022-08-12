const { ValidationError, UniqueConstraintError } = require('sequelize')
const { Agence } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/agences', (req, res) => {
    Agence.create(req.body)
      .then(agence => {
        const message = `L\'agence ${req.body.id} a bien été créée.`
        res.json({ message, data: agence })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "L\'agence n\'a pas pu etre ajoutee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}