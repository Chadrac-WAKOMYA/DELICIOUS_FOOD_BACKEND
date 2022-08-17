const { ImageProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/imageProduits/:id', (req, res) => {
    ImageProduit.findByPk(req.params.id)
      .then(imageProduit => {
        if(imageProduit === null){
            const message = "L image du produit demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Une image a bien été trouvée.'
        res.json({ message, data: imageProduit })
      })
      .catch(error => {
        const message = "L image n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}