const { Commande } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/commandes/:id', (req, res) => {
    Commande.findByPk(req.params.id)
      .then(commande => {
        if(commande === null){
            const message = "La commande demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Une commande a bien été trouvée.'
        res.json({ message, data: commande })
      })
      .catch(error => {
        const message = "La commande n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}