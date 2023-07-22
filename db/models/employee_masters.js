'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee_Masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee_Masters.belongsTo(models.franchise, {
        foreignKey: 'franchiseId_FK'
    });
  Employee_Masters.hasOne(models.EmployeeAttachDocuments, { foreignKey: 'employee_FK' });
  Employee_Masters.hasOne(models.employeeEducation, { foreignKey: 'employee_FK' });
  Employee_Masters.hasOne(models.Employee_masters_training, { foreignKey: 'employee_FK' });
  Employee_Masters.hasOne(models.Employee_leave, {foreignKey: 'employee_FK'});
  Employee_Masters.hasMany(models.Attendance, {foreignKey: 'employeeId'});
    }
    
  }
  Employee_Masters.init({
    employeeId:DataTypes.STRING,
    employeeName: DataTypes.STRING,
    employeeAge: DataTypes.INTEGER,
    employeeDOB: DataTypes.DATE,
    employeeGender: DataTypes.STRING,
    employeePhoneNo: DataTypes.STRING,
    employeeEmailId: DataTypes.STRING,
    employeeCourseName: DataTypes.STRING,
    employeeCourseBatch: DataTypes.STRING,
    employeeCourseStartDate: DataTypes.DATE,
    employeeCourseEndDate: DataTypes.DATE,
    employeePresentAddress: DataTypes.STRING,
    employeePermanentAddress: DataTypes.STRING,
    employeeAadhaarNumber: DataTypes.STRING,
    employeeTrainingName: DataTypes.STRING,
    employeeTrainingStartDate: DataTypes.DATE,
    employeeTrainingEndDate: DataTypes.DATE,
    employeeUserRole: DataTypes.STRING,
    employeePanNumber: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    employeeStatus: DataTypes.BOOLEAN,
    employeeParentName: DataTypes.STRING,
    employeeParentRelationship: DataTypes.STRING,
    employeeParentOccupation: DataTypes.STRING,
    employeeParentTelephoneNo: DataTypes.STRING,
    employeeParentMobileNo: DataTypes.STRING,
    employeePicUrl: DataTypes.STRING,
    franchiseName: DataTypes.STRING,
    franchiseLocation: DataTypes.STRING,
    franchiseId : DataTypes.STRING,
    franchiseId_FK: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee_Masters',
  });
  return Employee_Masters;
};