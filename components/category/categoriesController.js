const categoriesService = require('./categoriesService');

module.exports.getAll = async (req, res, next) => {
    const result = await categoriesService.getAll();
    res.json(result);
}
