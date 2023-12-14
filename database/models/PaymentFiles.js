"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.PaymentFiles.belongsTo(models.Clients, {
        foreignKey: "client_id",
        as: "client",
      });
    }
  }
  PaymentFiles.init(
    {
      file: DataTypes.STRING,
      clientId: {
        type: DataTypes.INTEGER,
        field: "client_id",
        references: {
          model: {
            tableName: "clients",
          },
          key: "id",
        },
      },
      location: DataTypes.STRING,
      fileType: DataTypes.STRING,
      month: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PaymentFiles",
      tableName: "PaymentFiles",
    }
  );
  return PaymentFiles;
};
