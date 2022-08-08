module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_client', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomComplet: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: 'Le nom est deja pris'},
            validate:{
                notEmpty : { msg: '\'nomComplet\' ne doit pas être vide' },
                notNull : { msg: '\'nomComplet\' est une propriété requise' }
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail : { msg: 'Email non valide' },
                notNull : { msg: '\'email\' est une propriété requise' }
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
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'adresse\' ne doit pas être vide' },
                notNull : { msg: '\'adresse\' est une propriété requise' }
            }
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl : { msg: 'Utiliser uniquement les URL valides pour les images' },
                notNull : { msg: '\'avatar\' est une propriete requise' }
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
        lastConnection: {
            type: DataTypes.timestamps,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'lastConnection\' ne doit pas être vide' },
                notNull : { msg: '\'lastConnection\' est une propriété requise' }
            }
        },
        isOnline: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'isOnline\' ne doit pas être vide' },
                notNull : { msg: '\'isOnline\' est une propriété requise' }
            }
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides' },
                notNull : { msg: '\'active\' est une propriete requise' }
            },
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
  }