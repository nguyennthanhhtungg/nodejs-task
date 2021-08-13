const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.Customer.findAll({
        attributes: ["customerId", "customerName", "address", "phoneNumber", "email", "avatarUrl", "isLocked", "gender", "dateOfBirth", "customerNo"]
    });
    return result;
}
