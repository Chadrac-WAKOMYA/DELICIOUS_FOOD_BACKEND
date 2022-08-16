const { CategorieProduit } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/categorieProduits/:id', (req, res) => {
    CategorieProduit.findByPk(req.params.id).then(categorieProduit => {
        if(categorieProduit === null){
            const message = "La categorie du produit demandee n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const categorieProduitDeleted = categorieProduit;
        return CategorieProduit.destroy({
            where: { id: categorieProduit.id }
        })
        .then(_ => {
            const message = `La categorie du produit avec l'identifiant n°${categorieProduitDeleted.id} a bien été supprimée.`
            res.json({message, data: categorieProduitDeleted })
        })
    })
    .catch(error => {
        const message = "La categorie du produit n\'a pas pu etre supprimee, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}