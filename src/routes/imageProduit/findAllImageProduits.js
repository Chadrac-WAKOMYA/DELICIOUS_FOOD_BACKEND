const { ImageProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/imageProduits', (req, res) => {
    ImageProduit.findAll()
      .then(imageProduits => {
        const message = 'La liste des iamges de produits a bien été récupérée.'
        res.json({ message, data: imageProduits })
      })
      .catch(error => {
        const message = "La liste des images de produits n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}