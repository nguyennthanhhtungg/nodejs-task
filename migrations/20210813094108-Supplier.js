'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Suppliers', {
      supplierId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      supplierName: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      logoUrl: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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
    await  queryInterface.dropTable('Users');
  }
};
