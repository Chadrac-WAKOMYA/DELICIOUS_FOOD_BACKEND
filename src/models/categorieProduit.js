module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_categorie_produit', {
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
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }