module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_commande', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateCommande: {
            type: DataTypes.timestamps,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'dateCommande\' ne doit pas être vide' },
                notNull : { msg: '\'dateCommande\' est une propriété requise' }
            }
        },
        montant: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'montant\' ne doit pas être vide' },
                notNull : { msg: '\'montant\' est une propriété requise' }
            }
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'longitude\' ne doit pas être vide' },
                notNull : { msg: '\'longitude\' est une propriété requise' }
            }
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'latitude\' ne doit pas être vide' },
                notNull : { msg: '\'latitude\' est une propriété requise' }
            }
        },
        distanceKm: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'distanceKm\' ne doit pas être vide' },
                notNull : { msg: '\'distanceKm\' est une propriété requise' }
            }
        },
        refClient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refClient\' est une propriete requise' }
            },
        },
        refBareme: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refBareme\' est une propriete requise' }
            },
        }
        
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }