const { Client } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/clients/:id', (req, res) => {
    const id = req.params.id
    Client.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Client.findByPk(id).then(client => {
        if(client === null){
            const message = "Le client demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `Le client ${client.name} a bien été modifié.`
        res.json({message, data: client })
      })
    })
    .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le client n\'a pas pu etre modifié, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}