const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { DetailCommande } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/detailCommandes', (req, res) => {
    DetailCommande.create(req.body)
      .then(detailCommande => {
        const message = `Le detail du produit ${req.body.id} a bien été créé.`
        res.json({ message, data: detailCommande })
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
        const message = "Le detail du produit n\'a pas pu etre ajoute, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}