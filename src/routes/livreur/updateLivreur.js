const { Livreur } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/livreurs/:id', (req, res) => {
    const id = req.params.id
    Livreur.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Livreur.findByPk(id).then(livreur => {
        if(livreur === null){
            const message = "Le livreur demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `Le livreur ${livreur.id} a bien été modifiée.`
        res.json({message, data: livreur })
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
        const message = "Le livreur n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}