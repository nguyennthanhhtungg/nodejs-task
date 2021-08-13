
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category',{
        categoryId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: {
            type: Sequelize.STRING
        },
        imageUrl: {
            type: Sequelize.STRING
        }
    });

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: 'productId'
        });
    }
    return Category;
};
