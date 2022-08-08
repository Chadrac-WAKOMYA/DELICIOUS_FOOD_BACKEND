module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_bareme_livraison', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        minKm: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'minKm\' ne doit pas être vide' },
                notNull : { msg: '\'minKm\' est une propriété requise' }
            }
        },
        maxKm: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'maxKm\' ne doit pas être vide' },
                notNull : { msg: '\'maxKm\' est une propriété requise' }
            }
        },
        montant: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'montant\' ne doit pas être vide' },
                notNull : { msg: '\'montant\' est une propriété requise' }
            }
        }
        
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }