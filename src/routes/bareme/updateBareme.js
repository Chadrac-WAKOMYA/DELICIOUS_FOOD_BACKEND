const { Bareme } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/baremes/:id', (req, res) => {
    const id = req.params.id
    Bareme.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Bareme.findByPk(id).then(bareme => {
        if(bareme === null){
            const message = "Le bareme demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `Le bareme n°${bareme.id} a bien été modifié.`
        res.json({message, data: bareme })
      })
    })
    .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "Le bareme n\'a pas pu etre modifié, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}