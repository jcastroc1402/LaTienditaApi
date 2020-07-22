"use strict";

import path from "path";
import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import Sequelize from "sequelize";
const basename = _basename(__filename);
import currentEnv from "../../config/env";
const config = currentEnv.DB;
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    //const model = sequelize["import"](join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
