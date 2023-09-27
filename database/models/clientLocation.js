"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientLocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ClientLocations.belongsTo(models.Clients, {
        foreignKey: "clientId",
        as: "client",
      });
    }
  }
  ClientLocations.init(
    {
      clientId: {
        type: DataTypes.INTEGER,
        field: "clientId",
        references: {
          model: {
            tableName: "clients",
          },
          key: "id",
        },
      },
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ClientLocations",
      tableName: "clientLocations",
    }
  );
  return ClientLocations;
};
