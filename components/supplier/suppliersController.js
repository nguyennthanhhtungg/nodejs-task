const suppliersService = require('./suppliersService');

module.exports.getAll = async (req, res, next) => {
    const result = await suppliersService.getAll();
    res.json(result);
}
