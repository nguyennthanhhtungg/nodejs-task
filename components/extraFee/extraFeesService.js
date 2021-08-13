const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.ExtraFee.findAll({
        attributes: ['extraFeeId', 'fromHour', 'fromMinute', 'toHour', 'toMinute', 'extraDeliveryFee']
    });
    return result;
}
