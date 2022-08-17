const { Livreur } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/livreurs/:id', (req, res) => {
    Livreur.findByPk(req.params.id).then(livreur => {
        if(livreur === null){
            const message = "Le livreur demande n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const livreurDeleted = livreur;
        return Livreur.destroy({
            where: { id: livreurDeleted.id }
        })
        .then(_ => {
            const message = `Le livreur avec l'identifiant n°${livreurDeleted.id} a bien été supprimé.`
            res.json({message, data: livreurDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le livreur n\'a pas pu etre supprime, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}