const { CategorieProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/categorieProduits/:id', (req, res) => {
    CategorieProduit.findByPk(req.params.id)
      .then(categorieProduit => {
        if(categorieProduit === null){
            const message = "La categorie du produit demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Une categorie a bien été trouvée'
        res.json({ message, data: categorieProduit })
      })
      .catch(error => {
        const message = "La categorie n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}