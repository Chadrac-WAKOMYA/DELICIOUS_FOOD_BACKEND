const { Produit } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/produits/:id', (req, res) => {
    const id = req.params.id
    Produit.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Produit.findByPk(id).then(produit => {
        if(produit === null){
            const message = "Le produit demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `Le produit ${produit.id} a bien été modifié.`
        res.json({message, data: produit })
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
        const message = "Le produit n\'a pas pu etre modifié, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}