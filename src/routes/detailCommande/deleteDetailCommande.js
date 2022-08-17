const { DetailCommande } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/detailCommandes/:id', (req, res) => {
    DetailCommande.findByPk(req.params.id).then(detailCommande => {
        if(detailCommande === null){
            const message = "Le detail de la commande demande n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const detailCommandeDeleted = detailCommande;
        return DetailCommande.destroy({
            where: { id: detailCommandeDeleted.id }
        })
        .then(_ => {
            const message = `Le detail de la commande avec l'identifiant n°${detailCommandeDeleted.id} a bien été supprimé.`
            res.json({message, data: detailCommandeDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le detail de la commande n\'a pas pu etre supprime, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}