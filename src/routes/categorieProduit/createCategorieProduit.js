const { ValidationError, UniqueConstraintError } = require('sequelize')
const { CategorieProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.post('/delicious_food_api/categorieProduits', (req, res) => {
    CategorieProduit.create(req.body)
      .then(categorieProduit => {
        const message = `La catégorie ${req.body.id} a bien été créée.`
        res.json({ message, data: categorieProduit })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "La catégorie n\'a pas pu etre ajoutee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}