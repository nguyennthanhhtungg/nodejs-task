
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product',{
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
            type: Sequelize.INTEGER
        },
        supplierId: {
            type: Sequelize.INTEGER
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
    })

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: 'categoryId'
        });


        Product.hasMany(models.OrderDetail, {
            as: "orderDetails",
            foreignKey: 'id'
        });

        Product.belongsTo(models.Supplier, {
            as: "supplier",
            foreignKey: 'supplierId'
        });
    }

    return Product;
};
