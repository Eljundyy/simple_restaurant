'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.menus, {foreignKey: "menu_id"});
      this.belongsTo(models.order, {foreignKey: "order_id"});
    }
  }
  orderDetail.init({
    menu_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    qty: {
      type: DataTypes.INTEGER,
      validate: {min: 1}
    },
    subtotal: {
      type: DataTypes.INTEGER,
      validate: {min: 0}
    }
  },
  {
    sequelize,
    modelName: 'orderDetail',
  });
  return orderDetail;
};