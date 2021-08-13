
module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('Order',{
        orderId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderNo: {
            type: Sequelize.STRING
        },
        customerId: {
            type: Sequelize.INTEGER
        },
        employeeId: {
            type: Sequelize.INTEGER
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
    })

    Order.associate = (models) => {
        Order.belongsTo(models.Customer, {
            as: "customer",
            foreignKey: 'customerId'
        });

        Order.belongsTo(models.Employee, {
            as: "employee",
            foreignKey: 'employeeId'
        });

        Order.hasMany(models.OrderDetail, {
            as: "orderDetails",
            foreignKey: 'id'
        });
    }

    return Order;
};
