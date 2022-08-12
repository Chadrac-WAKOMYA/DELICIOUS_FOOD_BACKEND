const { Bareme } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/baremes/:id', (req, res) => {
    Bareme.findByPk(req.params.id)
      .then(bareme => {
        if(bareme === null){
            const message = "Le bareme demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Un bareme a bien été trouvé.'
        res.json({ message, data: bareme })
      })
      .catch(error => {
        const message = "Le bareme n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}