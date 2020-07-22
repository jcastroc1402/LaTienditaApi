"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductUnit.belongsTo(models.ProductInventory);
    }
  }
  ProductUnit.init(
    {
      productName: DataTypes.STRING,
      barcode: DataTypes.STRING,
      status: DataTypes.STRING,
      productInventoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductUnit",
    }
  );
  return ProductUnit;
};
