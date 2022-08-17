const { ImageProduit } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/imageProduits/:id', (req, res) => {
    ImageProduit.findByPk(req.params.id).then(imageProduit => {
        if(imageProduit === null){
            const message = "L image du produit demandee n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const imageProduitDeleted = imageProduit;
        return ImageProduit.destroy({
            where: { id: imageProduitDeleted.id }
        })
        .then(_ => {
            const message = `L image du produit avec l'identifiant n°${imageProduitDeleted.id} a bien été supprimée.`
            res.json({message, data: imageProduitDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "L image du produit n\'a pas pu etre supprimee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}