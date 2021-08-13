const employeesService = require('./employeesService');

module.exports.getAll = async (req, res, next) => {
    const result = await employeesService.getAll();
    res.json(result);
}
