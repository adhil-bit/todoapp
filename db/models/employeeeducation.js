'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employeeEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employeeEducation.belongsTo(models.Employee_Masters, {
        foreignKey: 'employee_FK'
    });
    }
  }
  employeeEducation.init({
    employeeCourseType: DataTypes.STRING,
    employeeCollegeOrSchool: DataTypes.STRING,
    year: DataTypes.DATE,
    employee_FK: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employeeEducation',
  });
  return employeeEducation;
};