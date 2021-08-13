const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.Order.findAll({
        attributes: ['orderId', 'orderNo', 'customerId', 'updatedDate', 'totalProductMoney', 'totalProduct', 'status', 'deliveryFee']
    });
    return result;
}
