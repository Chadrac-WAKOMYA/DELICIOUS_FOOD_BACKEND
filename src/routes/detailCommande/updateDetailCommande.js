const { DetailCommande } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.put('/delicious_food_api/detailCommandes/:id', (req, res) => {
    const id = req.params.id
    DetailCommande.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return DetailCommande.findByPk(id).then(detailCommande => {
        if(detailCommande === null){
            const message = "Le detail demandé n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = `Le detail de la commande ${detailCommande.id} a bien été modifié.`
        res.json({message, data: detailCommande })
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
        const message = "Le detail de la commande n\'a pas pu etre modifié, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}