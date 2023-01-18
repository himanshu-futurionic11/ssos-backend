"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clients.init(
    {
        imsrc:DataTypes.STRING,
        title:DataTypes.STRING,
        name:DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clients",
      tableName:'clients',
    }
  );
  return Clients;
};