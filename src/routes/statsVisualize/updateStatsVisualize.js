const { StatsVisualize } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/statVisualizes/:id', (req, res) => {
    const id = req.params.id
    StatsVisualize.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return StatsVisualize.findByPk(id).then(statsVisualize => {
        if(statsVisualize === null){
            const message = "La statsVisualize demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `La statsVisualize ${statsVisualize.id} a bien été modifiée.`
        res.json({message, data: statsVisualize })
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
        const message = "La statsVisualize n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}