'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class franchise extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    franchise.init(
        {
            franchiseName: DataTypes.STRING,
            address: DataTypes.STRING,
            state: DataTypes.STRING,
            district: DataTypes.STRING,
            pincode: DataTypes.STRING,
            franchiseOwnerName: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            location: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            isDeleted: DataTypes.BOOLEAN,
            franchiseId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'franchise',
        }
    );
    return franchise;
};
