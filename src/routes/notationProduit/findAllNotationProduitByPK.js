const { NotationProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/notationProduits/:id', (req, res) => {
    NotationProduit.findByPk(req.params.id)
      .then(notationProduit => {
        if(notationProduit === null){
            const message = "La notationProduit demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Une notationProduit a bien été trouvée.'
        res.json({ message, data: notationProduit })
      })
      .catch(error => {
        const message = "La notationProduit n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}