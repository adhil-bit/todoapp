'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('AttendanceConfigs', [
            {
                configType: 'radius',
                value: '30',
                comment: 'radius for attendance marking',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('AttendanceConfigs', null, {});
    },
};
