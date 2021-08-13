const extraFeesService = require('./extraFeesService');

module.exports.getAll = async (req, res, next) => {
    const result = await extraFeesService.getAll();
    res.json(result);
}
