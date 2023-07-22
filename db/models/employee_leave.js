'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee_leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee_leave.belongsTo(models.Employee_Masters, {
        foreignKey: 'employee_FK'
    });
    Employee_leave.belongsTo(models.franchise, {
      foreignKey: 'franchise_FK'
  });
    }
  }
  Employee_leave.init({
    employee_FK: DataTypes.STRING,
    franchise_FK: DataTypes.STRING,
    fromDate: DataTypes.DATEONLY,
    toDate: DataTypes.DATEONLY,
    reason: DataTypes.STRING,
    leaveStatus: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    leaveCount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Employee_leave',
  });
  return Employee_leave;
};