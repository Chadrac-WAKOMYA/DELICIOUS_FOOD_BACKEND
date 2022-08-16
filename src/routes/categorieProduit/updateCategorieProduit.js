const { CategorieProduit } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/categorieProduits/:id', (req, res) => {
    const id = req.params.id
    CategorieProduit.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return CategorieProduit.findByPk(id).then(categorieProduit => {
        if(categorieProduit === null){
            const message = "La categorie du produit demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `La categorie du produit n°${categorieProduit.id} a bien été modifiée.`
        res.json({message, data: categorieProduit })
      })
    })
    .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "La categorie du produit n\'a pas pu etre modifiée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}