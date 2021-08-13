const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.Product.findAll({
        attributes: ['productId', 'productName', 'shortDescription', 'detailDescription', 'productCode', 'expiryDate', 'manufacturingDate', 'price', 'discount', 'weight', 'number', 'attachedGift', 'origin', 'categoryId', 'supplierId', 'tax', 'imageName', 'imageData', 'imageType']
    });
    return result;
}
