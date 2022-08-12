const { Bareme } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/baremes/:id', (req, res) => {
    Bareme.findByPk(req.params.id).then(bareme => {
        if(bareme === null){
            const message = "Le bareme demande n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const baremeDeleted = bareme;
        return Bareme.destroy({
            where: { id: bareme.id }
        })
        .then(_ => {
            const message = `Le bareme avec l'identifiant n°${baremeDeleted.id} a bien été supprimé.`
            res.json({message, data: baremeDeleted })
        })
    })
    .catch(error => {
        const message = "Le bareme n\'a pas pu etre supprime, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}