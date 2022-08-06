const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('delicious_food_db', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})