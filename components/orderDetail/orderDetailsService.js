const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.OrderDetail.findAll({
        attributes: ['id', 'orderId', 'productId', 'number']
    });
    return result;
}
