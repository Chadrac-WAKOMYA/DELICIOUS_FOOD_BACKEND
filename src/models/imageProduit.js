module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_image_produit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl : { msg: 'Utiliser uniquement les URL valides pour les images' },
                notNull : { msg: '\'image\' est une propriete requise' }
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
                isInt : { msg: 'Uniquement les nombres entiers sont valides pour refAgence' },
                notNull : { msg: '\'refProduit\' est une propriete requise' }
            },
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }