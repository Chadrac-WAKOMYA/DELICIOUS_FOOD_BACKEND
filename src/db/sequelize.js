const { Sequelize, DataTypes } = require('sequelize')
const ClientModel = require('../models/client')

const sequelize = new Sequelize('delicious_food_db', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const Client = ClientModel(sequelize,DataTypes)

const initDb = () => {
    return sequelize.sync({force: true}).then(_ => { 
        // Client.create({
        // }).then(client => console.log(client.toJSON()))
      console.log('La base de donnée a bien été initialisée !')
    })
  }

module.exports = { 
  initDb, Client
}