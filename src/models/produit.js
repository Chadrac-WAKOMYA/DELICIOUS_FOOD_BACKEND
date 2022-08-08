module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_produit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: 'Le nom est deja pris'},
            validate:{
                notEmpty : { msg: '\'designation\' ne doit pas être vide' },
                notNull : { msg: '\'designation\' est une propriété requise' }
            }
        },
        qteStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour qteStock' },
                notNull : { msg: '\'qteStock\' est une propriete requise' }
            },
        },
        mainImage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl : { msg: 'Utiliser uniquement les URL valides pour les images' },
                notNull : { msg: '\'mainImage\' est une propriete requise' }
            }
        },
        refAgence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refAgence\' est une propriete requise' }
            },
        },
        refCategorie: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refCategorie' },
                notNull : { msg: '\'refCategorie\' est une propriete requise' }
            },
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }