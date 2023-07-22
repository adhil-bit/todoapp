'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    User.init(
        {
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            password: DataTypes.STRING,
            userRole: DataTypes.STRING,
            loggedIn: DataTypes.BOOLEAN,
            status: DataTypes.BOOLEAN,
            isDeleted: DataTypes.BOOLEAN,
            lastLogin: DataTypes.DATE,
            allowLogin: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'User',
        }
    );
    return User;
};
