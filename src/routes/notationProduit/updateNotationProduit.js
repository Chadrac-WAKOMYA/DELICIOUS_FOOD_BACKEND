const { NotationProduit } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/notationProduits/:id', (req, res) => {
    const id = req.params.id
    NotationProduit.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return NotationProduit.findByPk(id).then(notationProduit => {
        if(notationProduit === null){
            const message = "La notationProduit demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `La notationProduit ${notationProduit.id} a bien été modifiée.`
        res.json({message, data: notationProduit })
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
        const message = "La notationProduit n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}