const { Livreur } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/livreurs/:id', (req, res) => {
    Livreur.findByPk(req.params.id)
      .then(livreur => {
        if(livreur === null){
            const message = "Le livreur demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Un livreur a bien été trouvé.'
        res.json({ message, data: livreur })
      })
      .catch(error => {
        const message = "Le livreur n\'a pas pu etre recuperé, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}