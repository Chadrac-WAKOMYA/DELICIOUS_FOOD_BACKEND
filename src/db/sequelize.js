const { Sequelize, DataTypes } = require('sequelize')
const ClientModel = require('../models/client')
const BaremeModel = require('../models/baremeLivraison')
const CommandeModel = require('../models/commande')
const AgenceModel = require('../models/agence')
const CategorieProduitModel = require('../models/categorieProduit')
const ProduitModel = require('../models/produit')
const ImageProduitModel = require('../models/imageProduit')
const DetailCommandeModel = require('../models/detailCommande')

const sequelize = new Sequelize('delicious_food_db', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const Client = ClientModel(sequelize,DataTypes)
const Bareme = BaremeModel(sequelize,DataTypes)
const Commande = CommandeModel(sequelize,DataTypes)
const Agence = AgenceModel(sequelize,DataTypes)
const CategorieProduit = CategorieProduitModel(sequelize,DataTypes)
const Produit = ProduitModel(sequelize,DataTypes)
const ImageProduit = ImageProduitModel(sequelize,DataTypes)
const DetailCommande  = DetailCommandeModel(sequelize,DataTypes)

const initDb = () => {
    return sequelize.sync({force: false}).then(_ => { 
        // Client.create({
        // }).then(client => console.log(client.toJSON()))
      console.log('La base de donnée a bien été initialisée !')
    })
  }

module.exports = { 
  initDb, Client, Bareme, Commande, Agence, CategorieProduit, Produit, ImageProduit, DetailCommande
}