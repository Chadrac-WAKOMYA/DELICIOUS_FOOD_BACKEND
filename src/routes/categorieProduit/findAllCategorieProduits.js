const { CategorieProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/categorieProduits', (req, res) => {
    CategorieProduit.findAll()
      .then(categorieProduits => {
        const message = 'La liste de catégories de produit a bien été récupérée.'
        res.json({ message, data: categorieProduits })
      })
      .catch(error => {
        const message = "La liste de catégories de produit n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}