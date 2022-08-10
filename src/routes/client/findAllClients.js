const { Client } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/clients', (req, res) => {
    Client.findAll()
      .then(clients => {
        const message = 'La liste de clients a bien été récupérée.'
        res.json({ message, data: clients })
      })
      .catch(error => {
        const message = "La liste de clients n\'a pas pu etre reperee, reessayer un peu plus tard"
        res.status(500).json({message, data: error})
      })
  })
}