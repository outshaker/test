'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey : "id"})
    }
  };
  User.init({
    nickname: DataTypes.STRING, 
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true, 
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true, 
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: true, 
        notEmpty: true,
        isEmail: true,
      }
    },
    user_level: { 
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    picture_url: DataTypes.STRING,
    background_pic_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};