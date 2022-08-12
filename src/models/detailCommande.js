module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_detail_commande', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qteCommande: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour qteStock' },
                notNull : { msg: '\'qteCommande\' est une propriete requise' }
            },
        },
        montant: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'montant\' ne doit pas être vide' },
                notNull : { msg: '\'montant\' est une propriété requise' }
            }
        },
        refCommande: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model : "tb_commandes",
                key : "id"
            },
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refCommande\' est une propriete requise' }
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
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refCategorie' },
                notNull : { msg: '\'refProduit\' est une propriete requise' }
            },
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }