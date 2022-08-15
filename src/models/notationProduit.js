module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_notation_produit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        note: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour qteStock' },
                notNull : { msg: '\'note\' est une propriete requise' }
            },
            min : {
                args: [0],
                msg: 'La note doit etre superieur ou egal a 0'
            },
            max : {
                args: [5],
                msg: 'La note doit etre inferieur ou egal a 99' 
            }
        },
        commentaire: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'commentaire\' ne doit pas être vide' },
                notNull : { msg: '\'commentaire\' est une propriété requise' }
            }
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
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }