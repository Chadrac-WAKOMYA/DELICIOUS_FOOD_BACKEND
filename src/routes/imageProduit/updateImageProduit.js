const { ImageProduit } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/imageProduits/:id', (req, res) => {
    const id = req.params.id
    ImageProduit.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return ImageProduit.findByPk(id).then(imageProduit => {
        if(imageProduit === null){
            const message = "L image du produit demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `L image du produit ${imageProduit.id} a bien été modifiée.`
        res.json({message, data: imageProduit })
      })
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
        const message = "L image du produit n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}