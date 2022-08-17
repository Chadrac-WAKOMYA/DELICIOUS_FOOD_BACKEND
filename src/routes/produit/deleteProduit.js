const { Produit } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/produits/:id', (req, res) => {
    Produit.findByPk(req.params.id).then(produit => {
        if(produit === null){
            const message = "Le produit demande n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const produitDeleted = produit;
        return Produit.destroy({
            where: { id: produitDeleted.id }
        })
        .then(_ => {
            const message = `Le produit avec l'identifiant n°${produitDeleted.id} a bien été supprimé.`
            res.json({message, data: produitDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le produit n\'a pas pu etre supprime, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}