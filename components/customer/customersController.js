const customersService = require('./customersService');

module.exports.getAll = async (req, res, next) => {
  const result = await customersService.getAll();
  res.json(result);
}
