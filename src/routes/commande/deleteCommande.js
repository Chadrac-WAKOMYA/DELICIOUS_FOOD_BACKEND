const { Commande } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/commandes/:id', (req, res) => {
    Commande.findByPk(req.params.id).then(commande => {
        if(commande === null){
            const message = "La commande demandee n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const commandeDeleted = commande;
        return Commande.destroy({
            where: { id: commandeDeleted.id }
        })
        .then(_ => {
            const message = `La commande avec l'identifiant n°${commandeDeleted.id} a bien été supprimée.`
            res.json({message, data: commandeDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "La commande n\'a pas pu etre supprimee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}