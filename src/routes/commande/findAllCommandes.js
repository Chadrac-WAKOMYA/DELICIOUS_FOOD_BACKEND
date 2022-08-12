const { Commande } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/commandes', (req, res) => {
    Commande.findAll()
      .then(commandes => {
        const message = 'La liste de commandes a bien été récupérée.'
        res.json({ message, data: commandes })
      })
      .catch(error => {
        const message = "La liste de commandes n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}