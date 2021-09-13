'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {foreignKey:"user_id"})
      Post.hasMany(model.Picture, { foreignKey:"id"})
    }
  };
  Post.init({
    user_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    views: DataTypes.INTEGER,
    visited_time: DataTypes.DATE,
    is_published: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};