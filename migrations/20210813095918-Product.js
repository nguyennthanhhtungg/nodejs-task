'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Products', {
      productId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      productName: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      detailDescription: {
        type: Sequelize.STRING
      },
      productCode: {
        type: Sequelize.STRING
      },
      expiryDate: {
        type: Sequelize.DATE
      },
      manufacturingDate: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.DOUBLE
      },
      discount: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.DOUBLE
      },
      number: {
        type: Sequelize.INTEGER
      },
      attachedGift: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'categoryId'
        }
      },
      supplierId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Suppliers',
          key: 'supplierId'
        }
      },
      tax: {
        type: Sequelize.DOUBLE
      },
      productNameNoSign: {
        type: Sequelize.STRING
      },
      imageName: {
        type: Sequelize.STRING
      },
      imageData: {
        type: Sequelize.STRING.BINARY
      },
      imageType: {
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
  }
};
