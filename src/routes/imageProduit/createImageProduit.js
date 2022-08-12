const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { ImageProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/imageProduits', (req, res) => {
    ImageProduit.create(req.body)
      .then(imageProduit => {
        const message = `Le produit ${req.body.id} a bien été créé.`
        res.json({ message, data: imageProduit })
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
        const message = "L\'image du produit n\'a pas pu etre ajoutee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}