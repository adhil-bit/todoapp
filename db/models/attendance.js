'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Attendance extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Attendance.init(
        {
            employeeId: DataTypes.INTEGER,
            franchiseId: DataTypes.INTEGER,
            checkIn: DataTypes.DATE,
            checkOut: DataTypes.DATE,
            approvalStatus: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            isDeleted: DataTypes.BOOLEAN,
            attendance: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'Attendance',
        }
    );
    return Attendance;
};
