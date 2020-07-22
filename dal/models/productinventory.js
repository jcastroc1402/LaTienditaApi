"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductInventory.hasMany(models.ProductUnit, {
        foreignKey: "productInventoryId",
        as: "ProductUnits",
      });
      ProductInventory.belongsTo(models.Product);
    }
  }
  ProductInventory.init(
    {
      productName: DataTypes.STRING,
      branchOffice: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      status: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductInventory",
    }
  );
  return ProductInventory;
};
