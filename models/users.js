'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.messages)
    }
  };
  users.init({
    idusers: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING,
    birthday: DataTypes.DATE,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};