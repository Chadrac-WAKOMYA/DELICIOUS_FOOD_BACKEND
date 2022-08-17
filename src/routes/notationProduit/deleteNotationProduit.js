const { NotationProduit } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/notationProduits/:id', (req, res) => {
    NotationProduit.findByPk(req.params.id).then(notationProduit => {
        if(notationProduit === null){
            const message = "La notationProduit demandee n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const notationProduitDeleted = notationProduit;
        return NotationProduit.destroy({
            where: { id: notationProduitDeleted.id }
        })
        .then(_ => {
            const message = `La notationProduit avec l'identifiant n°${notationProduitDeleted.id} a bien été supprimée.`
            res.json({message, data: notationProduitDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "La notationProduit n\'a pas pu etre supprimee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}