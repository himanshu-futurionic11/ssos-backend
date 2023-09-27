"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ClientDetails.belongsTo(models.Clients, {
        foreignKey: "clientId",
        as: "client",
      });
      models.ClientDetails.belongsTo(models.ClientLocations, {
        foreignKey: "clientLocationId",
        as: "clientLocation",
      });
    }
  }
  ClientDetails.init(
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
      clientLocationId: {
        type: DataTypes.INTEGER,
        field: "clientLocationId",
        references: {
          model: {
            tableName: "clientLocations",
          },
          key: "id",
        },
      },
      heading: DataTypes.STRING,
      detail: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ClientDetails",
      tableName: "clientDetails",
    }
  );
  return ClientDetails;
};
