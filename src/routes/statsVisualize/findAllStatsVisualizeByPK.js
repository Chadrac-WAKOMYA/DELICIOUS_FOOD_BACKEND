const { StatsVisualize } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/statVisualizes/:id', (req, res) => {
    StatsVisualize.findByPk(req.params.id)
      .then(statsVisualize => {
        if(statsVisualize === null){
            const message = "La statsVisualize demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Une statsVisualize a bien été trouvée.'
        res.json({ message, data: statsVisualize })
      })
      .catch(error => {
        const message = "La statsVisualize n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}