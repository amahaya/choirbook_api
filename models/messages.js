'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.messages.belongsTo(models.idusers, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  messages.init({
    idusers: DataTypes.INTEGER,
    titre: DataTypes.STRING,
    content: DataTypes.STRING,
    attachement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};