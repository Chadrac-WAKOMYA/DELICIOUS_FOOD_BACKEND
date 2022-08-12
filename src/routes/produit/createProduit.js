const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { Produit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/produits', (req, res) => {
    Produit.create(req.body)
      .then(produit => {
        const message = `Le produit ${req.body.id} a bien été créé.`
        res.json({ message, data: produit })
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
        const message = "Le produit n\'a pas pu etre ajoute, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}