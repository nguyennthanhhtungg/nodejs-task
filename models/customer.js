
module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('Customer',{
        customerId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customerName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        avatarUrl: {
            type: Sequelize.STRING
        },
        isLocked: {
            type: Sequelize.BOOLEAN
        },
        gender: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.DATE
        },
        customerNo: {
            type: Sequelize.STRING
        }
    })

    Customer.associate = (models) => {
        Customer.hasMany(models.Order, {
            as: "orders",
            foreignKey: 'orderId'
        });
    }
    return Customer;
};
