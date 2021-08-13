const db = require('../../models/index');


module.exports.getAll = async () => {
    const result = db.Employee.findAll({
        attributes: ['employeeId', 'employeeName', 'address', 'phoneNumber', 'email', 'avatarUrl', 'isLocked', 'gender', 'dateOfBirth', 'marriageStatus', 'employeeNo', 'isActived', 'title', 'managerId']
    });
    return result;
}
