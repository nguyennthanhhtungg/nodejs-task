const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.Category.findAll({
        attributes: ["categoryId", "categoryName", "imageUrl"]
    });
    return result;
}
