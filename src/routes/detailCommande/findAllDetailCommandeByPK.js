const { DetailCommande } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/detailCommandes/:id', (req, res) => {
    DetailCommande.findByPk(req.params.id)
      .then(detailCommande => {
        if(detailCommande === null){
            const message = "Le detail de la commande demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Un detail de commande a bien été trouvé.'
        res.json({ message, data: detailCommande })
      })
      .catch(error => {
        const message = "Le detail de la commande n\'a pas pu etre recuperé, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}