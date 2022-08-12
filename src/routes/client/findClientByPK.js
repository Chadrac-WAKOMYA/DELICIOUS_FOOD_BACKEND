const { Client } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/clients/:id', (req, res) => {
    Client.findByPk(req.params.id)
      .then(client => {
        if(client === null){
            const message = "Le client demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Un client a bien été trouvé.'
        res.json({ message, data: client })
      })
      .catch(error => {
        const message = "Le client n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}