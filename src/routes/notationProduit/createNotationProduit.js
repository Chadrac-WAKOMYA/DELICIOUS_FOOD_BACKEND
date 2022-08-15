const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { NotationProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/notationProduits', (req, res) => {
    NotationProduit.create(req.body)
      .then(notationProduits => {
        const message = `La notation du produit ${req.body.id} a bien été créée.`
        res.json({ message, data: notationProduits })
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
        const message = "La notation du produit n\'a pas pu etre ajoutee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}