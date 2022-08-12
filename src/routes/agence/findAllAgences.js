const { Agence } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/agences', (req, res) => {
    Agence.findAll()
      .then(agences => {
        const message = 'La liste d\'agences a bien été récupérée.'
        res.json({ message, data: agences })
      })
      .catch(error => {
        const message = "La liste d\'agences n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}