'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderCart.hasMany(models.ProductList)
    }
  }
  OrderCart.init({
    customer: DataTypes.STRING,
    address: DataTypes.STRING,
    ProductListId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderCart',
  });
  return OrderCart;
};