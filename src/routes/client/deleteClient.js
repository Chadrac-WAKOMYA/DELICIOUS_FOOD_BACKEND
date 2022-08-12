const { Client } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.delete('/delicious_food_api/clients/:id', (req, res) => {
    Client.findByPk(req.params.id).then(client => {
        if(client === null){
            const message = "Le client demande n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const clientDeleted = client;
        return Client.destroy({
            where: { id: client.id }
        })
        .then(_ => {
            const message = `Le client avec l'identifiant n°${clientDeleted.id} a bien été supprimé.`
            res.json({message, data: clientDeleted })
        })
    })
    .catch(error => {
        const message = "Le client n\'a pas pu etre supprime, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}