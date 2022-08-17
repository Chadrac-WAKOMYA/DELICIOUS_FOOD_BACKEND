const { StatsVisualize } = require('../../db/sequelize')
const { ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/statVisualizes/:id', (req, res) => {
    StatsVisualize.findByPk(req.params.id).then(statsVisualize => {
        if(statsVisualize === null){
            const message = "La statsVisualize demandee n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const statsVisualizeDeleted = statsVisualize;
        return StatsVisualize.destroy({
            where: { id: statsVisualizeDeleted.id }
        })
        .then(_ => {
            const message = `La statsVisualize avec l'identifiant n°${statsVisualizeDeleted.id} a bien été supprimée.`
            res.json({message, data: statsVisualizeDeleted })
        })
    })
    .catch(error => {
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "La statsVisualize n\'a pas pu etre supprimee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}