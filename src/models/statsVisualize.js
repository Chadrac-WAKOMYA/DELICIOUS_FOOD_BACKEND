module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_stats_visualize', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateStat: {
            type: DataTypes.timestamps,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'dateStat\' ne doit pas être vide' },
                notNull : { msg: '\'dateStat\' est une propriété requise' }
            }
        },
        isProductCheking: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'isProductCheking\' ne doit pas être vide' },
                notNull : { msg: '\'isProductCheking\' est une propriété requise' }
            }
        },
        isRestaurantCheking: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'isRestaurantCheking\' ne doit pas être vide' },
                notNull : { msg: '\'isRestaurantCheking\' est une propriété requise' }
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
        refRestaurant: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refRestaurant\' est une propriete requise' }
            },
        },
        refProduit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refProduit\' est une propriete requise' }
            },
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }