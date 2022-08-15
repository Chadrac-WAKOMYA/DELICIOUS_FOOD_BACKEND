module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_livreur', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: 'Le nom est deja pris'},
            validate:{
                notEmpty : { msg: '\'nom\' ne doit pas être vide' },
                notNull : { msg: '\'nom\' est une propriété requise' }
            }
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: 'Le nom est deja pris'},
            validate:{
                notEmpty : { msg: '\'prenom\' ne doit pas être vide' },
                notNull : { msg: '\'prenom\' est une propriété requise' }
            }
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'telephone\' ne doit pas être vide' },
                notNull : { msg: '\'telephone\' est une propriété requise' }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'password\' ne doit pas être vide' },
                notNull : { msg: '\'password\' est une propriété requise' }
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl : { msg: 'Utiliser uniquement les URL valides pour les images' },
                notNull : { msg: '\'image\' est une propriete requise' }
            }
          },
          lastConnection: {
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'lastConnection\' ne doit pas être vide' },
                notNull : { msg: '\'lastConnection\' est une propriété requise' }
            }
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
                notNull : { msg: '\'refAgence\' est une propriete requise' }
            },
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }