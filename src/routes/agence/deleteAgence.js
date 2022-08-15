const { Agence } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/agences/:id', (req, res) => {
    Agence.findByPk(req.params.id).then(agence => {
        if(agence === null){
            const message = "L\'agence demandee n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const agenceDeleted = agence;
        return Agence.destroy({
            where: { id: agence.id }
        })
        .then(_ => {
            const message = `L\'agence avec l'identifiant n°${agenceDeleted.id} a bien été supprimée.`
            res.json({message, data: agenceDeleted })
        })
    })
    .catch(error => {
        const message = "L\'agence n\'a pas pu etre supprimee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}