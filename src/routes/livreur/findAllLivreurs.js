const { Livreur } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/livreurs', (req, res) => {
    Livreur.findAll()
      .then(livreurs => {
        const message = 'La liste de livreurs a bien été récupérée.'
        res.json({ message, data: livreurs })
      })
      .catch(error => {
        const message = "La liste de livreurs n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}