const { ValidationError, UniqueConstraintError } = require('sequelize')
const { Bareme } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/baremes', (req, res) => {
    Bareme.create(req.body)
      .then(bareme => {
        const message = `Le bareme ${req.body.name} a bien été crée.`
        res.json({ message, data: bareme })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le bareme n\'a pas pu etre ajoute, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}