const productsService = require('./productsService');

module.exports.getAll = async (req, res, next) => {
    const result = await productsService.getAll();
    res.json(result);
}
