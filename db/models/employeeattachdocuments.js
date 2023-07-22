'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeAttachDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeAttachDocuments.belongsTo(models.Employee_Masters, {
        foreignKey: 'employee_FK'
    });
    }
  }
  EmployeeAttachDocuments.init({
    employeeDocType: DataTypes.STRING,
    employeeDocUrl: DataTypes.STRING,
    employee_FK: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeAttachDocuments',
  });
  return EmployeeAttachDocuments;
};