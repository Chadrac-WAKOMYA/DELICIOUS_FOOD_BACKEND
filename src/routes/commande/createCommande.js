const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { Commande } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/commandes', (req, res) => {
    Commande.create(req.body)
      .then(commande => {
        const message = `La commande ${req.body.id} a bien été créée.`
        res.json({ message, data: commande })
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
        const message = "La commande n\'a pas pu etre ajoutee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}