const ordersService = require('./ordersService');

module.exports.getAll = async (req, res, next) => {
    const result = await ordersService.getAll();
    res.json(result);
}
