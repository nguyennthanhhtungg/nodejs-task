const orderDetailsService = require('./orderDetailsService');

module.exports.getAll = async (req, res, next) => {
    const result = await orderDetailsService.getAll();
    res.json(result);
}
