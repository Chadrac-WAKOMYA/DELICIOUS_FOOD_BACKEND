module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_stats_visualize', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateStat: {
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'dateStat\' ne doit pas être vide' },
                notNull : { msg: '\'dateStat\' est une propriété requise' }
            }
        },
        isProduitChecking: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'isProduitChecking\' ne doit pas être vide' },
                notNull : { msg: '\'isProduitChecking\' est une propriété requise' }
            }
        },
        isAgenceChecking: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'isAgenceChecking\' ne doit pas être vide' },
                notNull : { msg: '\'isAgenceChecking\' est une propriété requise' }
            }
        },
        refClient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model : "tb_clients",
                key : "id"
            },
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refClient' },
                notNull : { msg: '\'refClient\' est une propriete requise' }
            },
        },
        refAgence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model : "tb_agences",
                key : "id"
            },
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refRestaurant\' est une propriete requise' }
            },
        },
        refProduit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model : "tb_produits",
                key : "id"
            },
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refProduit' },
                notNull : { msg: '\'refProduit\' est une propriete requise' }
            },
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }