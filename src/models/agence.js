module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tb_agence', {
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
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : { msg: '\'adresse\' ne doit pas être vide' },
                notNull : { msg: '\'adresse\' est une propriété requise' }
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
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isUrl : { msg: 'Utiliser uniquement les URL valides pour les images' },
                notNull : { msg: '\'logo\' est une propriete requise' }
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
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt : { msg: 'Uniquement les nombres entiers sont valides' },
                notNull : { msg: '\'active\' est une propriete requise' }
            },
        },

    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }