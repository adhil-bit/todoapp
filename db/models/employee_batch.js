'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_Batch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_Batch.init({
    batch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee_Batch',
  });
  return employee_Batch;
};