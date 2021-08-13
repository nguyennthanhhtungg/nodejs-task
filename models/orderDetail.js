
module.exports = (sequelize, Sequelize) => {
    const OrderDetail = sequelize.define('OrderDetail',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        number: {
            type: Sequelize.INTEGER
        }
    })

    OrderDetail.associate = (models) => {
        OrderDetail.belongsTo(models.Order, {
            as: "order",
            foreignKey: 'orderId'
        });

        OrderDetail.belongsTo(models.Product, {
            as: "product",
            foreignKey: 'productId'
        });

    }

    return OrderDetail;
};
