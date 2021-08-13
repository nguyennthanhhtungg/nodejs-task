'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('ExtraFees', {
      extraFeeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fromHour: {
        type: Sequelize.INTEGER
      },
      fromMinute: {
        type: Sequelize.INTEGER
      },
      toHour: {
        type: Sequelize.INTEGER
      },
      toMinute: {
        type: Sequelize.INTEGER
      },
      extraDeliveryFee: {
        type: Sequelize.DOUBLE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
