'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee_masters_training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee_masters_training.belongsTo(models.franchise, {
        foreignKey: 'franchise_FK'
    });
    }
  }
  Employee_masters_training.init({
    trainingName: DataTypes.STRING,
    trainingLocation: DataTypes.STRING,
    trainingStartDate: DataTypes.DATE,
    trainingEndDate: DataTypes.DATE,
    employee_FK: DataTypes.STRING,
    franchise_FK: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee_masters_training',
  });
  return Employee_masters_training;
};