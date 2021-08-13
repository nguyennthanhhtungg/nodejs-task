
module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define('Supplier',{
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
    })

    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product), {
            as: "products",
            foreignKey: 'productId'
        }
    }

    return Supplier;
};
