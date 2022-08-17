const { Commande } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/commandes/:id', (req, res) => {
    const id = req.params.id
    Commande.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Commande.findByPk(id).then(commande => {
        if(commande === null){
            const message = "La commande demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `La commande ${commande.id} a bien été modifiée.`
        res.json({message, data: commande })
      })
    })
    .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof ForeignKeyConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "La commande n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}