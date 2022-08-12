const { Bareme } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/baremes', (req, res) => {
    Bareme.findAll()
      .then(baremes => {
        const message = 'La liste de baremes a bien été récupérée.'
        res.json({ message, data: baremes })
      })
      .catch(error => {
        const message = "La liste de baremes n\'a pas pu etre reperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}