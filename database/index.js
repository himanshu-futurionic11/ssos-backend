"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require(__dirname + "/config.js");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options
);

const modelsDirectory = path.join(__dirname, "models");

fs.readdirSync(modelsDirectory)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    console.log(path.join(modelsDirectory, file));
    const model = require(path.join(modelsDirectory, file))(
      sequelize,
      Sequelize
    );
    db[model.name] = model;
  });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
