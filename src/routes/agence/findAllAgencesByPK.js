const { Agence } = require('../../db/sequelize')
  
module.exports = (app) => {
  app.get('/delicious_food_api/agences/:id', (req, res) => {
    Agence.findByPk(req.params.id)
      .then(agence => {
        if(agence === null){
            const message = "L'\ agence demandée n\'existe pas, essayez avec un autre identifiant"
            res.status(404).json({message})
        }
        const message = 'Une agence a bien été trouvée.'
        res.json({ message, data: agence })
      })
      .catch(error => {
        const message = "L'\ agence n\'a pas pu etre recuperée, reessayez dans quelques instants"
        res.status(500).json({message, data: error})
      })
  })
}