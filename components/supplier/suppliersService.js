const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.Supplier.findAll({
        attributes: ['supplierId', 'supplierName', 'location', 'logoUrl', 'description']
    });
    return result;
}
