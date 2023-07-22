'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AttendanceConfig extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AttendanceConfig.init(
        {
            configType: DataTypes.STRING,
            value: DataTypes.STRING,
            comment: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'AttendanceConfig',
        }
    );
    return AttendanceConfig;
};
