'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Orders', {
      orderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      orderNo: {
        type: Sequelize.STRING
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'customerId'
        }
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'employeeId'
        }
      },
      updatedDate: {
        type: Sequelize.DATE
      },
      totalProductMoney: {
        type: Sequelize.DOUBLE
      },
      totalProduct: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      deliveryFee: {
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
