const { Produit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/produits/:id', (req, res) => {
    Produit.findByPk(req.params.id)
      .then(produit => {
        if(produit === null){
            const message = "Le produit demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Un produit a bien été trouvée.'
        res.json({ message, data: produit })
      })
      .catch(error => {
        const message = "Le produit n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}