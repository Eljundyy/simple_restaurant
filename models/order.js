'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.orderDetail, {foreignKey: "order_id"});
    }
  }
  order.init({
    customer_name: DataTypes.STRING,
    total: {
      type: DataTypes.INTEGER,
      validate: {min: 0}
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};