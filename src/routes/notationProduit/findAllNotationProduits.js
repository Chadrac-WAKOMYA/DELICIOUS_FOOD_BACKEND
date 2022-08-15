const { NotationProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/notationProduits', (req, res) => {
    NotationProduit.findAll()
      .then(notationProduits => {
        const message = 'La liste de notations de produits a bien été récupérée.'
        res.json({ message, data: notationProduits })
      })
      .catch(error => {
        const message = "La liste de notations de produits n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}