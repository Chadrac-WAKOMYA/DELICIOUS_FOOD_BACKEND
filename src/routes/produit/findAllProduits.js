const { Produit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/produits', (req, res) => {
    Produit.findAll()
      .then(produits => {
        const message = 'La liste de produits a bien été récupérée.'
        res.json({ message, data: produits })
      })
      .catch(error => {
        const message = "La liste de produits n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}