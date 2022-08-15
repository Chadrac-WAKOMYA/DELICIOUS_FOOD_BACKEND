const { StatsVisualize } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/statVisualizes', (req, res) => {
    StatsVisualize.findAll()
      .then(statsVisualizes => {
        const message = 'La liste de statsVisualize a bien été récupérée.'
        res.json({ message, data: statsVisualizes })
      })
      .catch(error => {
        const message = "La liste de statsVisualize n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}