const { Agence } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/agences/:id', (req, res) => {
    const id = req.params.id
    Agence.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Agence.findByPk(id).then(agence => {
        if(agence === null){
            const message = "L\' agence demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `L\' agence n°${agence.id} a bien été modifiée.`
        res.json({message, data: agence })
      })
    })
    .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "L\' agence n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}