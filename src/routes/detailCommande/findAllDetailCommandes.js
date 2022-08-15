const { DetailCommande } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/detailCommandes', (req, res) => {
    DetailCommande.findAll()
      .then(detailCommandes => {
        const message = 'La liste de details de produits a bien été récupérée.'
        res.json({ message, data: detailCommandes })
      })
      .catch(error => {
        const message = "La liste de details de produits n\'a pas pu etre recuperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}