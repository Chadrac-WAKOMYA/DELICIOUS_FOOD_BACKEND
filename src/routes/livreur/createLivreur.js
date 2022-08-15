const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { Livreur } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/livreurs', (req, res) => {
    Livreur.create(req.body)
      .then(livreur => {
        const message = `Le livreur ${req.body.id} a bien été créé.`
        res.json({ message, data: livreur })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le statsVisualize n\'a pas pu etre ajoute, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}